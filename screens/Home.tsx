import { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Container } from '../shared/shared';
import { colors } from '../theme/colors';
import CardSection from '../components/Cards/CardSection';
import { cardsData } from '../utils/const/cardsData';

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
    </HomeContainer>
  )
}

export default Home