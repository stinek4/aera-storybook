
import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    label: 'Primary',
    children: '',
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: 'Secondary',
    children: '',

  },
};
export const Warning: Story = {
  args: {
    variant: "warning",
    label: 'Warning',
    children: '',

  },
};
export const Danger: Story = {
  args: {
    variant: "danger",
    label: 'Danger',
    children: '',


  },
};
