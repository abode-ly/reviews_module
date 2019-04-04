import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from './App.jsx'

describe('App component exists', () => {
  it('should render App component w/o throwing an error', () => {
    const test = shallow(<App />);
    expect(test.find('div').exists()).toBe(true);
  })
<<<<<<< HEAD
});
=======
});
>>>>>>> 2a6c31673d8b6e0fb578a6dd160995aa7c028254
