import { mockAxios, render } from '@test-utils';
import Header from '../Header';
import PageContent from '../PageContent';
import { PageLayout } from './PageLayout';

jest.mock('react-router', () => ({
    ...(jest.requireActual('react-router') as any),
    useLocation: () => ({
        pathname: ''
    })
}));

describe('PageLayout component', () => {
    beforeAll(() => {
        mockAxios.onGet('https://run.mocky.io/v3/7937982d-ac84-4657-a1f2-e4fcf5f6d375').reply(200, {
            firstName: 'Jon',
            lastName: 'Doe',
            email: 'jon@doe.com',
            phoneNumber: '849489283131'
        });
    });

    it('should render properly', () => {
        const { container } = render(
            <PageLayout>
                <Header />
                <PageContent>
                    <div>Success</div>
                </PageContent>
            </PageLayout>
        );
        expect(container).toHaveTextContent('Success');
    });
});
