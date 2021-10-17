import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon } = Icons;

const DayButton = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #000000;
`;

const NightButton = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #000000;
`;

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme}) => {
  const dayBackColor = isDark ? '#000000' : '#FFFFFF';
  const dayBorderColor = isDark ? '#000000' : 'rgba(0,0,0,0.2)';
  const nightBackColor = isDark ? '#FFFFFF' : '#000000';
  const nightBorderColor = isDark ? 'rgba(0,0,0,0.2)' : '#000000';

  return <Button variant="text" onClick={() => toggleTheme(!isDark)} style={{padding: '0 15px 0 0'}}>
    {/* alignItems center is a Safari fix */}
    <Flex alignItems="center">
      <DayButton style={{backgroundColor: dayBackColor, borderColor: dayBorderColor, marginRight: 5}}>
        <SunIcon color={isDark ? "textDisabled" : "text"} width="24px" />
      </DayButton>
      <DayButton style={{backgroundColor: nightBackColor, borderColor: nightBorderColor}}>
        <MoonIcon color={isDark ? "textDisabled" : "textDisabled"} width="24px" />
      </DayButton>
    </Flex>
  </Button>
};

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
