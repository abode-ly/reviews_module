import React from 'react';
import { shallow, mount, render } from 'enzyme';
import PageNavBtns from './PageNavBtns.jsx';
import { doesNotReject } from 'assert';

describe('PageNavPtns', () => {
  it('should render w/o errors', () => {
    const wrapper = shallow(<PageNavPtns newPageFn={this.newPage} newPage={this.newPage} pageNum={pageNum} maxPage={maxPage} />);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
