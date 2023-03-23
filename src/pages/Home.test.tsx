import { render } from '@testing-library/react';
import Home from './Home';

describe('<Home>', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeDefined();
  });

  it('renders consistently', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
