import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Ratings from './Ratings.jsx';

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
  _id: '5234qwer234af',
  user_name: 'Mattie Smith',
  user_photo: 'http://testimage3.jpeg',
  review_text: 'Test test test. Test. Test test.',
  review_date: '2017-04-18T22:43:21.662Z',
  accuracy: { type: 'Buffer', data: [3] },
  check_in: { type: 'Buffer', data: [5] },
  cleanliness: { type: 'Buffer', data: [2] },
  communication: { type: 'Buffer', data: [2] },
  location: { type: 'Buffer', data: [4] },
  value: { type: 'Buffer', data: [3] },
}];

const ratings = {
  communication: 0,
  value: 0,
  cleanliness: 0,
  location: 0,
  checkIn: 0,
  accuracy: 0,
};

describe('Ratings', () => {
  it('should render w/o errors', () => {
    const wrapper = shallow(<Ratings ratings={ratings} foundAverage={false} reviews={data} calculateAvg={()=>{}} />);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  // it('should contain an Accuracy Rating', () => {
  //   let wrapper = shallow(<Ratings reviews={data} />).find('Rating');
  //   expect(wrapper.at(0).key()).to.equal('accuracy');
  // });
});
