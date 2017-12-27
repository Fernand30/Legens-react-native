import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform, StyleSheet, Switch, Text, View, ListView,
    TextInput, TouchableOpacity, ActivityIndicator, Alert, ScrollView, Image, Modal, FlatList
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Config from '../Config';
import Ionicons from 'react-native-vector-icons/Ionicons';

class ContactManagement extends Component {
    static navigationOptions = {
        title: 'Contact Management',
    };

    constructor(props) {
        super(props);
        selected =[]
        this.state = {
            trueSwitchIsOn: true,
            falseSwitchIsOn: false,
            showModal: false,
            selected: selected,
        };
        selected =[]

        data = [
            {
                image: require('../../images/contact_management/Layer1.png'),
                name: 'John Doe'
            },
            {
                image: require('../../images/contact_management/Layer2.png'),
                name: 'Smith ellen'
            },
            {
                image: require('../../images/contact_management/Layer3.png'),
                name: 'Mazzui'
            }
        ];
    }

    showModal(){
        this.setState({
            showModal: true,
        })
    }

    showSearchResult(){
        this.setState({
            showModal: false,
        })
    }

    itemPress(name){
        
            selected.push(name)
       
        
        this.setState({
            selected: selected
        })
    }

    renderUser = ({item,selected}) => {
        return (
            <TouchableOpacity onPress={this.itemPress.bind(this,item.name)}>
              <View style={{flexDirection:'row', paddingVertical: 5,borderColor: Config.lineColor,borderBottomWidth:1,alignItems:'center',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',flex:1,alignItems:'center'}}>
                    <Image source={item.image} style={{ height: 40, width: 40 }} />
                    <Text> {item.name}</Text>
                </View>
                    
              </View>
            </TouchableOpacity>
        )
      }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={{ paddingHorizontal: 26 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#000000', marginTop: 12, fontWeight: 'bold', fontSize: 15 }}>DONT LET PEOPLE SEE MY CONTACT</Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 16 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ marginRight: 10 }}>
                                <TouchableOpacity onPress = { this.showModal.bind(this)}>
                                    <Image source={require('../../images/contact_management/Ellipse2.png')} style={{ height: 40, width: 40 }} />
                                </TouchableOpacity>    
                            </View>
                            <Image source={require('../../images/contact_management/Ellipse.png')} style={{ height: 40, width: 40 }} />
                            <Image source={require('../../images/contact_management/Layer1.png')} style={{ height: 40, width: 40 }} />
                            <Image source={require('../../images/contact_management/Ellipse.png')} style={{ height: 40, width: 40 }} />
                            <Image source={require('../../images/contact_management/Layer2.png')} style={{ height: 40, width: 40 }} />
                            <Image source={require('../../images/contact_management/Layer3.png')} style={{ height: 40, width: 40 }} />
                            <Image source={require('../../images/contact_management/Ellipse.png')} style={{ height: 40, width: 40 }} />
                        </View>
                        <View style={{ justifyContent: 'flex-end' }}>
                            <Image source={require('../../images/contact_management/Back.png')} style={{
                                height: 25, width: 25
                            }} />
                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={styles.rowStyle}>
                        <Image source={require('../../images/contact_management/Tencent_qq.png')} style={{ height: 20 }} resizeMode='contain' />
                        <Text style={styles.wordstyle} style={styles.wordstyle}>QQ</Text>
                        <View>
                            <Switch
                                onValueChange={(value) => this.setState({ falseSwitchIsOn: value })} onTintColor="#228b22" thumbTintColor="#fff"
                                value={true} />
                        </View>
                    </View>
                    <View style={styles.rowStyle}>
                        <Image source={require('../../images/contact_management/skype-icon.png')} style={{ height: 20 }} resizeMode='contain' />
                        <Text style={styles.wordstyle} >Skype</Text>
                        <View>
                            <Switch
                                onValueChange={(value) => this.setState({ falseSwitchIsOn: value })} onTintColor="#228b22" thumbTintColor="#fff"

                                value={this.state.falseSwitchIsOn} />
                        </View>
                    </View>
                    <View style={styles.rowStyle}>
                        <Image source={require('../../images/contact_management/wechat-logo.png')} style={{ height: 20 }} resizeMode='contain' />
                        <Text style={styles.wordstyle} >WeChat</Text>
                        <View>
                            <Switch
                                onValueChange={(value) => this.setState({ falseSwitchIsOn: value })} onTintColor="#228b22" thumbTintColor="#fff"

                                value={this.state.falseSwitchIsOn} />
                        </View>
                    </View>
                    <View style={styles.rowStyle}>
                        <Image source={require('../../images/contact_management/MetroUI_phone.png')} style={{ height: 20 }} resizeMode='contain' />
                        <Text style={styles.wordstyle} >Phone</Text>
                        <View>
                            <Switch
                                onValueChange={(value) => this.setState({ falseSwitchIsOn: value })} onTintColor="#228b22" thumbTintColor="#fff"

                                value={this.state.falseSwitchIsOn} />
                        </View>
                    </View>
                </View>
                <View style={{ borderBottomColor: '#ccc', paddingHorizontal: 26, height: 50 }}>
                    <Text style={{ color: '#000000', marginTop: 12, fontWeight: 'bold', fontSize: 15 }}>DONT LET ALL PEOPLE SEE MY CONTACT</Text>
                </View>
                <View>
                    <View style={styles.rowStyle}>
                        <Image source={require('../../images/contact_management/Tencent_qq.png')} style={{ height: 20 }} resizeMode='contain' />
                        <Text style={styles.wordstyle} style={styles.wordstyle}>QQ</Text>
                        <View>
                            <Switch
                                onValueChange={(value) => this.setState({ falseSwitchIsOn: value })} onTintColor="#228b22" thumbTintColor="#fff"
                                value={this.state.falseSwitchIsOn} />
                        </View>
                    </View>
                    <View style={styles.rowStyle}>
                        <Image source={require('../../images/contact_management/skype-icon.png')} style={{ height: 20 }} resizeMode='contain' />
                        <Text style={styles.wordstyle} >Skype</Text>
                        <View>
                            <Switch
                                onValueChange={(value) => this.setState({ falseSwitchIsOn: value })} onTintColor="#228b22" thumbTintColor="#fff"

                                value={this.state.falseSwitchIsOn} />
                        </View>
                    </View>
                    <View style={styles.rowStyle}>
                        <Image source={require('../../images/contact_management/wechat-logo.png')} style={{ height: 20 }} resizeMode='contain' />
                        <Text style={styles.wordstyle} >WeChat</Text>
                        <View>
                            <Switch
                                onValueChange={(value) => this.setState({ falseSwitchIsOn: value })} onTintColor="#228b22" thumbTintColor="#fff"

                                value={this.state.falseSwitchIsOn} />
                        </View>
                    </View>
                    <View style={styles.rowStyle}>
                        <Image source={require('../../images/contact_management/MetroUI_phone.png')} style={{ height: 20 }} resizeMode='contain' />
                        <Text style={styles.wordstyle} >Phone</Text>
                        <View>
                            <Switch
                                onValueChange={(value) => this.setState({ falseSwitchIsOn: value })} onTintColor="#228b22" thumbTintColor="#fff"

                                value={this.state.falseSwitchIsOn} />
                        </View>
                    </View>
                </View>
                <View style={{ height: 45 }} />
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={{ backgroundColor: '#57af2a', borderRadius: 4, height: 45, width: 390, alignItems: 'center', justifyContent: 'center', margin: 10, marginBottom: 0 }}>
                            <Image source={require('../../images/contact_management/BlockUser.png')} style={{ height: 15 }} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => { this.gotoLogin() }}
                            style={{ backgroundColor: '#ffff', borderRadius: 4, height: 45, width: 390, borderColor: '#FF0000', borderWidth: 2, alignItems: 'center', justifyContent: 'center', margin: 10 }}>
                            <Image source={require('../../images/contact_management/ReportUser.png')} style={{ height: 15 }} resizeMode='contain' />
                        </TouchableOpacity>
                    </View>
                </View>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.showModal}>
                    <View style={styles.dialogStyle}>
                        <View style={styles.dialogBoxStyle}>   
                            <Text style={styles.modalText}>Add User</Text>
                            <View style={styles.searchView}>
                                <TextInput underlineColorAndroid="transparent" style={styles.madalTextInput}
                                    placeholder='Search User..'/>
                                <TouchableOpacity style={styles.searchButtonStyle} onPress={() => { this.showSearchResult(); }}>
                                    <Ionicons name='ios-search' color={Config.primaryColor} size={20} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.selectedImageView}>
                                <View>
                                    <Image source={require('../../images/contact_management/Layer3.png')} style={{ height: 40, width: 40 }} />
                                    <Text> John Doe</Text>
                                </View>    
                            </View>  
                            <View style={styles.modalListView}>
                                <FlatList
                                    data={data}
                                    renderItem={this.renderUser}/>
                            </View>  
                        </View>
                    </View>
                </Modal>

            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#F3F3F3',
        height:1334
    },
    modalText:{
        fontSize: 18,
    },
    selectedImageView:{
        backgroundColor: Config.lineColor,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    searchView:{
        marginTop: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: Config.lineColor,
        backgroundColor: '#fff',
        height: 40,
        width: '90%',
        flexDirection: 'row'
    },
    madalTextInput:{
        flex: 1,
        height: 40,
        marginLeft: 10,
        fontSize: 14
    },
    searchButtonStyle: {
        padding: 10,
        backgroundColor: 'transparent'
    },
    rowStyle: {
        height: 35,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 26,
        backgroundColor: '#fff'
    },
    wordstyle: {
        flex: 1,
        marginLeft: 12,
        color: '#000000'
    },
    avatarStyle: {
        height: 30,
        width: 30,
        borderRadius: 25,
        margin: 10,
        flex: 1
    },
    blockUserButtonStyle: {
        backgroundColor: Config.primaryColor,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    reportUserButtonStyle: {
        backgroundColor: '#FF0000',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1

    },
    dialogStyle: {
        flex: 1,
        backgroundColor: 'rgba(44, 62, 80, 0.6)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dialogBoxStyle: {
        flex: 1,
        marginTop:100,
        marginBottom:40,
        marginLeft:10,
        marginRight:10,
        backgroundColor: '#fff',
        padding: 10
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
)(ContactManagement);