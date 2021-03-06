import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 10px;
  margin: 0 5px 0 10px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <IconButton variant="text" onClick={() => pushNav(true)}>
          <CogIcon />
        </IconButton>
      </Container>
    );
  }

  const backColor = isDark ? '#2B373D' : '#FAF9FA';

  return (
    <Container>
      <SocialEntry>
        {/* <CakePrice cakePriceUsd={cakePriceUsd} /> */}
        
      </SocialEntry>
      <SettingsEntry style={{backgroundColor : backColor}}>
        {/* <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} /> */}
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
        <SocialLinks />
      </SettingsEntry>
    </Container>
  );
};

export default PanelFooter;
