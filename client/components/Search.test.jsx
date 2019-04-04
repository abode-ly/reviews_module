import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Search from './Search.jsx';

describe('Search', () => {
  it('should render w/o errors', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('form').exists()).toBe(true);
  });
});