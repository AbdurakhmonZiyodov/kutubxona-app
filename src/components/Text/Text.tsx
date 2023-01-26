import React, {FC} from 'react';
import {StyleProp, Text as RNText, TextStyle} from 'react-native';
import {COLORS} from '../../constants';
import {styles} from './Text.styles';

interface TextProps {
  title: string;
  type: keyof typeof styles;
  style?: StyleProp<TextStyle>;
  color?: string;
}

const Text: FC<TextProps> = ({title, type, color = COLORS.white, style}) => {
  return <RNText style={[styles[type], {color}, style]}>{title}</RNText>;
};

export default Text;
