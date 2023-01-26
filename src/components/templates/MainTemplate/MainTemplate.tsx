import React, {FC} from 'react';
import {ImageBackground} from 'react-native';
import {Images} from '../../../assets';
import {styles} from './MainTemplate.styles';

interface MainTemplateProps {
  children?: React.ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({children}) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={Images.bgBanner}
      style={styles.container}>
      {children}
    </ImageBackground>
  );
};

export default MainTemplate;
