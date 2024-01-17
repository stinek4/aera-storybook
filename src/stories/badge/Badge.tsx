'use client';

import React, { ReactNode } from "react";
import styled from "styled-components";
import { BadgeColors } from "../../styles/Colors"

export interface BadgeProps {
    variant?: string;
    label: string;
    children: ReactNode;
}

const Badge = ({variant, label, ...props}: BadgeProps) => {
    return(
        <VariantBadge id="badge" label={label} variant={variant} {...props}>{label}</VariantBadge>
    )
};

export {Badge};

const VariantBadge = styled.button<BadgeProps>`
display: flex;
flex-direction: row;
font-family: Inter;
font-size: 0.75rem;
font-style: normal;
font-weight: 700;
line-height: normal;
padding: 4px 8px;
align-items: center;
justify-content: center;
text-align: center;
border-radius: 24px;
border: ${({ variant }) => BadgeColors.border.default[variant as keyof typeof BadgeColors.border.default]};
color: ${({ variant }) => BadgeColors.text.default[variant as keyof typeof BadgeColors.text.default]};
background-color: ${({ variant }) =>
  BadgeColors.backGround.default[variant as keyof typeof BadgeColors.backGround.default]};
`;