import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../components/atoms/Button';

describe("Button Component Tests", () => {
  it("Renders correctly in DOM", () => {
      shallow(
          <Button label="Search" />
      );
  });
  it("Expects to find button HTML element in the DOM", () => {
      const wrapper = shallow(<Button label="Search"/>)
      expect(wrapper.find('button')).toHaveLength(1);
  });

  it("Expects to run onClick function when button is pressed in the DOM", () => {
      const mockCallBackClick = jest.fn();
      const wrapper = shallow(<Button onClick={mockCallBackClick} label="Search"/>);
      wrapper.find('button').simulate('click');
      expect(mockCallBackClick.mock.calls.length).toEqual(1);
  });
});