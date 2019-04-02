import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/components/App.jsx'

describe('App component exists', () => {
  it('should render App component w/o throwing an error', () => {
    const test = shallow(<App/>);
    expect(test.find('div').exists()).toBe(true);
  })
});
