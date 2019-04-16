import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Search from './Search.jsx';
import { doesNotReject } from 'assert';

describe('Search', () => {
  it('should render w/o errors', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find('form').exists()).toBe(true);
  });
});