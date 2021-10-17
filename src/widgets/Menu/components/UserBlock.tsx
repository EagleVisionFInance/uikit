import React from "react";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

const StyledButton = styled(Button)`
  borderRadius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-width: 0;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.text}
  color: ${({ theme }) => theme.colors.background}
`;

interface Props {
  account?: string;
  chainId?: number;
  login: Login;
  logout: () => void;
}

const UserBlock: React.FC<Props> = ({ account, chainId, login, logout }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, chainId);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <div>
      {account ? (
        <StyledButton
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </StyledButton>
      ) : (
        <StyledButton
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect Wallet
        </StyledButton>
      )}
    </div>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
