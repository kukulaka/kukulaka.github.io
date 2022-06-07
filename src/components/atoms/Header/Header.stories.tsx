import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Header Logo',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};
