import { FC } from "react";
import { View } from "react-native";
import { CardProps } from "./types";
import { colors } from "../../theme/colors";
import { RegularText, SmallText } from "../Texts";
import { 
  CardBackGround,
  CardTouch,
  CardRow,
  TouchView,
  Logo
} from "./styles";
import cardBg from '../../assets/backgrounds/bg_transparent.png'

const Card: FC<CardProps> = (props) => {
  const handlePress = () => {}

  return (
    <CardBackGround source={cardBg} imageStyle={{resizeMode: 'cover'}} >
      <CardTouch underlayColor={colors.darkBlue} onPress={() => handlePress()} >
        <TouchView>
          <CardRow>
            <RegularText>
              ******{props.accountNum.slice(6,10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{flex: 3}}>
              <SmallText
                textStyles={{marginBottom: 5, color: colors.grayLight}}
              >
                Total balance
              </SmallText>
              <RegularText
                textStyles={{fontSize: 19}}
              >
                $ {props.balance}
              </RegularText>
            </View>
            <Logo source={props.logo} style={{resizeMode: 'contain'}} />
          </CardRow>
        </TouchView>
      </CardTouch>
    </CardBackGround> 
  )
}

export default Card