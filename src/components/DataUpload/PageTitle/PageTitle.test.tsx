import { render, screen } from '@test-utils';
import { PageTitle } from './PageTitle';

describe('PageTitle', () => {
    it('should render properly', () => {
        render(<PageTitle showHelperText />);
        expect(screen.getByText('Data upload')).toBeInTheDocument();
        expect(screen.getByText('All the fields are mandatory')).toBeInTheDocument();
    });

    it('should render without helper text', () => {
        render(<PageTitle showHelperText={false} />);
        expect(screen.getByText('Data upload')).toBeInTheDocument();
        expect(screen.queryByText('All the fields are mandatory')).not.toBeInTheDocument();
    });
});
