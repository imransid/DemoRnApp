import React from 'react';
import {FlatList, View, TouchableOpacity, Image} from 'react-native';
import {sizes, spacing, colors} from '../../utils/Styles';
import {ScaledSheet} from 'react-native-size-matters';
import {Text} from 'react-native-paper';

import {useSelector} from 'react-redux';

const CARD_WIDTH = sizes.width - 100;
const CARD_HEIGHT = 100;
const CARD_WIDTH_SPACING = CARD_WIDTH - spacing.l;

const TopPlaceCarousel = () => {
  const bookMarkList = useSelector(e => e.bookmark.bookmarkList);

  return (
    <FlatList
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate={'fast'}
      keyExtractor={i => i.id}
      showsHorizontalScrollIndicator={false}
      data={bookMarkList}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: spacing.l,
              marginRight: index === bookMarkList.length - 1 ? spacing.l : 0,
            }}
            key={item.id}>
            <Text variant="titleMedium" style={styles.title}>
              {item?.categoryName}
            </Text>
            <View style={styles.card}>
              <View style={styles.imageBox}>
                <Text variant="titleMedium" style={styles.title}>
                  <Text variant="titleMedium" style={styles.titleH}>
                    {'Title'}
                  </Text>{' '}
                  : {item?.title}
                </Text>

                <Text variant="titleMedium" style={styles.title}>
                  <Text variant="titleMedium" style={styles.titleH}>
                    {'Url'}
                  </Text>{' '}
                  : {item?.urlLink}
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
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
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
    // fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
    marginTop: 10,
  },

  titleH: {
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default TopPlaceCarousel;
