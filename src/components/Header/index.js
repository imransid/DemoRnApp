import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon_M from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native-paper';

const MainHeader = ({title}) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          marginTop: insets.top,
        },
      ]}>
      <Icon name={'menu'} color={'#5f5c5c'} size={30} />
      <Text style={styles.title} variant="headlineMedium">
        {title}
      </Text>
      <Icon_M name={'bell-outline'} color={'#5f5c5c'} size={30} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default MainHeader;
