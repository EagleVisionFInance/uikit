import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { SwapButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: ${({ theme }) => theme.colors.swapMenuBack};
  color: #FFFFFF;
  width: 150px;
  text-align: center;
  padding: 12px 0;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  height: unset;
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const StyledButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button)<BaseButtonProps>`
  background-color: ${({ theme }) => theme.colors.swapMenuActive};
  color: #FFFFFF;
  width: 150px;
  text-align: center;
  padding: 12px 0;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

const ButtonMenuItem: PolymorphicComponent<SwapButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: SwapButtonMenuItemProps) => {
  if (!isActive) {
    return (
      <InactiveButton
        forwardedAs={as}
        variant={variant}
        {...props}
      />
    );
  }

  return <StyledButton as={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
