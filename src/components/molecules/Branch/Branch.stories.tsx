import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Branch from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '2. Molecules/Branch',
  component: Branch,
} as ComponentMeta<typeof Branch>;

const Template: ComponentStory<typeof Branch> = args => (
  <Branch {...args} />
);

export const Airport = Template.bind({});
Airport.args = {
  id: 0,
  title: 'Heathrow Airport (LHR)',
  subTitle: 'London, Greater London, United Kingdom',
  locationType: 'Airport',
  selected: false,
};

export const City = Template.bind({});
Airport.args = {
  id: 1,
  title: 'Manchester',
  subTitle: 'Manchester, Greater Manchester United Kingdom',
  locationType: 'City',
  selected: true,
};

export const Station = Template.bind({});
Airport.args = {
  id:2,
  title: 'Manchester Train Station',
  subTitle: 'Manchester, Greater Manchester United Kingdom',
  locationType: 'Station',
  selected: false,
};
