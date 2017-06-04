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
                        times(100, index => <TouchableOpacity key={index} >
                            <Card style={{
                                container: {
                                    backgroundColor: shuffle(COLOR)[1],
                                    height: 100,
                                    width: 100
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
    scrollView: {
        height: 555,
    },
    scrollViewLayout: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    horizontalScrollView: {
        height: 106,
    },
};

export default ColoredTiles;