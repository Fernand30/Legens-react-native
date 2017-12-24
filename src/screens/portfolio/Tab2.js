import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../../Config';

class Tab2 extends Component {
    static navigationOptions = {
        title: '案例',
    };

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.rowStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.indicatorWrapperStyle}>
                            <View style={styles.indicatorStyle} />
                        </View>
                        <Text style={styles.rowTitleStyle}>英雄联盟官网设计</Text>
                        <Text style={styles.rowDateStyle}>01-01-2017</Text>
                    </View>
                    <Text style={styles.rowDescriptionStyle}>负责视觉设计和前端搭建</Text>
                    <View style={styles.rowImageWrapper}>
                        <Image source={require('../../../images/portfolio/work_1.png')}
                            style={styles.rowImageStyle} />
                        <Image source={require('../../../images/portfolio/work_1.png')}
                            style={styles.rowImageStyle} />
                        <Image source={require('../../../images/portfolio/work_1.png')}
                            style={styles.rowImageStyle} />
                    </View>
                </View>
                <View style={styles.rowStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={styles.indicatorWrapperStyle}>
                            <View style={styles.indicatorStyle} />
                        </View>
                        <Text style={styles.rowTitleStyle}>英雄联盟官网设计</Text>
                        <Text style={styles.rowDateStyle}>01-01-2017</Text>
                    </View>
                    <Text style={styles.rowDescriptionStyle}>负责视觉设计和前端搭建</Text>
                    <View style={styles.rowImageWrapper}>
                        <Image source={require('../../../images/portfolio/work_2.png')}
                            style={styles.rowImageStyle} />
                        <Image source={require('../../../images/portfolio/work_2.png')}
                            style={styles.rowImageStyle} />
                        <Image source={require('../../../images/portfolio/work_2.png')}
                            style={styles.rowImageStyle} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flex: 1,
    },
    rowStyle: {
        paddingVertical: 10,
        paddingRight: 10
    },
    indicatorWrapperStyle: {
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    indicatorStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: Config.primaryColor
    },
    rowTitleStyle: {
        fontSize: 16,
        flex: 1
    },
    rowDateStyle: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    rowDescriptionStyle: {
        paddingLeft: 50,
        fontSize: 14,
        color: Config.textColor
    },
    rowImageWrapper: {
        paddingLeft: 50,
        flexDirection: 'row',
        paddingVertical: 10
    },
    rowImageStyle: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        marginRight: 20
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
)(Tab2);