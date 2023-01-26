import {useNavigation} from '@react-navigation/native';
import React, {FC, useCallback} from 'react';
import {ScrollView, Touchable, TouchableOpacity, View} from 'react-native';
import {AssetTemplatePrps} from '../../../@types/ui.types';
import Icons from '../../../assets/icons';
import {COLORS} from '../../../constants';
import Text from '../../Text';
import MainTemplate from '../MainTemplate';
import {styles} from './AssetTemplate.styles';

const AssetTemplate: FC<AssetTemplatePrps> = ({
  Image,
  cardSubTitle,
  cardTitle,
  list,
}) => {
  const navigation = useNavigation();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <MainTemplate>
      <View style={styles.bagBtn}>
        <TouchableOpacity
          onPress={goBack}
          activeOpacity={0.5}
          style={{
            transform: [
              {
                rotate: '180deg',
              },
            ],
          }}>
          <Icons.ArrowRight width={12} color={COLORS.white} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {/*  Image  section*/}
        <View style={styles.imageContainer}>
          <Image width={180} height={290} />
        </View>

        {/* Card Title section*/}
        <View style={styles.center}>
          <Text title={cardTitle} type="cardTitle" style={styles.textCenter} />
          <Text
            title={cardSubTitle}
            type="cardSubTitle"
            style={styles.textCenter}
          />
        </View>

        {/* Card List section*/}
        <View style={styles.dvider} />
        <ScrollView
          contentContainerStyle={{paddingBottom: 30}}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}>
          {list.map(item => (
            <View key={item.id} style={styles.listItemContainer}>
              <Text title={item.title} type="listItemTitle" />
              <Text title={item.description} type="listItemDescription" />
            </View>
          ))}
        </ScrollView>
      </View>
    </MainTemplate>
  );
};

export default AssetTemplate;
