import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TouchableOpacity, Alert, ScrollView, Image, Button } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Config from '../../Config';

class ChatList extends Component {
    //static navigationOptions = {
    //        title: '室内成员'
    //};

    constructor(props) {
        super(props);

        this.state = {
            dataSource: this.convertArrayToDataSource([
                {
                    image: require('../../../images/member_list/member_1.png'),
                    name: '雷恩',
                    detail: '擅长 插画设计、网页制作',
                },
                {
                    image: require('../../../images/member_list/member_2.png'),
                    name: '网瘾鹅',
                    detail: '擅长 运营管理',
                }
            ])
        };

        this.root = this.props.component.root;
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
                    <Text style={styles.memberNameStyle}>{item.name}</Text>
                    <Text style={styles.memberDetailStyle}>{item.detail}</Text>
                </View>
                <View style={styles.buttonMemberWrapperStyle}>
                    <TouchableOpacity style={styles.buttonMemberStyle} onPress={() => {
                        this.root.navigate('ChatSingle');
                    }}>
                        <Text>私聊</Text>
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
    },
    memberNameStyle: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5
    },
    memberDetailStyle: {
        color: Config.textSecondaryColor
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
)(ChatList);