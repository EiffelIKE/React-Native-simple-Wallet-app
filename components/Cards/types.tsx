import { ImageSourcePropType, ImageStyle, StyleProp, ViewComponent } from "react-native";
export interface CardProps {
  id: number;
  accountNum: string;
  balance: number;
  alias?: string;
  logo: ImageSourcePropType;
  noMargin?: boolean;
}

export interface CardSectionProps {
  data: Array<CardProps>;
}