import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TouchableOpacity, Alert, ScrollView, Image, TextInput, Modal } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Config from '../Config';

const ini = this;

class ChatSingle extends Component {
    // static navigationOptions = {
    //     title: '设计师',
    //     header: false
    // };

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        return {
            title: '设计师',
            headerRight: (<TouchableOpacity onPress={() => { ini.handleManageContact() }}>
                <Image source={require('../../images/private_chat/icon_manage.png')}
                    style={{ width: 30, height: 30, resizeMode: 'contain', marginRight: 10 }} />
            </TouchableOpacity>)
        };
    };

    constructor(props) {
        super(props);

        let data = [
            {
                type: 'left',
                image: require('../../images/member_list/member_1.png'),
                message: '你好，你是设计师吗'
            },
            {
                type: 'right',
                image: require('../../images/member_list/member_2.png'),
                message: '是的'
            },
            {
                type: 'left',
                image: require('../../images/member_list/member_1.png'),
                message: '你好，你是设计师吗'
            },
            {
                type: 'right',
                image: require('../../images/member_list/member_2.png'),
                message: '是的'
            },
            {
                type: 'left',
                image: require('../../images/member_list/member_1.png'),
                message: '你好，你是设计师吗'
            },
            {
                type: 'right',
                image: require('../../images/member_list/member_2.png'),
                message: '是的'
            },
        ];

        this.state = {
            data: data,
            dataSource: this.convertArrayToDataSource(data),
            chatText: '',
            showModal: true
        };

        ini = this;
        this.root = this.props.component.root;
    }

    handleManageContact() {
        //this.props.navigation.navigate('ContactManagement');
        this.root.navigate('ContactManagement');
    }

    componentDidMount() {
        //this.props.navigation.setParams({ handleManageContact: this.handleManageContact });
        //this.root.navigate('ContactManagement');
    }

    convertArrayToDataSource(arr) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return ds.cloneWithRows(arr);
    }

    sendMessage() {
        if (this.state.chatText != '') {
            let data = this.state.data;
            data.push({
                type: 'right',
                image: require('../../images/member_list/member_2.png'),
                message: this.state.chatText
            });
            this.setState({
                data: data,
                dataSource: this.convertArrayToDataSource(data),
                chatText: ''
            });
        }
    }

    renderRow(item) {
        if (item.type == 'left') {
            return (
                <View style={styles.rowStyle}>
                    <Image source={item.image} style={styles.avatarStyle} />
                    <Image source={require('../../images/private_chat/corner_1.png')}
                        style={{ height: 10, width: 10, tintColor: '#fff', marginRight: -2 }} />
                    <View style={styles.infoStyle}>
                        <View style={styles.bubbleLeftStyle}>
                            <Text>{item.message}</Text>
                        </View>
                    </View>
                </View>
            );
        } else {
            return (
                <View style={styles.rowStyle}>
                    <View style={[styles.infoStyle, { alignItems: 'flex-end' }]}>
                        <View style={styles.bubbleRightStyle}>
                            <Text style={{ color: '#fff' }}>{item.message}</Text>
                        </View>
                    </View>
                    <Image source={require('../../images/private_chat/corner_2.png')}
                        style={{ height: 10, width: 10, tintColor: Config.primaryColor, marginLeft: -2 }} />
                    <Image source={item.image} style={styles.avatarStyle} />
                </View>
            );
        }
    }

    onQqPress() {
        this.setState({ showModal: true });
    }

    copyToClipboard(){
        this.setState({ showModal: false });
        //Alert.alert('Information', 'Copied to clipboard');
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <TouchableOpacity onPress={() => { this.handleManageContact()}}>
                    <Image source={require('../../images/private_chat/icon_manage.png')}
                        style={{ width: 30, height: 30, resizeMode: 'contain', marginRight: 10 }} />
                </TouchableOpacity>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item) => this.renderRow(item)}
                />
                <View style={styles.inputTextWrapperStyle}>
                    <View style={styles.inputBoxStyle}>

                        <TextInput style={styles.inputTextStyle}
                            placeholder='Type your message'
                            autoCapitalize='none'
                            autoCorrect={false}
                            multiline={true}
                            underlineColorAndroid='transparent'
                            onChangeText={(chatText) => this.setState({ chatText })}
                            value={this.state.chatText} />

                    </View>
                    <TouchableOpacity style={{ paddingLeft: 20 }} onPress={() => { this.sendMessage(); }}>
                        <Text>发送</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.showModal}>
                    <View style={styles.dialogStyle}>
                        <View style={styles.dialogBoxStyle}>
                            <View style={{ height: 20 }} />
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, paddingHorizontal: 10 }}>
                                <Image source={require('../../images/other/icon_phone_laptop.png')}
                                    style={{ height: 40, width: 40, tintColor: Config.primaryColor, marginRight: 10 }} resizeMode='contain' />
                                <Text style={{ flex: 1, fontSize: 10 }}>Should not discuss platform issue, if got problem please discuss with customer service</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', height: 50, paddingHorizontal: 10 }}>
                                <Image source={require('../../images/other/icon_announce.png')}
                                    style={{ height: 40, width: 40, tintColor: Config.primaryColor, marginRight: 10 }} resizeMode='contain' />
                                <Text style={{ flex: 1, fontSize: 10 }}>Advertise only for job , other is not allow</Text>
                            </View>
                            <View style={{ height: 20 }} />
                            <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#f36c4f', paddingVertical: 10, paddingHorizontal: 10, height: 50 }}>
                                <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>
                                    Who ever offence the rule will be deduct deposits and not allow to use chat room for 5 days
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', height: 40 }}>
                                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 10 }}
                                    onPress={() => { this.setState({ showModal: false }) }}>
                                    <Text style={{ color: '#f36c4f', fontSize: 11, fontWeight: 'bold' }}>LEAVE</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomRightRadius: 10, backgroundColor: Config.primaryColor }}
                                    onPress={() => { this.copyToClipboard(); }}>
                                    <Text style={{ color: '#fff', fontSize: 11, fontWeight: 'bold' }}>AGREE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View >
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#f3f3f3',
        flex: 1,
    },
    headerStyle: {
        flexDirection: 'row',
        height: 70,
        backgroundColor: '#fff'
    },
    socialButtonStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialIconStyle: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginBottom: 5
    },
    rowStyle: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    avatarStyle: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginHorizontal: 10
    },
    infoStyle: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    bubbleLeftStyle: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        borderTopLeftRadius: 0
    },
    bubbleRightStyle: {
        backgroundColor: Config.primaryColor,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderTopRightRadius: 0
    },
    inputTextWrapperStyle: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputBoxStyle: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        paddingVertical: 5,
        paddingHorizontal: 5,
    },
    inputTextStyle: {
        fontSize: 14
    },
    dialogStyle: {
        flex: 1,
        backgroundColor: 'rgba(44, 62, 80, 0.6)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dialogBoxStyle: {
        width: 280,
        height: 230,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
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
)(ChatSingle);