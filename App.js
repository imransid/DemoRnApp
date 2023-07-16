import React, {useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
// import {Root, StyleProvider, NativeBaseProvider} from 'native-base';
import {PersistGate} from 'redux-persist/integration/react';
import store from './src/redux-store/store/Store';
import Router from './src/routes';
import {RootSiblingParent} from 'react-native-root-siblings';

console.log('store', store);

const App = () => {
  return (
    // <RootSiblingParent>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <SafeAreaView style={styles.container}>
          <Router />
        </SafeAreaView>
      </PersistGate>
    </Provider>
    // </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
