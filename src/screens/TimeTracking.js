import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Config from '../Config';

class TimeTracking extends Component {
    static navigationOptions = {
        title: '计时页面',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.timerStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', height: 40 }}>
                        <Image source={require('../../images/time_tracking/text_time.png')}
                            style={{ height: 15, marginBottom: 10, opacity: 0 }}
                            resizeMode='contain' />
                        <Text style={styles.timeTextStyle}>20.00</Text>
                        <Image source={require('../../images/time_tracking/text_time.png')}
                            style={{ height: 15, marginBottom: 10, tintColor: Config.textSecondaryColor }}
                            resizeMode='contain' />
                    </View>
                    <View style={{ height: 10 }} />
                    <Image source={require('../../images/time_tracking/text_time_info.png')}
                        style={{ height: 15, tintColor: Config.textSecondaryColor }}
                        resizeMode='contain' />
                </View>
                <View style={{ flexDirection: 'row' }} >
                    <View style={styles.lineStyle} />
                </View>
                <View style={styles.detailStyle}>
                    <View style={styles.detailItemStyle} >
                        <Image source={require('../../images/time_tracking/item_1_a.png')}
                            style={{ height: 25, marginBottom: 10 }}
                            resizeMode='contain' />
                        <Image source={require('../../images/time_tracking/item_1_b.png')}
                            style={{ height: 15, tintColor: Config.textSecondaryColor }}
                            resizeMode='contain' />
                    </View>

                    <View style={styles.detailItemStyle} >
                        <Image source={require('../../images/time_tracking/item_2_a.png')}
                            style={{ height: 25, marginBottom: 10 }}
                            resizeMode='contain' />
                        <Image source={require('../../images/time_tracking/item_2_b.png')}
                            style={{ height: 15, tintColor: Config.textSecondaryColor }}
                            resizeMode='contain' />
                    </View>

                    <View style={styles.detailItemStyle} >
                        <Image source={require('../../images/time_tracking/item_3_a.png')}
                            style={{ height: 25, marginBottom: 10 }}
                            resizeMode='contain' />
                        <Image source={require('../../images/time_tracking/item_3_b.png')}
                            style={{ height: 15, tintColor: Config.textSecondaryColor }}
                            resizeMode='contain' />
                    </View>
                </View>
                <View style={styles.buttonStyle}>
                    <View style={styles.buttonRowStyle}>
                        <View style={styles.buttonItemStyle} >
                            <TouchableOpacity style={styles.buttonGreenStyle}>
                                <Image source={require('../../images/time_tracking/text_green.png')}
                                    style={{ height: 15 }}
                                    resizeMode='contain' />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttonItemStyle} >
                            <TouchableOpacity style={styles.buttonRedWrapperStyle}>
                                <View style={styles.buttonRedStyle}>
                                    <Image source={require('../../images/time_tracking/text_red.png')}
                                        style={{ height: 15 }}
                                        resizeMode='contain' />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 10
    },
    timerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    timeTextStyle: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    lineStyle: {
        height: 1,
        flex: 1,
        backgroundColor: '#ccc'
    },
    detailStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    detailItemStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    buttonRowStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    buttonItemStyle: {
        flex: 1,
        alignItems: 'center',
    },
    buttonGreenStyle: {
        width: 66,
        height: 66,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Config.primaryColor,
        borderRadius: 33
    },
    buttonRedStyle: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fe3b44',
        borderRadius: 30
    },
    buttonRedWrapperStyle: {
        width: 66,
        height: 66,
        borderRadius: 33,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#fe3b44',
        borderWidth: 1
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
)(TimeTracking);