import React from 'react';
import { } from 'react-native';
import { ThemeProvider } from 'react-native-material-ui';
import FontProvider from './components/FontProvider'
import InboxScreen from './components/inbox/InboxScreen';

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
          <InboxScreen />
        </ThemeProvider>
      </FontProvider>
    );
  }
}
