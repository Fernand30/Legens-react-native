import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity, DatePickerAndroid } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';
import Select2 from './profile/Select2';

class TransactionHistoryDetail extends Component {
    static navigationOptions = {
        title: 'Transaction Details'
    };

    constructor(props) {
        super(props);

        this.state = {
            params: this.props.navigation.state.params
        };

        this.root = this.props.component.root;
    }

    renderRow(item) {
        let status = null, statusColor = '#ff0';
        switch (item.status) {
            case 1:
                status = 'Complete';
                statusColor = '#57b029';
                break;
            case 2:
                status = 'Pending';
                statusColor = '#f7941d';
                break;
            case 3:
                status = 'Cancel';
                statusColor = '#ff0000';
                break;
        }
        return (
            <TouchableOpacity style={{
                flexDirection: 'row', height: 100, paddingVertical: 10,
                alignItems: 'center', borderBottomColor: Config.lineColor, borderBottomWidth: 1
            }}>
                <Image source={item.photo}
                    style={{
                        height: 70,
                        width: 70,
                        borderRadius: 35
                    }} />
                <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: Config.textColor }}>{item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name='md-calendar' size={14} color='#f27358' />
                        <Text style={{ fontSize: 12, color: '#f27358' }}> {item.date}</Text>
                        <Text style={{ fontSize: 12, color: Config.textColor }}> ID:{item.id}</Text>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#ff8300' }}>{item.amount}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 12, color: Config.textColor }}>Payment Status: </Text>
                        <Text style={{ fontSize: 12, color: statusColor }}>{status}</Text>
                        <Text style={{ fontSize: 12, color: Config.textColor }}>  Category: </Text>
                        <Text style={{ fontSize: 12, color: Config.textColor }}>{item.category}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.headerWrapperStyle}>
                    {this.renderRow(this.state.params)}
                </View>
                <View style={styles.detailWrapperStyle}>
                    <View style={styles.rowTitleStyle}>
                        <Text style={styles.titleStyle}>Dates and times based on UTC</Text>
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.leftStyle}>Reference ID</Text>
                        <Text style={styles.rightStyle}>123456</Text>
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.leftStyle}>Date</Text>
                        <Text style={styles.rightStyle}>March 6 2017</Text>
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.leftStyle}>Type</Text>
                        <Text style={styles.rightStyle}>Hourly</Text>
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.leftStyle}>Description</Text>
                        <Text style={styles.rightStyle}>Invoice for 02/27/2017-03/05/2017 3:00 hrs @3.00/hr</Text>
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.leftStyle}>Client</Text>
                        <Text style={styles.rightStyle}>Legends Lair</Text>
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.leftStyle}>Freelancer</Text>
                        <Text style={styles.rightStyle}>Anne Murigi</Text>
                    </View>
                    <View style={styles.rowStyle}>
                        <Text style={styles.leftStyle}>Amount</Text>
                        <Text style={styles.rightStyle}>($9.00)</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.filterLinkButtonStyle} onPress={() => { }}>
                            <Ionicons name='ios-document-outline' size={30} color='#f26c4f' />
                            <Text style={{ color: '#f26c4f' }}> View Invoice </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.filterLinkButtonStyle} onPress={() => { }}>
                            <Ionicons name='md-calendar' size={30} color='#0072bc' />
                            <Text style={{ color: '#0072bc' }}> View Timelog details </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footerStyle}>
                    <TouchableOpacity style={styles.buttonFullBackgroundStyle} onPress={() => { }}>
                        <Text style={{ color: '#fff' }}>Fixed</Text>
                    </TouchableOpacity>
                    <View style={{ width: 10 }} />
                    <TouchableOpacity style={styles.buttonOutlineBackgroundStyle} onPress={() => { }}>
                        <Text style={{ color: '#f26c4f' }}>Refund</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        flexDirection: 'column',
    },
    headerWrapperStyle: {
        paddingHorizontal: 15
    },
    detailWrapperStyle: {
        flexDirection: 'column',
        paddingHorizontal: 8,
        backgroundColor: '#fff',
    },
    rowTitleStyle: {
        flexDirection: 'row',
        paddingVertical: 8
    },
    rowStyle: {
        flexDirection: 'row',
        borderBottomColor: Config.lineColor,
        borderBottomWidth: 1,
        paddingVertical: 8
    },
    titleStyle: {
        fontSize: 16,
        color: Config.textColor,
        fontWeight: 'bold',
        flex: 1
    },
    leftStyle: {
        fontSize: 14,
        color: Config.textColor,
        fontWeight: 'bold',
        textAlign: 'right',
        flex: 2
    },
    rightStyle: {
        fontSize: 14,
        color: Config.textColor,
        flex: 5,
        paddingLeft: 10
    },
    filterLinkButtonStyle: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    footerStyle: {
        flexDirection: 'row',
        paddingHorizontal: 8,
        paddingVertical: 20
    },
    buttonFullBackgroundStyle: {
        backgroundColor: Config.primaryColor,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1
    },
    buttonOutlineBackgroundStyle: {
        borderColor: '#f26c4f',
        borderWidth: 2,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1
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
)(TransactionHistoryDetail);