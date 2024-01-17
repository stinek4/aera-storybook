'use client';

import React, { ReactNode } from 'react';
// import './button.css';
import styled from "styled-components";
import { Colors, ButtonColors } from "../../styles/Colors"


export interface ButtonProps {
  variant?: string;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
}

const Button = ({
  // primary = false,
  variant,
  backgroundColor,
  size = 'medium',
  label,
  disabled,
  children,
  ...props
}: ButtonProps) => {
  return (
    <VariantButton
      type="button"
      label={label}
      id="button"
      disabled={disabled}
      variant={variant}
      {...props}
    >
      {label}

    </VariantButton>
  );
};
export {Button};


const VariantButton = styled.button<ButtonProps>`
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    height: 40px;
    gap: 8px;
    font-weight: 700;
    font-size: 18px;
    padding-right: 24px;
    padding-left: 24px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 24px;
    line-height: 21.78px;
    border: ${({ variant }) => ButtonColors.border.default[variant as keyof typeof ButtonColors.border.default] ?? 'none'};
    color: ${({ variant }) => ButtonColors.text.default[variant as keyof typeof ButtonColors.text.default]};
    background-color: ${({ variant }) =>
      ButtonColors.backGround.default[variant  as keyof typeof ButtonColors.backGround.default]};
    :focus {
        background-color: ${({ variant }) =>
            ButtonColors.backGround.default[variant  as keyof typeof ButtonColors.backGround.default]};
        outline: 4px solid ${Colors.aeraSecondaryLightBlue};
        text-decoration: ${({ variant }) => variant === "text" && "underline"};
        text-underline-offset: 3px;
    }
    :hover {
        background-color: ${({ variant }) =>
          ButtonColors.backGround.hover[variant  as keyof typeof ButtonColors.backGround.hover]};
        text-decoration: ${({ variant }) => variant === "text" && "underline"};
        text-underline-offset: 3px;
    }
    :active {
        background-color: ${({ variant }) =>
          ButtonColors.backGround.active[variant  as keyof typeof ButtonColors.backGround.active]};
        text-decoration: ${({ variant }) => variant === "text" && "underline"};
        text-underline-offset: 3px;
    }
    :disabled {
        background-color: ${({ variant }) =>
          ButtonColors.backGround.disabled[variant  as keyof typeof ButtonColors.backGround.disabled]};
        color: ${({ variant }) => ButtonColors.text.disabled[variant  as keyof typeof ButtonColors.text.disabled]};
    }
    @media (min-width: 640px) {
        min-width: fit-content;
        max-width: 100%;
    }
    @media (max-width: 640px) {
        flex: auto;
    }
`;
