import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import MainTemplate from '../../components/templates/MainTemplate';
import Text from '../../components/Text';
import {Routes} from '../../constants';
import {mocData} from '../../moc-data';
import {styles} from './WelcomeScreen.styles';
const WelcomeScreen = () => {
  const navigation: any = useNavigation();
  const data1 = mocData.filter((_, index) => index % 2 !== 0);
  const data2 = mocData.filter((_, index) => index % 2 == 0);

  const onPressItem = useCallback(
    (id: number) => {
      navigation.navigate(Routes.assetItem, {id});
    },
    [navigation],
  );

  return (
    <MainTemplate>
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text title="Welcome Buddy!" type="largeTitle" />
          <Text
            title="Read amazing insights of wonderful books here!"
            type="title"
            style={{paddingTop: 10}}
          />
        </View>

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          <View style={styles.listItem}>
            {data1.map(({Image, id}) => (
              <TouchableOpacity
                key={id}
                activeOpacity={0.5}
                onPress={() => onPressItem(id)}>
                <Image width={165} height={265} />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.listItem}>
            {data2.map(({Image, id}) => (
              <TouchableOpacity
                key={id}
                activeOpacity={0.5}
                onPress={() => onPressItem(id)}>
                <Image width={165} height={265} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </MainTemplate>
  );
};

export default WelcomeScreen;
