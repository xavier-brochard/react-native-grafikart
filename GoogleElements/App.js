import React from 'react';
import { DrawerNavigator } from 'react-navigation'
import { ThemeProvider } from 'react-native-material-ui';
import FontProvider from './components/FontProvider'
import InboxScreen from './components/inbox/InboxScreen';

const Navigator = DrawerNavigator({
  Inbox: { screen: InboxScreen },
  Pending: { screen: InboxScreen }
})

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
          <Navigator />
        </ThemeProvider>
      </FontProvider>
    );
  }
}
