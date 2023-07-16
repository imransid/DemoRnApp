import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

const ScreenHeader = ({mainTitle, secondTitle}) => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={styles.mainTitle}>
        {mainTitle}
      </Text>
      <Text variant="titleMedium" style={styles.secondTitle}>
        {secondTitle}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  mainTitle: {
    fontWeight: 'bold',
  },
  secondTitle: {
    //fontWeight: 'bold',
  },
});

export default ScreenHeader;
