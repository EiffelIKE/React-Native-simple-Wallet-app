import { ImageSourcePropType } from "react-native";

export interface CardProps {
  id: number;
  accountNum: string;
  balance: number;
  alias?: string;
  logo: ImageSourcePropType;
}

export interface CardSectionProps {
  data: Array<CardProps>;
}