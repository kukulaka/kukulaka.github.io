import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SearchIcon from './index'

export default {
  title: 'Atoms/Search Icon',
  component: SearchIcon,
} as ComponentMeta<typeof SearchIcon>;

const Template: ComponentStory<typeof SearchIcon> = args => <SearchIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};
