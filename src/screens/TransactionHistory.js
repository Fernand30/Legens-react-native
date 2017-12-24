import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity, DatePickerAndroid } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';
import Select2 from './profile/Select2';

const ini = this;

class TransactionHistory extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: 'Transaction History',
            headerRight: (<TouchableOpacity onPress={() => { ini.toggleFilter() }}>
                <Ionicons name='ios-funnel' size={25} color={Config.textColor} style={{ marginRight: 10 }} />
            </TouchableOpacity>)
        };
    };

    constructor(props) {
        super(props);

        let data = [
            {
                photo: require('../../images/dummy/user_1.png'),
                name: 'John Snow',
                date: '2017-01-01',
                id: '12345',
                amount: '¥ 12',
                status: 3,
                category: 'Hourly'
            },
            {
                photo: require('../../images/dummy/user_2.png'),
                name: 'Sisaro',
                date: '2017-01-01',
                id: '12345',
                amount: '¥ 12',
                status: 2,
                category: 'Hourly'
            },
            {
                photo: require('../../images/dummy/user_3.png'),
                name: 'Jenny',
                date: '2017-01-01',
                id: '12345',
                amount: '¥ 12',
                status: 1,
                category: 'Hourly'
            }, {
                photo: require('../../images/dummy/user_1.png'),
                name: 'John Snow',
                date: '2017-01-01',
                id: '12345',
                amount: '¥ 12',
                status: 3,
                category: 'Hourly'
            },
            {
                photo: require('../../images/dummy/user_2.png'),
                name: 'Sisaro',
                date: '2017-01-01',
                id: '12345',
                amount: '¥ 12',
                status: 2,
                category: 'Hourly'
            },
            {
                photo: require('../../images/dummy/user_3.png'),
                name: 'Jenny',
                date: '2017-01-01',
                id: '12345',
                amount: '¥ 12',
                status: 1,
                category: 'Hourly'
            },
        ];

        this.state = {
            isShowFilter: false,
            startDate: '2000-01-01',
            filterText: '',
            data: data,
            dataSource: this.convertArrayToDataSource(data),
            transaction: 'all',
            transactionList: [
                { id: 'all', name: 'All Transaction' },
                { id: 'hourly', name: 'Hourly' },
                { id: 'fixed', name: 'Fixed' },
            ],
            agency: 'all',
            agencyList: [
                { id: 'all', name: 'All Agencies/Teams' },
                { id: 'hourly', name: 'Hourly' },
                { id: 'fixed', name: 'Fixed' },
            ]
        };

        this.root = this.props.component.root;

        ini = this;
    }

    showDatepicker() {
        //parse currect date
        const array = this.state.startDate.split('-');

        DatePickerAndroid.open({
            // Use `new Date()` for current date.
            // May 25 2020. Month 0 is January.
            date: new Date(parseInt(array[0]), parseInt(array[1]) - 1, parseInt(array[2]))
        }).then((result) => {
            const { action, year, month, day } = result;
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
                console.log(year, month, day);
                const selectedDate = year + '-' + (month + 1) + '-' + day;
                this.setState({ startDate: selectedDate });
            }
        }).catch((error) => { });
    }

    toggleFilter() {
        this.setState({
            isShowFilter: !this.state.isShowFilter
        })
    }

    renderFilter() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection: 'row', marginVertical: 10, flexWrap: 'wrap' }}>
                    <TouchableOpacity style={styles.filterDateStyle} onPress={() => { this.showDatepicker() }}>
                        <Text style={{ flex: 1, color: Config.textColor }}>{this.state.startDate}</Text>
                        <Ionicons name='md-calendar' size={20} color={Config.textColor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterDateStyle} onPress={() => { this.showDatepicker() }}>
                        <Text style={{ flex: 1, color: Config.textColor }}>{this.state.startDate}</Text>
                        <Ionicons name='md-calendar' size={20} color={Config.textColor} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterGoButtonStyle} onPress={() => { }}>
                        <Text style={{ color: '#fff' }}>Go</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterLinkButtonStyle} onPress={() => { }}>
                        <Ionicons name='md-calendar' size={20} color='#d35400' />
                        <Text style={{ color: '#d35400' }}> Last Week</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterLinkButtonStyle} onPress={() => { }}>
                        <Ionicons name='md-calendar' size={20} color='#d35400' />
                        <Text style={{ color: '#d35400' }}> Last Month</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonWrapperStyle}>
                    <TouchableOpacity style={styles.buttonFullBackgroundStyle} onPress={() => { }}>
                        <Text style={{ color: '#fff' }}>Download Invoice (zip)</Text>
                    </TouchableOpacity>
                    <View style={{ width: 10 }} />
                    <TouchableOpacity style={styles.buttonOutlineBackgroundStyle} onPress={() => { }}>
                        <Text style={{ color: Config.primaryColor }}>Download CSV</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    convertArrayToDataSource(arr) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return ds.cloneWithRows(arr);
    }

    showDetail(item){
        this.props.navigation.navigate('TransactionHistoryDetail', item);
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
            <TouchableOpacity 
            onPress={()=>{ this.showDetail(item); }}
            style={{
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

    renderDropdownFilter() {
        let filter_1 = (
            <Select2
                parentStyle={{ width: '100%' }}
                dataSource={this.state.transactionList}
                renderId={(item) => (item.id)}
                renderRow={(item) => (
                    <View style={{
                        height: 40, justifyContent: 'center', alignItems: 'center',
                        paddingHorizontal: 10, flexDirection: 'row'
                    }}>
                        <Text style={{ flex: 1 }}>{item.name}</Text>
                    </View>
                )}
                renderDisplay={(item) => (
                    <View style={{
                        height: 40, justifyContent: 'center', alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Text style={{ flex: 1 }}>{item.name}</Text>
                        <Ionicons name='md-arrow-dropdown' color='#000' />
                    </View>
                )}
                renderEmpty={() => (
                    <View style={{
                        height: 40, justifyContent: 'center', alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Text style={{ flex: 1 }}>-</Text>
                        <Ionicons name='md-arrow-dropdown' color='#000' />
                    </View>
                )}
                renderLabel={(item) => (item.name)}
                onSelect={(item) => { this.setState({ transaction: item.id }); }}
                cancelText='Cancel'
                selectedValue={this.state.transaction}
            />
        );
        let filter_2 = (
            <Select2
                parentStyle={{ width: '100%' }}
                dataSource={this.state.agencyList}
                renderId={(item) => (item.id)}
                renderRow={(item) => (
                    <View style={{
                        height: 40, justifyContent: 'center', alignItems: 'center',
                        paddingHorizontal: 10, flexDirection: 'row'
                    }}>
                        <Text style={{ flex: 1 }}>{item.name}</Text>
                    </View>
                )}
                renderDisplay={(item) => (
                    <View style={{
                        height: 40, justifyContent: 'center', alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Text style={{ flex: 1 }}>{item.name}</Text>
                        <Ionicons name='md-arrow-dropdown' color='#000' />
                    </View>
                )}
                renderEmpty={() => (
                    <View style={{
                        height: 40, justifyContent: 'center', alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Text style={{ flex: 1 }}>-</Text>
                        <Ionicons name='md-arrow-dropdown' color='#000' />
                    </View>
                )}
                renderLabel={(item) => (item.name)}
                onSelect={(item) => { this.setState({ agency: item.id }); }}
                cancelText='Cancel'
                selectedValue={this.state.agency}
            />
        );
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.dropDownStyle}>
                    {filter_1}
                </View>
                <View style={styles.dropDownStyle}>
                    {filter_2}
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                {this.state.isShowFilter && this.renderFilter()}
                {/* Search Filter */}
                <View style={styles.searchWrapperStyle}>
                    <View style={styles.searchContentStyle}>
                        <Ionicons name='md-search' size={20} color='#000' />
                        <TextInput style={styles.searchInputStyle}
                            placeholder='Search'
                            placeholderTextColor='#bdc3c7'
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            onChangeText={(filterText) => this.setState({ filterText })}
                            value={this.state.filterText} />
                    </View>
                </View>
                {/* Balance */}
                <View style={styles.balanceWrapperStyle}>
                    <Text style={{ fontSize: 12, color: '#fff' }}>BALANCE</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#fff' }}>$</Text>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}>0.00</Text>
                    </View>
                    <Text style={{ fontSize: 10, color: '#fff' }}>Fixed Price Deposits (not included in balance): $0.00</Text>
                </View>
                {this.renderDropdownFilter()}
                <ListView
                    style={{ padding: 10 }}
                    dataSource={this.state.dataSource}
                    renderRow={(item) => this.renderRow(item)}
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
    filterDateStyle: {
        width: 120,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        marginLeft: 10,
        borderColor: Config.lineColor,
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10
    },
    filterGoButtonStyle: {
        width: 60,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 5,
        backgroundColor: Config.primaryColor
    },
    filterLinkButtonStyle: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    buttonWrapperStyle: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingBottom: 10
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
        borderColor: Config.primaryColor,
        borderWidth: 2,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flex: 1
    },
    searchWrapperStyle: {
        padding: 10,
        backgroundColor: Config.textSecondaryColor
    },
    searchContentStyle: {
        backgroundColor: '#fff',
        borderRadius: 5,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center'
    },
    searchInputStyle: {
        flex: 1,
        color: '#000',
        marginLeft: 10,
        fontSize: 14
    },
    balanceWrapperStyle: {
        backgroundColor: Config.primaryColor,
        height: 100,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dropDownStyle: {
        flex: 1, 
        borderWidth: 1, 
        borderColor: Config.lineColor, 
        height: 40,
        justifyContent: 'center', 
        alignItems: 'center',
        margin: 10,
        borderRadius: 5
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
)(TransactionHistory);