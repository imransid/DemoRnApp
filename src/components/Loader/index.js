import React from 'react';
import {StyleSheet, View} from 'react-native';
import OrientationLoadingOverlay from 'react-native-orientation-loading-overlay';

const Loader = () => {
  return (
    <View style={styles.container}>
      <OrientationLoadingOverlay
        visible={true}
        color="white"
        indicatorSize="large"
        messageFontSize={24}
        message=""
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Loader;
