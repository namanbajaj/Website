import React from 'react';
import { SiUnrealengine, SiUnity, SiVisualstudio, SiVisualstudiocode, SiCplusplus, SiCsharp } from 'react-icons/si'
import Icons from '../../../../../Shared/Icons/Icons';
import { GamesLanguageModel } from '../model/GamesLanguageModels';

const iconSize = 150;


export const techs: GamesLanguageModel[] = [
  {
    id: 1,
    icon: <SiUnity size={iconSize} />,
    technology: 'Unity',
  },
  {
    id: 2,
    icon: <SiUnrealengine size={iconSize} />,
    technology: 'Unreal',
  },
  {
    id: 3,
    icon: <Icons name="raylib" size={iconSize} />,
    technology: 'raylib',
  },
  {
    id: 4,
    icon: <SiVisualstudio size={iconSize} />,
    technology: 'Visual Studio'
  },
  {
    id: 5,
    icon: <SiVisualstudiocode size={iconSize} />,
    technology: 'VSCode'
  },
  {
    id: 6,
    icon: <SiCplusplus size={iconSize} />,
    technology: 'C++'
  },
  {
    id: 7,
    icon: <SiCsharp size={iconSize} />,
    technology: 'C#'
  }
]