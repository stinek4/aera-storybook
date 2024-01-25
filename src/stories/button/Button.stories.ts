
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      options: ['primary', 'secondary', 'text', 'danger'],
      defaultValue: 'primary',
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "primary",
    label: 'Primary Button',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    label: 'Secondary Button',
    disabled: false,
  },
};
export const Text: Story = {
  args: {
    variant: "text",
    label: 'Text Button',
    disabled: false,    
  },
};
export const Danger: Story = {
  args: {
    variant: "danger",
    label: 'Danger Button',
    disabled: false,

  },
};
