import React from 'react';
import { mount } from 'enzyme';
import SearchIcon from '../components/atoms/SearchIcon';

describe('Icon', () => {
  it('should contain an svg', () => {
    const wrapper = mount(<SearchIcon/>);

    expect(wrapper.find('svg')).toBeDefined();
  });
});
