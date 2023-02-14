import { FC } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import { StackScreenProps } from "@react-navigation/stack";
import { colors } from "../theme/colors";
import { Container } from "../shared/shared";
import { RootStackProps } from "../navigators/RootStack";
import {AmountSection, BalanceCardSection, ButtonSection} from "../components/Balance";

type BalanceProps = StackScreenProps<RootStackProps, 'Balance'>

export const BalanceContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  padding: 25px;
  flex: 1;
`

const Balance: FC<BalanceProps> = ({route}) => {
  return (
    <BalanceContainer>
      <StatusBar style="dark" />
      <AmountSection balance={route?.params?.balance}/>
      <BalanceCardSection {...route?.params} />
      <ButtonSection />
    </BalanceContainer>
  )
}

export default Balance