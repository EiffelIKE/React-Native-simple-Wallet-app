import {FC} from 'react';
import styled from 'styled-components/native';
import { TransactionIconProps } from './types';
import { Ionicons } from "@expo/vector-icons";
import { colors } from '../../theme/colors';

const StyledView = styled.View`
  height: 45px;
  width: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`

const TransactionIcon: FC<TransactionIconProps> = (props) => {
  return (
    <StyledView style={{backgroundColor: props.background}} >
      <Ionicons name={props.icon}  size={25} color={colors.white} />
    </StyledView>
  )
}

export default TransactionIcon