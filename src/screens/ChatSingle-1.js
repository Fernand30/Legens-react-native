import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TouchableOpacity, Alert, ScrollView, Image, TextInput, Modal } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Config from '../Config';

class ChatSingle extends Component {

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

        this.root = this.props.component.root;
    }

    handleManageContact() {
        //this.props.navigation.navigate('ContactManagement');
        this.root.navigate('ContactManagement');
    }

    componentDidMount() {
        //this.root.navigation.setParams({ handleManageContact: this.handleManageContact });
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

    temp1 = (params) => {
        this.root.navigate('QrcodeResult');
    }

    temp2 = (params) => {
        this.root.navigate('SearchResult',{title: 'Silicon Valley'});
    }

    copyToClipboard(){
        this.setState({ showModal: false });
        //Alert.alert('Information', 'Copied to clipboard');
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                 <View style={styles.navigationStyle}>
                    <View style={{flex:1}}/>
                    <View style={styles.navigationTextStyle}>
                        <Text style={{ fontSize: 18 , fontWeight: '600'}}>
                            Silicon Valley
                        </Text>
                        <TouchableOpacity onPress = { this.temp1.bind(this,{name: 1}) }>
                            <Image source={require('../../images/other/icon_top_left.png')}
                                        style={{ marginLeft:5,height: 20, width: 20, }} resizeMode='contain' />
                        </TouchableOpacity>                
                    </View>
                    <View style={{flex: 1, alignItems:'flex-end'}}>
                        <TouchableOpacity onPress = { this.temp2.bind(this, { name : 2 })} >                  
                            <Image source={require('../../images/other/icon_top_right.png')}
                                        style={{marginRight:20,height: 20, width: 20, }} resizeMode='contain' />
                        </TouchableOpacity>                
                    </View>                
                </View>
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
                            <Image source={require('../../images/other/icon_chat.png')}
                                    style={{ height: 50, width: 50, tintColor: Config.primaryColor, marginRight: 10 }} resizeMode='contain' />
                            
                            <Text style={{textAlign:'center', fontSize: 14, marginTop: 20,marginBottom: 20 , fontWeight: '600' }}>You havent use share office once. Use{'\n'}you will chat with this share office{'\n'}Community</Text>                          
                           
                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 5, paddingVertical:10, paddingHorizontal:40,borderWidth:1,borderColor:'#57b029' }}
                                onPress={() => { this.setState({ showModal: false }) }}>
                                <Text style={{ color: '#57b029', fontSize: 12, fontWeight: '600' }}>OK</Text>
                            </TouchableOpacity>
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
    navigationStyle: {
        height: 50,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 20,
        alignItems: 'center',
        borderBottomColor: Config.lineColor,
        borderBottomWidth: 1
    },
    navigationTextStyle: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center'
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