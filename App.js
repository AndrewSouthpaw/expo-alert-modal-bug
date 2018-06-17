import React from 'react';
import { Alert, StyleSheet, Text, Button, View } from 'react-native';
import Modal from 'react-native-modal'

export default class App extends React.Component {
  state = {
    visible: true
  }

  handlePress = () => {
    Alert.alert('Foo')
    this.setState({ visible: false })
  }

  handleOtherPress = () => {
    Alert.alert('This should work but you cannot push the button')
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal isVisible={this.state.visible}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={this.handlePress} title="Alert!" />
          </View>
        </Modal>
        <Button onPress={this.handleOtherPress} title="Try pressing me" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
