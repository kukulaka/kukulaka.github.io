import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchBar from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '3. Organisms /Search Travel Bar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = args => <SearchBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
