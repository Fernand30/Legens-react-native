import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../../../Config';

class Tab3 extends Component {
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
                image: require('../../../../images/notification/user_1.png'),
                name: 'Legends Lair',
                time: '10 minutes ago',
                job: 'Pinterest standard Graphic Designer Needed : 3 ~ 2 USD per hour',
                last_user: 'Fong',
                last_chat: 'hi, how are you? for the first 50 hours, is 3USD and later atleast 3.8 if we official hire you.',
                indicatorColor: '#2ecc71'
            },
            {
                image: require('../../../../images/notification/user_2.png'),
                name: 'Solvay',
                time: '10 hours ago',
                job: 'Web design and development PHP ( READ description ). Please type "OKAY" if you are interested.',
                last_user: 'Andrew',
                last_chat: 'Hi Udara,I want this project is done, until I am satisfied, are you willing to do that ?',
                indicatorColor: '#f1c40f'
            },
            {
                image: require('../../../../images/notification/user_3.png'),
                name: 'Parasolution Company',
                time: '10 hours ago',
                job: 'Website Redesign and Development',
                last_user: 'You',
                last_chat: 'Hi Cha! I would like to accept this job. Thank you for hiring me. ',
                indicatorColor: '#bdc3c7'
            },
            {
                image: require('../../../../images/notification/user_1.png'),
                name: 'Legends Lair',
                time: '10 minutes ago',
                job: 'Pinterest standard Graphic Designer Needed : 3 ~ 2 USD per hour',
                last_user: 'Fong',
                last_chat: 'hi, how are you? for the first 50 hours, is 3USD and later atleast 3.8 if we official hire you.',
                indicatorColor: '#2ecc71'
            },
            {
                image: require('../../../../images/notification/user_2.png'),
                name: 'Solvay',
                time: '10 hours ago',
                job: 'Web design and development PHP ( READ description ). Please type "OKAY" if you are interested.',
                last_user: 'Andrew',
                last_chat: 'Hi Udara,I want this project is done, until I am satisfied, are you willing to do that ?',
                indicatorColor: '#f1c40f'
            },
            {
                image: require('../../../../images/notification/user_3.png'),
                name: 'Parasolution Company',
                time: '10 hours ago',
                job: 'Website Redesign and Development',
                last_user: 'You',
                last_chat: 'Hi Cha! I would like to accept this job. Thank you for hiring me. ',
                indicatorColor: '#bdc3c7'
            },
            {
                image: require('../../../../images/notification/user_1.png'),
                name: 'Legends Lair',
                time: '10 minutes ago',
                job: 'Pinterest standard Graphic Designer Needed : 3 ~ 2 USD per hour',
                last_user: 'Fong',
                last_chat: 'hi, how are you? for the first 50 hours, is 3USD and later atleast 3.8 if we official hire you.',
                indicatorColor: '#2ecc71'
            },
            {
                image: require('../../../../images/notification/user_2.png'),
                name: 'Solvay',
                time: '10 hours ago',
                job: 'Web design and development PHP ( READ description ). Please type "OKAY" if you are interested.',
                last_user: 'Andrew',
                last_chat: 'Hi Udara,I want this project is done, until I am satisfied, are you willing to do that ?',
                indicatorColor: '#f1c40f'
            },
            {
                image: require('../../../../images/notification/user_3.png'),
                name: 'Parasolution Company',
                time: '10 hours ago',
                job: 'Website Redesign and Development',
                last_user: 'You',
                last_chat: 'Hi Cha! I would like to accept this job. Thank you for hiring me. ',
                indicatorColor: '#bdc3c7'
            },
            {
                image: require('../../../../images/notification/user_1.png'),
                name: 'Legends Lair',
                time: '10 minutes ago',
                job: 'Pinterest standard Graphic Designer Needed : 3 ~ 2 USD per hour',
                last_user: 'Fong',
                last_chat: 'hi, how are you? for the first 50 hours, is 3USD and later atleast 3.8 if we official hire you.',
                indicatorColor: '#2ecc71'
            },
            {
                image: require('../../../../images/notification/user_2.png'),
                name: 'Solvay',
                time: '10 hours ago',
                job: 'Web design and development PHP ( READ description ). Please type "OKAY" if you are interested.',
                last_user: 'Andrew',
                last_chat: 'Hi Udara,I want this project is done, until I am satisfied, are you willing to do that ?',
                indicatorColor: '#f1c40f'
            },
            {
                image: require('../../../../images/notification/user_3.png'),
                name: 'Parasolution Company',
                time: '10 hours ago',
                job: 'Website Redesign and Development',
                last_user: 'You',
                last_chat: 'Hi Cha! I would like to accept this job. Thank you for hiring me. ',
                indicatorColor: '#bdc3c7'
            },
        ];
    }

    renderRow(row) {
        return (
            <View style={styles.rowStyle}>
                <View style={styles.imageContainerStyle}>
                    <Image source={row.image} style={{
                        height: 60, width: 60,
                        resizeMode: 'contain',
                        borderRadius: 30,
                    }} />
                    <View style={[styles.onlineIndicatorStyle, { backgroundColor: row.indicatorColor }]} />
                </View>
                <View style={styles.informationContainerStyle}>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Text style={{ fontSize: 14, color: '#34495e', flex: 1 }}>{row.name}</Text>
                        <Text style={{ fontSize: 10, color: '#95a5a6' }}>{row.time}</Text>
                    </View>
                    <Text style={{ fontSize: 10, color: '#95a5a6' }}
                        ellipsizeMode='tail' numberOfLines={1}>{row.job}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 3 }}>
                        <Text style={{ fontSize: 10, color: '#95a5a6' }}>{row.last_user} : </Text>
                        <Text style={{ fontSize: 10, color: '#95a5a6', flex: 1 }}
                            ellipsizeMode='tail' numberOfLines={2}>{row.last_chat}</Text>
                    </View>
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
        height: 80,
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ecf0f1'
    },
    imageContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 70,
        borderRightWidth: 1,
        borderRightColor: Config.primaryColor
    },
    informationContainerStyle: {
        flex: 1,
        flexDirection: 'column',
        height: 60,
        paddingVertical: 5,
        paddingHorizontal: 10
    },

    onlineIndicatorStyle: {
        width: 14,
        height: 14,
        backgroundColor: Config.primaryColor,
        borderRadius: 7,
        position: 'absolute',
        right: 7,
        bottom: 7,
        borderWidth: 1,
        borderColor: '#fff'
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
)(Tab3);