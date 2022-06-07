import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextBox from './index'

export default {
  title: '2. Molecules/Text Box',
  component: TextBox,
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = args => <TextBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Pick-up Location'
  
  
};
