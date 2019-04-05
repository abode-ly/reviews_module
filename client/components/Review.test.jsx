import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Review from './Review.jsx';

const data = {
  _id: '5ac45234b',
  user_name: 'Jane Smith',
  user_photo: 'http://testimage.jpeg',
  review_text: 'Test test test test. Test test.',
  review_date: '2018-04-14T22:43:21.662Z',
  accuracy: { type: 'Buffer', data: [5] },
  check_in: { type: 'Buffer', data: [3] },
  cleanliness: { type: 'Buffer', data: [4] },
  communication: { type: 'Buffer', data: [5] },
  location: { type: 'Buffer', data: [2] },
  value: { type: 'Buffer', data: [5] },
};

describe('Review', () => {
  it('should render w/o errors', () => {
    const wrapper = shallow(<Review review={data}/>);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});