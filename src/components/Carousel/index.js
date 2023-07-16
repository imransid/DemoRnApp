import * as React from 'react';
import {View, Dimensions, Text} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const PAGE_WIDTH = Dimensions.get('window');

function Index() {
  return (
    <View style={{flex: 1}}>
      <Carousel
        loop
        width={PAGE_WIDTH.width}
        height={PAGE_WIDTH.width / 2}
        autoPlay={true}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Index;
