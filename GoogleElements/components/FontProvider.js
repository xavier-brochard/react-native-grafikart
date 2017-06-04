import React, { Component } from 'react';
import { Font } from 'expo';

/**
 * Globally asyncly provides custom fonts to the app
 */
class FontProvider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fontLoaded: false
        };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
        });
        this.setState({ fontLoaded: true });
    }

    render() {
        return (
            this.state.fontLoaded ? this.props.children : null
        );
    }
}

export default FontProvider;