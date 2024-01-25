import {
  Switch as AriaSwitch,
  SwitchProps as AriaSwitchProps
} from 'react-aria-components';
import React from 'react';
import styled from "styled-components";
import { Colors } from "../../styles/Colors"


//Have to create extended interface and extended switch to create custom props on a react-aria-component
interface ExtendedSwitchProps extends SwitchProps {
  disabled: boolean,
  checked: boolean,
  checkedAndDisabled: boolean,
  onChange?: () => void;
}

export interface SwitchProps extends Omit<AriaSwitchProps, 'children'> {
  children: React.ReactNode;
}

const ExtendedSwitch: React.FC<ExtendedSwitchProps> = (props) => {
  return <StyledSwitch data-disabled {...props} />;
}

const Switch = ({ children, disabled, checked,  onChange, ...props }: ExtendedSwitchProps) => {
  console.log('disabled', disabled)
  console.log('checked', checked)

  const candd = disabled == true && checked == true

  return (
      <ExtendedSwitch onChange={onChange} isReadOnly={candd}  isSelected={checked} checked={checked} disabled={disabled} isDisabled={disabled} {...props}>
          <div className="indicator" />
          {children}
      </ExtendedSwitch>
  );
}

export {Switch};

const StyledSwitch = styled(AriaSwitch)`
  display: flex;
  gap: 0.571rem;
  font-size: 1.143rem;
  width: 3.125rem;
  color: ${Colors.aeraWhite};
  forced-color-adjust: none;

  .indicator {
    display: flex;
    align-items: center;
    width: 3.125rem;
    height: 1.75rem;
    border: 1px solid #232E30;
    background: ${Colors.aeraWhite};
    border-radius: 1.143rem;
    transition: all 200ms;

    &:before {
      content: '';
      display: block;
      margin: 0.12rem;
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid #232E30;
      background: ${Colors.aeraWhite};
      border-radius: 16px;
      transition: all 200ms;
    }
  }

  &:checked{

    &[data-selected] .indicator {
        border: 1px solid #232E30;
        background: ${Colors.aeraPrimaryGreen};
        &:before {
          background: ${Colors.aeraWhite};
          transform: translateX(70%);
        }
      }

    }
  
  &[data-pressed] .indicator {
    border: 1px solid #232E30;
    background: ${Colors.aeraWhite};

    &:before {
      background: ${Colors.aeraWhite};
    }
  }

  &[data-selected] {
    .indicator {
      border: 1px solid #232E30;
      background: ${Colors.aeraPrimaryGreen};
      &:before {
        background: ${Colors.aeraWhite};
        transform: translateX(70%);
      }
    }

    &[data-pressed] {
      .indicator {
        border: 1px solid #232E30;
        background: ${Colors.aeraWhite};
      }
    }
  }

  &[data-disabled] {
    color: ${Colors.aeraWhite};

    .indicator {
      border: 1px solid ${Colors.aeraPrimaryGrey};
      background: ${Colors.aeraWhite};

      &:before {
        background: ${Colors.aeraWhite};
        border: 1px solid ${Colors.aeraPrimaryGrey};

      }
    }
  }
  &[data-selected]&[data-disabled]{
    .indicator {
        border: none;
        background: ${Colors.aeraPrimaryGrey};
        &:before {
          background: ${Colors.aeraWhite};
          border: none;
          transform: translateX(89%);

        }
      }
  }

`


const InvisibleInput = styled.input`
    position: absolute;
    z-index: +1;
    opacity: 0;
    margin: 0.12rem;
      width: 1.5rem;
      height: 1.5rem;
`
