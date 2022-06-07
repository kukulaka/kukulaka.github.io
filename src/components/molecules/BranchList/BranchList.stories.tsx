import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BranchList from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: '2. Molecules/Branch List',
  component: BranchList,
} as ComponentMeta<typeof BranchList>;

const Template: ComponentStory<typeof BranchList> = args => (
  <BranchList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  branches: [{id: 0,
  title: 'Heathrow Airport (LHR)',
  subTitle: 'London, Greater London, United Kingdom',
  locationType: 'Airport',
  selected: false}, {
    id: 1,
    title: 'Manchester',
    subTitle: 'Manchester, Greater Manchester United Kingdom',
    locationType: 'City',
    selected: true,
  }, {
    id:2,
    title: 'Manchester Train Station',
    subTitle: 'Manchester, Greater Manchester United Kingdom',
    locationType: 'Station',
    selected: false,
  }]
};

