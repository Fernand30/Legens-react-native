import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AvatarWithStatus from '../components/AvatarWithStatus';
import Config from '../Config';
import Tab1 from './portfolio/Tab1';
import Tab2 from './portfolio/Tab2';
import Tab3 from './portfolio/Tab3';
import Tab4 from './portfolio/Tab4';

const TabNav = TabNavigator(
    {
        Tab1: { screen: Tab1 },
        Tab2: { screen: Tab2 },
        Tab3: { screen: Tab3 },
        Tab4: { screen: Tab4 },
    },
    {
        tabBarPosition: 'top',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: Config.primaryColor,
            labelStyle: {
                fontSize: 14,
            },
            tabStyle: {
                justifyContent: 'center',
                alignItems: 'center'
            },
            style: {
                backgroundColor: '#fff',
                borderBottomWidth: 2,
                borderBottomColor: Config.lineColor
            }
        }

    }
);


class Portfolio extends Component {
    static navigationOptions = {
        title: '神人详情',
    };

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.rootStyle}>
                <View style={styles.headerStyle}>
                    <AvatarWithStatus source={require('../../images/dummy/user_1.png')}
                        diameter={80} />
                    <View style={styles.userTitleStyle}>
                        <Text style={{ fontSize: 25, marginBottom: 5 }}>ILWoojing</Text>
                        <Text style={{ fontSize: 18, color: '#979797' }}>寻找合伙人</Text>
                    </View>
                </View>
                <View style={styles.summaryStyle}>
                    <View style={styles.summaryDetailStyle}>
                        <Text style={{ fontSize: 18, marginBottom: 5 }}>3年</Text>
                        <Text style={{ fontSize: 14, color: '#979797' }}>经验</Text>
                    </View>
                    <View style={styles.summaryDetailStyle}>
                        <Text style={{ fontSize: 18, marginBottom: 5 }}>80元</Text>
                        <Text style={{ fontSize: 14, color: '#979797' }}>时薪</Text>
                    </View>
                    <View style={styles.summaryDetailStyle}>
                        <Text style={{ fontSize: 18, marginBottom: 5 }}>21岁</Text>
                        <Text style={{ fontSize: 14, color: '#979797' }}>年龄</Text>
                    </View>
                    <View style={[styles.summaryDetailStyle, { flex: 2 }]}>
                        <TouchableOpacity style={styles.buttonStyle}>
                            <Text style={{ fontSize: 18, color: '#fff' }}>邀请工作</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 20, backgroundColor: Config.lineColor }} />
                <TabNav />
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flex: 1
    },
    headerStyle: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    userImageStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        paddingRight: 30
    },
    userTitleStyle: {
        flexDirection: 'column',
        paddingLeft: 20,
        justifyContent: 'center'
    },
    summaryStyle: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    summaryDetailStyle: {
        flex: 1
    },
    buttonStyle: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Config.primaryColor,
        borderRadius: 20
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
)(Portfolio);