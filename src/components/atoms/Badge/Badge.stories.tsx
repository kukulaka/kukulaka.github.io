import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Badge from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '1. Atoms/Badge ',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = args => <Badge {...args} />;

export const Airport = Template.bind({});
Airport.args = {
  locationType: 'Airport',
};

export const City = Template.bind({});
City.args = {
  locationType: 'City',
};

export const Station = Template.bind({});
Station.args = {
  locationType: 'Station',
};

