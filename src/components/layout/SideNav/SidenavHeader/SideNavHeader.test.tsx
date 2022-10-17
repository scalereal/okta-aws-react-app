import { renderWithRouter } from '@test-utils';
import { oktaStorage } from '@utils/testData';
import { SideNavHeader } from './SideNavHeader';

const renderer = () => renderWithRouter(<SideNavHeader />);

describe('SideNavHeader', () => {
    beforeEach(() => localStorage.setItem('okta-token-storage', JSON.stringify(oktaStorage)));

    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });
});
