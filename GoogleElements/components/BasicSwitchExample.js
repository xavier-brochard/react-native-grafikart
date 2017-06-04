import React, { Component } from 'react';
import { View, Switch } from 'react-native';

class BasicSwitchExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      switchIsOn: true
    };
  }

  onValueChange = value => this.setState({ switchIsOn: value })

  render() {
    return (
      <View>
        <Switch
          onValueChange={this.onValueChange}
          style={{ marginBottom: 10 }}
          value={this.state.switchIsOn} />
      </View>
    );
  }
}

export default BasicSwitchExample;