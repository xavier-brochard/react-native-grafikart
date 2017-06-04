import React, { Component } from 'react';
import { View } from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import ColoredTiles from './ColoredTiles'

class InboxScreen extends Component {

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