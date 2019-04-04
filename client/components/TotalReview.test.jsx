import React from 'react';
import { shallow, mount, render } from 'enzyme';
import TotalReviews from './TotalReviews';

describe('TotalReviews', () => {
  it('should render w/o errors', () => {
    const wrapper = shallow(<TotalReviews />);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});