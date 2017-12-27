import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';

import ShareOffice from './subs/ShareOffice';
import ChatList from './ChatSingle-1';
import SelectSeat from './subs/SelectSeat';
import Notification from './subs/Notification';
import Profile from './subs/Profile';

class Application extends Component {
    static navigationOptions = {
        //title: '共享办公',
        header: null
    };

    constructor(props) {
        super(props);

        this.state = {
            buttons: [
                {
                    active: true,
                    middle: false,
                    icon: require('../../images/select_seat/bottom_icon_home.png'),
                    label: '共享办公',
                    topLabel: '共享办公',
                },
                {
                    active: false,
                    middle: false,
                    icon: require('../../images/select_seat/bottom_icon_chat.png'),
                    label: '设计师',
                    topLabel: '设计师',
                },
                {
                    active: false,
                    middle: true,
                    icon: require('../../images/share_office/icon_xenren.png'),
                    label: '资策室',
                    topLabel: '资策室',
                },
                {
                    active: false,
                    middle: false,
                    icon: require('../../images/select_seat/bottom_icon_message.png'),
                    label: '消息',
                    topLabel: '消息',
                },
                {
                    active: false,
                    middle: false,
                    icon: require('../../images/select_seat/bottom_icon_profile.png'),
                    label: '我',
                    topLabel: '我的',
                },
            ],
            activeIndex: 0
        };
    }

    activateMenu(index) {
        let buttons = this.state.buttons;
        buttons = buttons.map((item) => {
            item.active = false;
            return item;
        });
        buttons[index].active = true;
        this.setState({ buttons, activeIndex: index });
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                {
                    this.state.activeIndex != 0 && this.state.activeIndex != 1 && this.state.activeIndex != 3 &&
                    <View style={styles.navigationStyle}>
                        <View style={styles.navigationTextStyle}>
                            <Text style={{ fontSize: 18 }}>
                                {this.state.buttons[this.state.activeIndex].topLabel}
                            </Text>
                        </View>
                    </View>
                }
                <View style={styles.bodyStyle}>
                    {this.state.activeIndex == 0 && <ShareOffice />}
                    {this.state.activeIndex == 1 && <ChatList />}
                    {this.state.activeIndex == 2 && <SelectSeat />}
                    {this.state.activeIndex == 3 && <Notification />}
                    {this.state.activeIndex == 4 && <Profile />}
                </View>
                <View style={styles.footerMenuStyle}>
                    <View style={{
                        backgroundColor: '#fff', height: 60,
                        position: 'absolute', bottom: 0, left: 0,
                        width: '100%',
                        borderTopColor: Config.lineColor,
                        borderTopWidth: 1,
                    }} />
                    {
                        this.state.buttons.map((item, index) => {
                            if (item.middle) {
                                let color = item.active ? Config.primaryColor : Config.textColor;
                                return (
                                    <TouchableOpacity key={index} style={styles.footerMiddleButtonStyle} onPress={() => { this.activateMenu(index) }}>
                                        <View style={styles.logoCircleStyle}>
                                            <Image source={item.icon} style={{ height: 30 }} resizeMode='contain' />
                                        </View>
                                        <Text style={[styles.footerTextStyle, { color: color }]}>{item.label}</Text>
                                    </TouchableOpacity>
                                );
                            } else {
                                let color = item.active ? Config.primaryColor : Config.textColor;
                                return (
                                    <TouchableOpacity key={index} style={styles.footerButtonStyle} onPress={() => { this.activateMenu(index) }}>
                                        <Image source={item.icon} style={{ height: 20, tintColor: color }} resizeMode='contain' />
                                        <Text style={[styles.footerTextStyle, { color: color }]}>{item.label}</Text>
                                    </TouchableOpacity>
                                );
                            }
                        })
                    }
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    navigationStyle: {
        height: 50,
        flexDirection: 'row',
        marginTop: 20,
        borderBottomColor: Config.lineColor,
        borderBottomWidth: 1
    },
    navigationButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    navigationTextStyle: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bodyStyle: {
        flex: 1,
    },
    footerMenuStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        height: 80,
        alignItems: 'flex-end'
    },
    footerButtonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        flexDirection: 'column'
    },
    footerMiddleButtonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        flexDirection: 'column',
    },
    logoCircleStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 46,
        height: 46,
        borderRadius: 23,
        backgroundColor: '#f3f3f3',
    },
    footerTextStyle: {
        fontSize: 11,
        marginTop: 5
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
)(Application);