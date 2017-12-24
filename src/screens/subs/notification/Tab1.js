import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../../../Config';

class Tab1 extends Component {
    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(this.getData()),
        };
    }

    getData() {
        return [
            {
                image: require('../../../../images/notification/icon_list_message.png'),
                title: 'You have unread messages about the job Web design and development PHP',
                subtitle: '10 minutes ago'
            },
            {
                image: require('../../../../images/notification/icon_list_contract.png'),
                title: 'Fong Pau Fung of Legends Lair changed the terms of your contract.',
                subtitle: '10 hours ago'
            },
            {
                image: require('../../../../images/notification/icon_list_payment.png'),
                title: 'You requested payment of $139.00 from Upwork via PayPal account.',
                subtitle: 'November 30 at 10.15 am'
            },
            {
                image: require('../../../../images/notification/icon_list_tos.png'),
                title: 'Legends Lair updated the terms of services about the payment.',
                subtitle: 'November 26 at 12.20 pm'
            },
            {
                image: require('../../../../images/notification/icon_list_thumb.png'),
                title: 'You have to do your skill verification to improve your account rating.',
                subtitle: 'November 20 at 12.20 pm'
            },
            {
                image: require('../../../../images/notification/icon_list_message.png'),
                title: 'You have unread messages about the job Web design and development PHP',
                subtitle: '10 minutes ago'
            },
            {
                image: require('../../../../images/notification/icon_list_message.png'),
                title: 'You have unread messages about the job Web design and development PHP',
                subtitle: '10 minutes ago'
            },
            {
                image: require('../../../../images/notification/icon_list_message.png'),
                title: 'You have unread messages about the job Web design and development PHP',
                subtitle: '10 minutes ago'
            },
        ];
    }

    renderRow(row) {
        return (
            <View style={styles.rowStyle}>
                <View style={styles.imageContainerStyle}>
                    <Image source={row.image} style={{
                        height: 40, width: 40, resizeMode: 'contain',
                        tintColor: Config.primaryColor
                    }} />
                </View>
                <View style={styles.informationContainerStyle}>
                    <Text style={{ fontSize: 14, color: '#95a5a6', marginBottom: 5 }}
                        ellipsizeMode='tail' numberOfLines={2}>{row.title}</Text>
                    <Text style={{ fontSize: 10, color: '#95a5a6' }}>{row.subtitle}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => {
                        return this.renderRow(rowData)
                    }}
                />
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
    },
    rowStyle: {
        height: 70,
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ecf0f1'
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRightWidth: 1,
        borderRightColor: Config.primaryColor
    },
    informationContainerStyle: {
        flex: 1,
        flexDirection: 'column',
        height: 60,
        paddingVertical: 5,
        paddingHorizontal: 10
    }
};

function mapStateToProps(state) {
    return {
        component: state.component,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRoot: (root) => dispatch({
            type: 'set_root',
            root: root
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab1);