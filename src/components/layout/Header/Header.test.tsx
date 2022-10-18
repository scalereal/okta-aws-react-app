import { render } from '@test-utils';
import Header from './Header.component';

describe('Header', () => {
    it('should render properly', () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
    });
});
