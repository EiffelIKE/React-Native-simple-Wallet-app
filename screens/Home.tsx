import { FC } from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { Container } from '../shared/shared';
import { colors } from '../theme/colors';

const HomeContainer = styled(Container)`
  background-color: ${colors.grayLight};
  width: 100%;
  flex: 1;
`
const Home: FC = () => {
  return (
    <HomeContainer>
      <StatusBar style='dark' />
    </HomeContainer>
  )
}

export default Home