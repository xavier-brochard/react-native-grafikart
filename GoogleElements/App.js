import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider, BottomNavigation } from 'react-native-material-ui';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'save'
    };
  }

  render() {
    return (
      <ThemeProvider>
        <BottomNavigation active={this.state.active} hidden={false} style={style} >
          <BottomNavigation.Action
            key="today"
            icon="today"
            label="Today"
            onPress={() => this.setState({ active: 'today' })}
          />
          <BottomNavigation.Action
            key="people"
            icon="people"
            label="People"
            onPress={() => this.setState({ active: 'people' })}
          />
          <BottomNavigation.Action
            key="save"
            icon="save"
            label="Save"
            onPress={() => this.setState({ active: 'save' })}
          />
          <BottomNavigation.Action
            key="settings"
            icon="settings"
            label="Settings"
            onPress={() => this.setState({ active: 'settings' })}
          />
        </BottomNavigation>
      </ThemeProvider>
    );
  }
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#006064',
  },
});
