import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class AvatarWithStatus extends Component {
    constructor(props) {
        super(props);

        let width = this.props.diameter ? this.props.diameter : 100;
        let height = this.props.diameter ? this.props.diameter : 100;
        let source = this.props.source ? this.props.source : { uri: 'https://placeimg.com/100/100/people' };
        let color = this.props.indicatorColor ? this.props.indicatorColor : '#ff0000';
        let showIndicator = this.props.showIndicator != null ? this.props.showIndicator : true;

        this.state = {
            width: width,
            height: height,
            radius: width / 2,
            source: source,
            color: color,
            showIndicator: showIndicator
        };
    }

    render() {
        let indicatorSize = this.state.width / 4;
        return (
            <View style={{ width: this.state.width, height: this.state.height }}>
                <Image source={this.state.source}
                    style={{
                        width: this.state.width,
                        height: this.state.height,
                        borderRadius: this.state.radius
                    }} />
                {this.state.showIndicator &&
                    <View style={{
                        width: indicatorSize, height: indicatorSize, borderRadius: indicatorSize / 2, backgroundColor: this.state.color,
                        position: 'absolute', right: indicatorSize / 5, bottom: indicatorSize / 5,
                        borderWidth: 2, borderColor: '#fff'
                    }} />
                }
            </View>
        );
    }
}