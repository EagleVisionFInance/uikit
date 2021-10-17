import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.priceBorder};
  border-radius: 10px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.priceBacground};
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink>
      <PancakeRoundIcon width="24px" mr="8px" />
      <Text color="text" bold style={{paddingLeft: 5}}>{`$${cakePriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
