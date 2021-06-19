import * as React from 'react';

type Style = {
  [key: string]: string | number | boolean
}

export interface AvatarConfig {
  sex?: 'man' | 'woman',
  faceColor?: string,
  earSize?: 'small' | 'big',
  hairColor?: string,
  hairStyle?: 'normal' | 'thick' | 'mohawk' | 'womanLong' | 'womanShort',
  eyeStyle?: 'circle' | 'oval' | 'smile',
  glassesStyle?: 'round' | 'square' | 'none',
  noseStyle?: 'short' | 'long' | 'round',
  mouthStyle?: 'laugh' | 'smile' | 'peace',
  shirtStyle?: 'hoody' | 'short' | 'polo',
  shirtColor?: string,
  bgColor?: string
}

export interface AvatarFullConfig extends AvatarConfig {
  eyeBrowStyle?: 'up' | 'upWoman'
}

export interface NiceAvatarProps extends AvatarConfig {
  id?: string,
  className?: string,
  style?: Style
}

export declare const genConfig: (config?: AvatarConfig) => AvatarFullConfig

export default class ReactNiceAvatar extends React.Component<NiceAvatarProps> {}
