import { ReactElement } from "react";

export interface CardsDataModel {
  key: number,
  title: string,
  logo: ReactElement,
  info: (string | ReactElement)[]
};

export interface CurrentDevelopmentDataModel {
  key: number,
  main_bullet: string,
  sub_bullets?: (string | React.JSX.Element)[]
}