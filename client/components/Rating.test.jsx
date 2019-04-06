import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Rating from './Rating.jsx';

describe('Rating', () => {
  it('should render w/o errors', () => {
    const wrapper = shallow(<Rating />);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});