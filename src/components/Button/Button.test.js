import React from 'react';
import Button from './Button';
import { shallow, mount } from 'enzyme';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Button: snapshot tests', () => {
  it('should render correctly in primary variant', () => {
    const component = shallow(<Button variant="primary">Test</Button>);
    expect(component).toMatchSnapshot();
  });

  it('should render correctly in secundary variant', () => {
    const component = shallow(<Button variant="secundary">Test</Button>);
    expect(component).toMatchSnapshot();
  });
});

test('renders the button', async () => {
  render(<Button />);
  expect(screen.getByTestId('button-component')).toBeInTheDocument();
});
