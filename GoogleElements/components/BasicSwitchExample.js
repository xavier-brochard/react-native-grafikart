import React, { Component } from 'react';
import { View, Switch } from 'react-native';

class BasicSwitchExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchIsOn: true
    };
  }

  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({ switchIsOn: value })}
          style={{ marginBottom: 10 }}
          value={this.state.switchIsOn} />
      </View>
    );
  }
}

export default BasicSwitchExample;