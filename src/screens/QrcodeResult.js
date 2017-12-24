import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, ListView, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Config from '../Config';

class QrcodeResult extends Component {
    static navigationOptions = {
        title: 'Office',
    };

    constructor(props) {
        super(props);

        let data = [
            {
                image: require('../../images/dummy/office_1.jpg'),
                name: 'Bao An Airplane',
                distance: '1.5km',
                capacity: '3 / 50',
                price: '35$'
            },
            {
                image: require('../../images/dummy/office_2.jpg'),
                name: 'Revio Space',
                distance: '0.5km',
                capacity: '10 / 50',
                price: '35$'
            }
        ];

        this.state = {
            dataSource: this.convertArrayToDataSource(data)
        };
    }

    convertArrayToDataSource(arr) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return ds.cloneWithRows(arr);
    }

    renderRow(item) {
        return (
            <TouchableOpacity style={styles.rowStyle}>
                <Image source={item.image} style={styles.imageStyle} />
                <View style={styles.infoStyle}>
                    <Text style={styles.textTitleStyle}>{item.name}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1 }}>{item.distance} Away</Text>
                        <Text style={{ flex: 1 }}>{item.capacity} Users</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems:'center' }}>
                        <Text style={{ fontSize: 25, color: Config.primaryColor }}>{item.price}</Text>
                        <Text style={{ flex: 1 }}> Per Hour</Text>
                    </View>
                </View>
            </TouchableOpacity>
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
        backgroundColor: '#f7f7f7',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    rowStyle: {
        borderRadius: 5,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 5,
        overflow: 'hidden',
    },
    imageStyle: {
        resizeMode: 'cover',
        height: 100,
        width: 120,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        overflow: 'hidden',
    },
    infoStyle: {
        height: 100,
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10
    },
    textTitleStyle: {
        backgroundColor: 'transparent',
        fontSize: 22
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
)(QrcodeResult);