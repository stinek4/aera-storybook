import React from 'react';
import {ToggleButton} from '../button/ToggleButton';

import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/Buttons/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "On/Off",
    disabled: false,
    checked: true
  }
}
