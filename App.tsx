/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  _ScrollView
} from 'react-native';

import { Card, Button, Icon } from 'react-native-elements';


declare const global: { HermesInternal: null | {} };

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Card>
          <Card.Title>Song Title</Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            Some Song Info
          </Text>
          <Button
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='Sing' />
        </Card>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
