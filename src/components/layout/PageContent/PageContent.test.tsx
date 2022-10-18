import { renderWithRouter } from '@test-utils';
import PageContent from './PageContent';

describe('PageContent component', () => {
    it('should render properly', () => {
        const { container } = renderWithRouter(<PageContent pageTitle="test">Demo PageContent</PageContent>);
        expect(container).toMatchSnapshot();
    });
});
