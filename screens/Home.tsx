import { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Container } from '../shared/shared';
import { colors } from '../theme/colors';
import CardSection from '../components/Cards/CardSection';
import { cardsData, transactionsData, sendMoneyData } from '../utils/const';
import TransactionSection from '../components/Transactions/TransactionSetion';
import SendMoneySection from '../components/SendMoney/SendMoneySection';

const HomeContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  flex: 1;
`
const Home: FC = () => {
  return (
    <HomeContainer>
      <StatusBar style='dark' />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionsData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  )
}

export default Home