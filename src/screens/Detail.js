import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TouchableOpacity, Alert, ScrollView, Image, Button } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Config from '../Config';

class Detail extends Component {
    static navigationOptions = {
        title: '明细',
    };

    constructor(props) {
        super(props);

        this.state = {
            dataSource: this.convertArrayToDataSource([
                {
                    name: '充值成功',
                    time: '2017 11-12 18:00',
                    money: '+￥100',
                },
                {
                    name: '使用办公室',
                    time: '2017 11-12 18:00',
                    money: '-￥27',
                }
            ])
        };
    }

    convertArrayToDataSource(arr) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return ds.cloneWithRows(arr);
    }

    renderRow(item) {
        return (
            <View style={styles.rowStyle}>
                <View style={styles.infoStyle}>
                    <Text style={styles.nameStyle}>{item.name}</Text>
                    <Text style={styles.timeStyle}>{item.time}</Text>
                </View>
                <Text style={styles.moneyStyle}>{item.money}</Text>
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
)(Detail);