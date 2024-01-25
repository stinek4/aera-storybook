import {Switch} from './Switch';

import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof Switch> = {
  title: 'Components/Buttons/Switch',
  component: Switch,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: {type: 'boolean'}
      }, 
    disabled: {
      control: {type: 'boolean'}
      } 
},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    disabled: false,
    checked: false
  }
}

