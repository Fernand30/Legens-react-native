import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TouchableOpacity, Alert, ScrollView, Image, Button } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Config from '../Config';

class MemberList extends Component {
    static navigationOptions = {
        title: '室内成员'
    };

    constructor(props) {
        super(props);

        this.state = {
            dataSource: this.convertArrayToDataSource([
                {
                    image: require('../../images/member_list/member_1.png'),
                    name: require('../../images/member_list/member_name_1.png'),
                    name_width: 31,
                    detail: require('../../images/member_list/member_detail_1.png'),
                    detail_width: 138,
                },
                {
                    image: require('../../images/member_list/member_2.png'),
                    name: require('../../images/member_list/member_name_2.png'),
                    name_width: 45,
                    detail: require('../../images/member_list/member_detail_2.png'),
                    detail_width: 76,
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
                <Image source={item.image} style={styles.avatarStyle} />
                <View style={styles.infoStyle}>
                    <Image source={item.name} style={{ height: 15, marginBottom: 5, width: item.name_width }} resizeMode='contain'/>
                    <Image source={item.detail} style={{ height: 12, width: item.detail_width }} resizeMode='contain'/>
                </View>
                <View style={styles.buttonMemberWrapperStyle}>
                <TouchableOpacity style={styles.buttonMemberStyle}>
                    <Image source={require('../../images/member_list/member_button.png')} style={{ height: 15 }} resizeMode='contain'/>
                </TouchableOpacity>
                </View>
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
        height: 80,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarStyle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 10
    },
    infoStyle: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    buttonMemberWrapperStyle: {
        paddingHorizontal: 10
    },
    buttonMemberStyle: {
        backgroundColor: '#fff',
        borderRadius: 3,
        borderColor: Config.textColor,
        borderWidth: 1,
        paddingVertical: 5,
        paddingHorizontal: 10
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
)(MemberList);