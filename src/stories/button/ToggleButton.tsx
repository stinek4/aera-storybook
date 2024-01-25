import {ToggleButton as RACToggleButton} from 'react-aria-components';
import './ToggleButton.css';
import styled from "styled-components";
import React from 'react';
import { Colors, ButtonColors } from "../../styles/Colors"


interface ToggleButtonProps {
    label?: string,
    name?: string, 
    indicator?: string,
    onChange: () => void,
    disabled?: boolean,
    checked: boolean;
}

const ToggleButton = ({label, name, indicator, onChange, disabled, checked}: ToggleButtonProps) => {
  return (
    <>
      {label &&
      <StyledLabel></StyledLabel>  
    }
      <StyledToggleButton />
    </>
  )
}

export {ToggleButton};

const StyledLabel = styled.label`` 
const StyledToggleButton = styled(RACToggleButton)`
/* color: var(--text-color); */
/* forced-color-adjust: none; */
  background: ${Colors.aeraPrimaryGreen};
  border: var(--spacing-spacing-none, 1px) solid #232E30;
  border-radius: 6.25rem;
  appearance: none;
  vertical-align: middle;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 6px 10px;

  &[data-pressed] {
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.1);
    background: var(--button-background-pressed);
    border-color: var(--border-color-pressed);
  }

  &[data-selected] {
    background: var(--highlight-background);
    border-color: var(--highlight-background);
    color: var(--highlight-foreground);

    &[data-pressed] {
      background: var(--highlight-background-pressed);
      border-color: var(--highlight-background-pressed);
    }
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  &[data-disabled] {
    border-color: var(--border-color-disabled);
    background: var(--button-background);
    color: var(--text-color-disabled);
  }`