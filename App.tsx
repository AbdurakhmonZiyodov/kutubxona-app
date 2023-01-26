import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SvgImages} from './src/assets';
import MainTemplate from './src/components/templates/MainTemplate';

const App = () => {
  return (
    <ScrollView>
      <MainTemplate>
        <Text>App</Text>
        <SvgImages.Img1 />
        <SvgImages.Img2 />
        <SvgImages.Img3 />
        <SvgImages.Img4 />
      </MainTemplate>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({});
