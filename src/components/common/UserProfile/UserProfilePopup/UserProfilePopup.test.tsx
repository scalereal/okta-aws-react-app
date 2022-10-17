import { Popover } from '@medly-components/core';
import { fireEvent, render, screen } from '@test-utils';
import { oktaStorage } from '@utils/testData';
import { MemoryRouter } from 'react-router-dom';
import { Props } from './types';
import { UserProfilePopup } from './UserProfilePopup.component';

const signOutMock = jest.fn(),
    renderUserProfilePopup = ({
        showSeparator = false,
        userName = '',
        signOut = signOutMock,
        routerPath = '/sample'
    }: Partial<Props> & { routerPath?: string }) =>
        render(
            <MemoryRouter initialEntries={[routerPath]}>
                <Popover interactionType="click">
                    <UserProfilePopup {...{ showSeparator, userName, signOut }} />
                </Popover>
            </MemoryRouter>
        );

describe('UserProfilePopup', () => {
    beforeAll(() => {
        localStorage.setItem('okta-token-storage', JSON.stringify(oktaStorage));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render properly', async () => {
        renderUserProfilePopup({ showSeparator: true, userName: 'Dummy' });
        const nameInitial = screen.getByText('D');
        expect(nameInitial).toBeInTheDocument();
        fireEvent.click(nameInitial);
        expect(await screen.findByText('Sign Out')).toBeInTheDocument();
    });

    it('should render user initials as empty string if username is not provided or undefined', async () => {
        const { container } = renderUserProfilePopup({ showSeparator: true, userName: undefined });
        expect(container).toMatchSnapshot();
    });
});
