import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../../Config';
import Tab1 from './notification/Tab1';
import Tab2 from './notification/Tab2';
import Tab3 from './notification/Tab3';

class Notification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screen: 1
        };
    }

    switchScreen(screen) {
        this.setState({ screen });
    }

    renderButton(screen, flex, icon, label, iconWidth, iconHeight) {
        let color = '#95a5a6';
        if (this.state.screen == screen) {
            color = Config.primaryColor;
        }
        return (
            <TouchableOpacity style={[styles.itemButtonStyle, { flex: flex }]}
                onPress={() => { this.switchScreen(screen) }}>
                <Image source={icon}
                    style={{
                        height: iconHeight,
                        width: iconWidth,
                        resizeMode: 'contain',
                        tintColor: color
                    }} />
                <Text style={{ color: color, fontSize: 12 }}> {label}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.navigationStyle}>
                    <View style={styles.navigationTextStyle}>
                        <Image source={require('../../../images/notification/icon_list_left.png')}
                                        style={{marginRight:10,marginLeft:10,height: 20, width: 20, }} resizeMode='contain' />
                        <Text style={{ fontSize: 18 }}>
                            Legens Lair
                        </Text>
                    </View>
                    <View style={{flex: 1, justifyContent:'center', alignItems: 'flex-end'}}>
                        <Image source={require('../../../images/notification/icon_search.png')}
                                style={{marginRight:20,height: 15, width: 15, }} resizeMode='contain' />
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    {this.state.screen == 1 && <Tab1 />}
                    {this.state.screen == 2 && <Tab2 />}
                    {this.state.screen == 3 && <Tab3 />}
                </View>
                <View style={styles.footerStyle}>
                    {this.renderButton(1, 2, require('../../../images/notification/icon_tab_1.png'), 'All', 20, 20)}

                    <View style={{ width: 1, height: 30, backgroundColor: '#95a5a6' }} />

                    {this.renderButton(2, 3, require('../../../images/notification/icon_tab_2.png'), 'System Message', 25, 25)}

                    <View style={{ width: 1, height: 30, backgroundColor: '#95a5a6' }} />

                    {this.renderButton(3, 2, require('../../../images/notification/icon_tab_3.png'), 'Inbox', 20, 20)}
                </View>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        //marginBottom: -20
    },
    footerStyle: {
        height: 40,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemButtonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1
    },
    navigationStyle: {
        height: 50,
        flexDirection: 'row',
        marginTop: 20,
        borderBottomColor: Config.lineColor,
        borderBottomWidth: 1,
        justifyContent: 'space-between'
    },
    navigationTextStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
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
)(Notification);