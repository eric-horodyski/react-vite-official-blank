import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App>', () => {
  it('renders without crashing', () => {
    const { baseElement } = render(<App />);
    screen.debug();
    expect(baseElement).toBeDefined();
  });

  it('renders consistently', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
