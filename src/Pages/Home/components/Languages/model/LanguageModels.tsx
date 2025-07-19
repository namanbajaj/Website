import { ReactElement } from "react";

export interface LanguageModel {
  id: number,
  icon: ReactElement,
  technology: string,
  experience: string,
  isNotable: boolean,
  info?: string[]
}

export const iconSize = 35; 
