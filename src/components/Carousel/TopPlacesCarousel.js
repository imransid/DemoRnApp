import React from 'react';
import {FlatList, View, TouchableOpacity, Image} from 'react-native';
import {sizes, spacing, colors} from '../../utils/Styles';
import {ScaledSheet} from 'react-native-size-matters';
import {Text} from 'react-native-paper';

const CARD_WIDTH = sizes.width - 100;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH - spacing.l;

// change image uri to source ={} for locally image

const TopPlaceCarousel = () => {
  const list = [
    {
      title: 'name 1',
      id: 1,
      image:
        'https://www.trolleytours.com/wp-content/uploads/2016/07/trolley-tours-of-key-west.jpg',
    },
    {
      title: 'name 2',
      id: 2,
      image:
        'https://assets.thehansindia.com/h-upload/2019/12/27/248830-worldtour.jpg',
    },
    {
      title: 'name 3',
      id: 3,
      image:
        'https://itsholidaysltd.com/wp-content/uploads/2022/04/Eid-Tour-Packages-From-Bangladesh-1.jpg',
    },
  ];

  return (
    <FlatList
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate={'fast'}
      keyExtractor={i => i.id}
      showsHorizontalScrollIndicator={false}
      data={list}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: spacing.l,
              marginRight: index === list.length - 1 ? spacing.l : 0,
            }}
            key={item.id}>
            <View style={styles.card}>
              <View style={styles.imageBox}>
                <Image
                  source={{
                    uri: item.image,
                  }}
                  style={styles.image}
                />
              </View>
              <View style={styles.textBox}>
                <Text variant="titleMedium" style={styles.title}>
                  {item?.title}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = ScaledSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    resizeMode: 'cover',
  },
  textBox: {
    position: 'absolute',
    top: CARD_HEIGHT - 80,
    left: 16,
  },
  title: {
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default TopPlaceCarousel;
