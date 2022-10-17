import { addToast } from '@medly-components/core';
import { fireEvent, mockAxios, render, screen, waitFor } from '@test-utils';
import { fileMetaData, fileUploadHistory, oktaStorage } from '@utils/testData';
import { DataUpload } from './DataUpload';

const renderer = () => render(<DataUpload />),
    mockS3Send = jest.fn(),
    formValuesSelection = () => {
        const str = JSON.stringify('dummy Text'),
            blob = new Blob([str]),
            file = new File([blob], 'dummy.csv', {
                type: 'text/csv'
            });
        fireEvent.change(screen.getByLabelText('Choose a file'), { target: { files: [file] } });
        fireEvent.submit(screen.getByRole('form'));
    };

jest.mock('@medlypharmacy/satellite-auth', () => ({
    useAuthContext: () => ({})
}));

jest.mock('@aws-sdk/client-s3', () => ({
    PutObjectCommand: jest.fn(),
    ListObjectsV2Command: jest.fn(),
    HeadObjectCommand: jest.fn(),
    S3Client: jest.fn().mockImplementation(() => ({
        send: mockS3Send
    }))
}));

jest.mock('@aws-sdk/s3-request-presigner', () => ({
    getSignedUrl: jest.fn().mockImplementation(() => new Promise((resolve, reject) => resolve('https://sample.com/')))
}));

jest.mock('@medly-components/core', () => ({
    ...jest.requireActual('@medly-components/core'),
    addToast: jest.fn()
}));

describe('DataUpload', () => {
    beforeAll(() => {
        localStorage.setItem('okta-token-storage', JSON.stringify(oktaStorage));
    });

    it('should render properly', () => {
        const { container } = renderer();
        expect(screen.getByText('Data upload')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should call aws file listing on render', async () => {
        mockS3Send.mockImplementationOnce(() => Promise.resolve({ Contents: [{ Key: fileUploadHistory[0].key }] }));
        mockS3Send.mockImplementation(() => Promise.resolve({ Metadata: fileMetaData }));
        renderer();
        expect(mockS3Send).toBeCalled();
    });

    it('should call aws file listing on render and it should render empty table', async () => {
        mockS3Send.mockImplementationOnce(() => Promise.resolve({ Contents: undefined }));
        const { container } = renderer();
        expect(mockS3Send).toBeCalled();
        expect(container.querySelector('table')).toBeInTheDocument();
        expect(await screen.findByText('No result')).toBeInTheDocument();
    });

    it('should show success message on file upload success call', async () => {
        mockAxios.onPut('https://sample.com/').reply(200);
        renderer();
        formValuesSelection();
        await waitFor(() =>
            expect(addToast).toBeCalledWith({
                variant: 'success',
                message: 'File uploaded successfully'
            })
        );
    });

    it('should show failure message on file upload failure', async () => {
        mockAxios.onPut('https://sample.com/').reply(404);
        renderer();
        formValuesSelection();
        await waitFor(() =>
            expect(addToast).toBeCalledWith({
                variant: 'error',
                message: 'Upload failed: Try uploading the file again'
            })
        );
    });
});
