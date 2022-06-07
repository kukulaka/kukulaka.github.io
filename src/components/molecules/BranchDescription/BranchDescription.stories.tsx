import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BranchDescription from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '2. Molecules/Branch Description ',
  component: BranchDescription,
} as ComponentMeta<typeof BranchDescription>;

const Template: ComponentStory<typeof BranchDescription> = args => (
  <BranchDescription {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Heathrow Airport (LHR)',
  subTitle: 'London, Greater London, United Kingdom',
};
