import { URLRoot } from '@constants/clientUrls';
import { renderWithRouter, screen } from '@test-utils';
import { oktaStorage } from '@utils/testData';
import { MemoryRouter } from 'react-router-dom';
import { pathsWhereSidebarHidden } from './config';
import { AppSideNav } from './SideNav';

const mockHistoryPush = jest.fn();
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useHistory: () => ({
        push: mockHistoryPush
    })
}));

const renderSideNav = (url: string = URLRoot.dashboard) =>
    renderWithRouter(
        <MemoryRouter initialEntries={[url]}>
            <AppSideNav />
        </MemoryRouter>
    );

describe('SideNav', () => {
    it('should render properly', () => {
        localStorage.setItem('okta-token-storage', JSON.stringify(oktaStorage));
        const { container } = renderSideNav(URLRoot.dashboard);
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should not render sidebar where it is hidden', () => {
        localStorage.setItem('okta-token-storage', JSON.stringify(oktaStorage));
        const { container } = renderSideNav(pathsWhereSidebarHidden[0]);
        expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });

    it('should not render sidebar when user is not authenticated', () => {
        renderSideNav(pathsWhereSidebarHidden[0]);
        expect(screen.queryByText('Dashboard')).not.toBeInTheDocument();
    });
});
