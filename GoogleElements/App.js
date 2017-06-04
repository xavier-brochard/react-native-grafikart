import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Toolbar, ThemeProvider, BottomNavigation } from 'react-native-material-ui';
import times from 'lodash/times'
import FontProvider from './components/FontProvider'
import BasicSwitchExample from './components/BasicSwitchExample';
import ColoredTiles from './components/ColoredTiles';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: 'today'
    };
  }

  render() {
    return (
      <FontProvider>
        <ThemeProvider>
          <View>
            <Toolbar
              style={styles.toolBar}
              leftElement="menu"
              centerElement="Searchable"
              searchable={{
                autoFocus: true,
                placeholder: 'Search',
              }}
            />
            {this.state.active === 'today' ? <ColoredTiles /> : null}
            <BottomNavigation active={this.state.active} hidden={false} style={styles.bottomNaviation} >
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
          </View>
        </ThemeProvider>
      </FontProvider>
    );
  }
}

const styles = {
  toolBar: {
    container: {
      // paddingTop: 30,
      // paddingBottom: 20
    }
  },
  bottomNaviation: {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }
};
