import React, { Component } from 'react';
import { View } from 'react-native'
import { Toolbar, Icon } from 'react-native-material-ui'
import ColoredTiles from './ColoredTiles'

class InboxScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Boîte réception',
        drawerIcon: <Icon name="inbox" />
    };
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toolbar
                    leftElement="menu"
                    centerElement="Boîte réception"
                    searchable={{
                        autoFocus: true,
                        placeholder: 'Rechercher',
                    }}
                />
                <ColoredTiles />
            </View>
        );
    }
}

export default InboxScreen;