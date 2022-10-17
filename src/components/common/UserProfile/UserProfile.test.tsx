import { URLRoot } from '@constants/clientUrls';
import { cleanup, fireEvent, renderWithRouter, screen } from '@test-utils';
import { oktaStorage } from '@utils/testData';
import { MemoryRouter } from 'react-router-dom';
import { UserProfile } from './UserProfile.component';

const mockSignOut = jest.fn(),
    mockSignInWithRedirect = jest.fn(),
    mockSignInWithCredentials = jest.fn(),
    mockIsAuthenticated = jest.fn(() => Promise.resolve({ data: true }));

const renderUserProfile = () =>
    renderWithRouter(
        <MemoryRouter initialEntries={['/']}>
            <UserProfile />
        </MemoryRouter>
    );

const mockHistoryPush = jest.fn();
const mockDashboardUrl = URLRoot.dashboard;

jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useHistory: () => ({
        push: mockHistoryPush
    }),
    useLocation: () => ({
        pathname: mockDashboardUrl
    })
}));

jest.mock('@okta/okta-react', () => {
    return {
        useOktaAuth: () => ({
            oktaAuth: {
                signOut: mockSignOut
            },
            authState: {}
        })
    };
});

describe('UserProfile', () => {
    beforeAll(() => {
        localStorage.setItem('okta-token-storage', JSON.stringify(oktaStorage));
    });

    afterEach(() => {
        cleanup();
        jest.clearAllMocks();
    });

    it('should render properly', () => {
        const { container } = renderUserProfile();
        expect(container).toMatchSnapshot();
    });

    it('should use username from local storage', () => {
        renderUserProfile();
        const userInitials = screen.getByText('DN');
        expect(userInitials).toBeInTheDocument();
        fireEvent.click(userInitials);
        const userName = screen.getByText('dummy name');
        expect(userName).toBeInTheDocument();
        expect(userName).toHaveStyle({
            textTransform: 'uppercase'
        });
    });

    it('should call signOut fn', () => {
        renderUserProfile();
        fireEvent.click(screen.getByText('DN'));
        fireEvent.click(screen.getByText('Sign Out'));
        expect(mockSignOut).toBeCalled();
    });
});
