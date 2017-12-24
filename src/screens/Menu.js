import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TouchableOpacity, Alert, ScrollView, Image, Button } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Config from '../Config';

class Menu extends Component {
    static navigationOptions = {
        title: 'Menu',
    };

    constructor(props) {
        super(props);

        this.state = {
            dataSource: this.convertArrayToDataSource([
                {
                    name: 'Time Tracking',
                    screen: 'TimeTracking',
                },
                {
                    name: 'Private Chat',
                    screen: 'PrivateChat',
                },
                {
                    name: 'Member List',
                    screen: 'MemberList',
                },
                {
                    name: 'Complain',
                    screen: 'Complain',
                },
                {
                    name: 'Detail',
                    screen: 'Detail',
                },
            ])
        };
    }

    convertArrayToDataSource(arr) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return ds.cloneWithRows(arr);
    }

    gotoPage(screen) {
        this.props.navigation.navigate(screen);
    }

    renderRow(item) {
        return (
            <View style={styles.rowStyle}>
                <TouchableOpacity style={styles.infoStyle} onPress={()=>{ this.gotoPage(item.screen )}}>
                    <Text style={styles.nameStyle}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <ListView
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
    },
    rowStyle: {
        height: 70,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    infoStyle: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    nameStyle: {
        fontSize: 16,
        color: '#000'
    },
    timeStyle: {
        fontSize: 13,
        color: Config.textSecondaryColor
    },
    moneyStyle: {
        fontSize: 20,
        color: '#000'
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
)(Menu);