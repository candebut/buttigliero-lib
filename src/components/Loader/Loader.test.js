import React from 'react';
import Loader from './Loader';
import { shallow, mount } from 'enzyme';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Loader: snapshot tests', () => {
  it('should render correctly in primary variant', () => {
    const component = shallow(<Loader>Loading test</Loader>);
    expect(component).toMatchSnapshot();
  });
});

test('renders the loader component', () => {
  render(<Loader />);
  expect(screen.getByTestId('loader')).toBeInTheDocument();
});
