import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Reviews from './Reviews.jsx';

const data = [{
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
},
{
  _id: '5aca123414sdf212314b',
  user_name: 'Matt Smith',
  user_photo: 'http://testimage2.jpeg',
  review_text: 'Test test test. Test test.',
  review_date: '2019-03-15T22:43:21.662Z',
  accuracy: { type: 'Buffer', data: [2] },
  check_in: { type: 'Buffer', data: [5] },
  cleanliness: { type: 'Buffer', data: [3] },
  communication: { type: 'Buffer', data: [4] },
  location: { type: 'Buffer', data: [5] },
  value: { type: 'Buffer', data: [5] },
},
];

describe('Reviews', () => {
  it('should render w/o errors', () => {
    const wrapper = shallow(<Reviews reviews={data} />);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
