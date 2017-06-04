import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Card, COLOR } from 'react-native-material-ui'
import times from 'lodash/times';
import shuffle from 'lodash/shuffle';

class ColoredTiles extends Component {
    render() {
        return (
            <ScrollView
                automaticallyAdjustContentInsets={false}
                scrollEventThrottle={200}
                horizontal={false}
                pagingEnabled={false}
                style={styles.scrollView}>
                <View style={styles.scrollViewLayout}>
                    {
                        times(10, index => <TouchableOpacity key={index} >
                            <Card style={{
                                container: {
                                    backgroundColor: shuffle(COLOR)[1],
                                    height: 100,
                                },
                            }} />
                        </TouchableOpacity>)
                    }
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    scrollViewLayout: {
        flex: 1,
        flexDirection: 'column',
    },
};

export default ColoredTiles;