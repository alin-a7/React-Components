import { render, screen } from '@testing-library/react';

import Page404 from '../pages/404Page'

describe('Page 404', () => {
  test('must be rendered successfully', () => {
    render(<Page404 />);
    expect(screen.getByText('404 NOT FOUND')).toBeInTheDocument();
  });
});
