import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../../Config';

class SelectSeat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chair: [
                [
                    { type: 'chair', number: 2 },
                    { type: 'chair', number: 2 },
                    { type: 'chair', number: 5 },
                    { type: 'window' },
                    { type: 'chair', number: 2 },
                    { type: 'chair', number: 2 },
                ],
                [
                    { type: 'chair', number: 6 },
                    { type: 'chair', number: 7 },
                    { type: 'group' },
                    { type: 'chair', number: 2 },
                    { type: 'tea' },
                    { type: 'chair', number: 2 },
                ],
                [
                    { type: 'chair', number: 2 },
                    { type: 'chair', number: 8 },
                    { type: 'chair', number: 1 },
                    { type: 'chair', number: 4 },
                    { type: 'tree' },
                    { type: 'vr' },
                ],
                [
                    { type: 'empty' },
                    { type: 'empty' },
                    { type: 'chair', number: 1 },
                    { type: 'chair', number: 4 },
                    { type: 'empty' },
                    { type: 'empty' },
                ],
            ]
        };
    }

    renderSeatIcon(detail) {
        let image;
        if (detail.type == 'chair') {
            image = (
                <View>
                    <Image source={require('../../../images/select_seat/icon_chair.png')}
                        style={{ width: 30, height: 50 }}
                        resizeMode='contain' />
                    <View style={styles.chairNumberStyle}>
                        <Text style={{ color: Config.primaryColor, backgroundColor: 'transparent' }}>
                            {detail.number}
                        </Text>
                    </View>
                </View>
            );
        } else if (detail.type == 'window') {
            image = (
                <Image source={require('../../../images/select_seat/icon_window.png')}
                    style={{ width: 25, height: 50 }}
                    resizeMode='contain' />
            );
        } else if (detail.type == 'tree') {
            image = (
                <Image source={require('../../../images/select_seat/icon_tree.png')}
                    style={{ width: 25, height: 50 }}
                    resizeMode='contain' />
            );
        }else if (detail.type == 'tea') {
            image = (
                <Image source={require('../../../images/select_seat/icon_tea.png')}
                    style={{ width: 21, height: 50 }}
                    resizeMode='contain' />
            );
        }else if (detail.type == 'group') {
            image = (
                <Image source={require('../../../images/select_seat/icon_group.png')}
                    style={{ width: 25, height: 50 }}
                    resizeMode='contain' />
            );
        }else if (detail.type == 'vr') {
            image = (
                <Image source={require('../../../images/select_seat/icon_vr.png')}
                    style={{ width: 25, height: 50 }}
                    resizeMode='contain' />
            );
        }
        return image;
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.navigationStyle}>
                    <TouchableOpacity style={styles.navigationButtonStyle}>
                        <Ionicons name='ios-arrow-back' size={30} color={Config.primaryColor} style={{ marginVertical: 5, marginHorizontal: 10 }} />
                        <Text style={{ color: Config.primaryColor }}>BACK</Text>
                    </TouchableOpacity>
                    <View style={styles.navigationTextStyle}><Text>Select Seat</Text></View>
                    <TouchableOpacity style={styles.navigationButtonStyle} />
                </View>
                <View style={styles.seatStyle}>
                    <View style={styles.seatTopStyle}>
                        {
                            this.state.chair.map((item, index_1) => {
                                const key_1 = 'baris_' + index_1;
                                return (
                                    <View key={key_1} style={styles.rowViewStyle}>
                                        {
                                            item.map((detail, index_2) => {
                                                const key_2 = 'kolom_' + index_1 + '_' + index_2;
                                                return (
                                                    <TouchableOpacity key={key_2} style={styles.seatButtonStyle}>
                                                        {this.renderSeatIcon(detail)}
                                                    </TouchableOpacity>
                                                );
                                            })
                                        }
                                    </View>
                                );
                            })
                        }
                    </View>
                    <View style={styles.seatTopStyle}>
                        <TouchableOpacity style={{ paddingVertical: 10 }}>
                            <Image source={require('../../../images/select_seat/icon_horizontal.png')}
                                style={{ width: 30, height: 30 }}
                                resizeMode='contain' />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ paddingVertical: 10 }}>
                            <Image source={require('../../../images/select_seat/icon_vertical.png')}
                                style={{ width: 30, height: 30 }}
                                resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.buttonStyle}>
                    <TouchableOpacity style={styles.confirmButton}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>CONFIRM</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ color: Config.textColor, fontSize: 14, marginVertical: 10 }}>
                            Scan QR Code or select Seat
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.scanButton}>
                        <Text style={{ color: Config.primaryColor, fontSize: 16 }}>SCAN</Text>
                        <Image source={require('../../../images/select_seat/icon_qrcode.png')}
                            style={{ height: 25, tintColor: Config.primaryColor }}
                            resizeMode='contain' />
                    </TouchableOpacity>
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
        paddingTop: 20
    },
    navigationStyle: {
        height: 50,
        flexDirection: 'row',
    },
    seatStyle: {
        flex: 2,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    seatTopStyle: {
        flexDirection: 'column',
    },
    buttonStyle: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
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
    confirmButton: {
        height: 45,
        backgroundColor: Config.primaryColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scanButton: {
        height: 45,
        backgroundColor: '#f3f3f3',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    seatButtonStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowViewStyle: {
        flexDirection: 'row'
    },
    chairNumberStyle: {
        position: 'absolute',
        top: 0,
        //backgroundColor: '#f00',
        width: 30,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center'
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
)(SelectSeat);