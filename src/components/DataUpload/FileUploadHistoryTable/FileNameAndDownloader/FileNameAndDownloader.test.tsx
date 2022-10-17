import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { fireEvent, render, screen } from '@test-utils';
import { FileNameAndDownloader } from './FileNameAndDownloader';

const defaultProps = {
        rowData: {
            fileName: 'dummyFile.csv',
            key: 'dummy_key',
            message: 'Success'
        }
    },
    renderer = (props = defaultProps) => render(<FileNameAndDownloader {...props} />);

jest.mock('@aws-sdk/s3-request-presigner', () => ({
    ...jest.requireActual('@aws-sdk/s3-request-presigner'),
    getSignedUrl: jest.fn()
}));

describe('FileNameAndDownloader', () => {
    it('should render FileNameAndDownloader properly', () => {
        renderer();
        expect(screen.getByText(defaultProps.rowData.fileName)).toBeInTheDocument();
    });

    it('should call aws s3 getSignedUrl on filename click', () => {
        renderer();
        fireEvent.click(screen.getByText(defaultProps.rowData.fileName));
        expect(getSignedUrl).toBeCalled();
    });
});
