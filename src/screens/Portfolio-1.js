import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AvatarWithStatus from '../components/AvatarWithStatus';
import Config from '../Config';
import Tab1 from './portfolio/Tab1';
import Tab2 from './portfolio/Tab2';
import Tab3 from './portfolio/Tab3';
import Tab4 from './portfolio/Tab4';

const TabNav = TabNavigator(
    {
        Tab1: { screen: Tab1 },
        Tab2: { screen: Tab2 },
        Tab3: { screen: Tab4 },
    },
    {
        tabBarPosition: 'top',
       
        tabBarOptions: {
            activeTintColor: Config.primaryColor,
            inactiveTintColor: 'black',
            labelStyle: {
                fontSize: 16,
            },
            tabStyle: {
                justifyContent: 'center',
                alignItems: 'center'
            },
            style: {
                marginTop: 40,
                backgroundColor: '#fff',
                borderBottomWidth: 2,
                borderBottomColor: Config.lineColor
            }
        }

    }
);

const ini = this;
class Portfolio extends Component {
    static navigationOptions = {
        title: 'PERSONAL INFO',
        headerRight: (<TouchableOpacity onPress={() => { ini.handleManageContact() }}>
                <Image source={require('../../images/portfolio/icon_top_left.png')}
                    style={{ width: 20, height: 20, resizeMode: 'contain', marginRight: 10 }} />
            </TouchableOpacity>)
    };

    constructor(props) {
        super(props);
        ini = this;
    }

    handleManageContact() {
        alert('manage')
    }

    goContact(){
        this.props.navigation.navigate('ChatSingle');
    }

    render() {

        return (
            <ScrollView style={styles.rootStyle}>
                <View style={styles.headerStyle}>
                    <Image source={require('../../images/portfolio/icon_image.png')}
                    style={{ width: 130, height: 130, resizeMode: 'contain' }} />
                </View>
                <Text style={{ fontSize: 20, marginBottom: 5,textAlign: 'center' }}>Adam Jhon</Text>
                <View style={styles.buttonView}>
                    <TouchableOpacity onPress={this.goContact.bind(this)} style={styles.contactButton}>
                        <Text style={styles.contactText}> Contact </Text>
                    </TouchableOpacity>
                </View>        
                
                <View style={styles.legendsView}>
                    <View style={styles.left}>
                        <Text style={{fontSize: 20, }}>LEGENDS</Text>
                        <Text style={{fontSize: 16, color: Config.commonColor }}>Product Designer</Text>
                        <Text style={{fontSize: 12, color: Config.textColor}}>Designer</Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={require('../../images/portfolio/icon_qr.png')}
                            style={{ width: 60, height: 60, resizeMode: 'contain' }} />
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10,}}>
                    <Text style={{fontSize: 16, color: Config.textColor, width: 150}}> Status:</Text>
                    <Text style={{fontSize: 18, color: Config.primaryColor,}}> Looking For Project</Text> 
                </View>
                <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10,}}>
                    <Text style={{fontSize: 16, color: Config.textColor, width: 150}}> Rate:</Text>
                    <Text style={{fontSize: 16, color: Config.textColor,}}> $10.00/hr</Text> 
                </View>
                <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10,}}>
                    <Text style={{fontSize: 16, color: Config.textColor, width: 150}}> Age:</Text>
                    <Text style={{fontSize: 16, color: Config.textColor,}}> 34</Text> 
                </View>
                <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10,}}>
                    <Text style={{fontSize: 16, color: Config.textColor, width: 150}}> Experience:</Text>
                    <Text style={{fontSize: 16, color: Config.textColor,}}> 3 years</Text> 
                </View>
                <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center'}}>
                    <View style={{backgroundColor: Config.primaryColor, borderRadius: 10, width: 20, height: 20, alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 12, color: Config.white,}}>i</Text>                    
                    </View>
                    <Text style={{marginLeft: 20, fontSize: 16, color: Config.textColor,}}> INFO</Text> 
                </View>
                <Text style={{marginLeft: 10, fontSize: 16, color: Config.textColor, marginTop: 20,}}>
                    Contrary to popular belief. Lorem lpum is not{'\n'}simply random text. It has roots in a piece of
                    {'\n'}classical latin literature from 45 BC, making it over.
                    {'\n'}{'\n'}
                    A classcial Latin literature from 45 BC, {'\n'}making it over.
                </Text>
                <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center'}}>
                    <Image source={require('../../images/portfolio/icon_hand.png')}
                            style={{ marginLeft: 10, width: 20, height: 20, resizeMode: 'contain' }} />
                    <Text style={{marginLeft: 20, fontSize: 16, color: Config.textColor,}}> SKILLS</Text> 
                </View> 
                <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10,}}>
                    <View style={{flexDirection: 'row', width:90, height: 40,borderRadius: 5, backgroundColor: Config.yellow,justifyContent:'center',alignItems:'center'}}>
                        <View style={{width: 30,height:30,borderRadius: 15,borderWidth:1,borderColor:'white',alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('../../images/portfolio/icon_php.png')}
                                    style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                        </View>
                        <Text style={{ marginLeft:10,color:'white', fontSize: 16}}> PHP</Text>
                    </View>
                    <View style={{marginLeft: 10, flexDirection: 'row', width:130, height: 40,borderRadius: 5, backgroundColor: Config.green,justifyContent:'center',alignItems:'center'}}>
                        <View style={{width: 30,height:30,borderRadius: 15,borderWidth:1,borderColor:'white',alignItems:'center', justifyContent:'center'}}>
                            <Image source={require('../../images/portfolio/icon_javascript.png')}
                                    style={{ width: 20, height: 20, resizeMode: 'contain' }} />
                        </View>
                        <Text style={{ marginLeft:10, color:'white', fontSize: 16}}> JavaScript</Text>
                    </View>
                    <View style={{ marginLeft: 10,width:80, height: 40,borderRadius: 5, backgroundColor: Config.white, borderColor:Config.lineColor, borderWidth: 1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:Config.textColor, fontSize: 16}}> HTML5</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10,}}>
                    <View style={{ width:160, height: 40,borderRadius: 5, backgroundColor: Config.white, borderColor:Config.lineColor, borderWidth: 1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:Config.textColor, fontSize: 16}}> Adobe Photoshop</Text>
                    </View>
                    <View style={{ marginLeft: 10,width:160, height: 40,borderRadius: 5, backgroundColor: Config.white, borderColor:Config.lineColor, borderWidth: 1, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:Config.textColor, fontSize: 16}}> Adoge illustrator</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center'}}>
                    <Image source={require('../../images/portfolio/icon_language.png')}
                            style={{ marginLeft: 10, width: 20, height: 20, resizeMode: 'contain' }} />
                    <Text style={{marginLeft: 20, fontSize: 16, color: Config.textColor,}}> LANGUAGES</Text> 
                </View> 
                <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10, alignItems: 'center'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../images/portfolio/icon_king.png')}
                                style={{ marginLeft: 10, width: 40, height: 20, resizeMode: 'contain' }} />
                        <Text style={{marginLeft: 10, fontSize: 16, color: Config.textColor,}}> English</Text> 
                    </View> 
                    <View style={{flexDirection: 'row', marginLeft: 20, alignItems: 'center'}}>
                        <Image source={require('../../images/portfolio/icon_flag.png')}
                                style={{ marginLeft: 10, width: 40, height: 20, resizeMode: 'contain' }} />
                        <Text style={{marginLeft: 10, fontSize: 16, color: Config.textColor,}}> Germeny</Text> 
                    </View> 
                </View> 
                <View style={{marginTop: 20, marginLeft: 10,}} >
                    <Image source={require('../../images/portfolio/image.png')}
                                style={{ width: 360,height: 219, resizeMode: 'contain' }} />
                </View> 
                    <View style={{height:400,}}>        
                    <TabNav />
                  </View>
            </ScrollView>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flex: 1
    },
    right: {
        flex: 1,
        alignItems: 'flex-end'
    },
    left: {
        flex: 1
    },
    headerStyle: {
        paddingVertical: 20,
        alignItems:'center'
    },
    legendsView:{
        marginTop: 20,
        backgroundColor: Config.lineColor,
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonView: {
        alignItems:'center'
    },
    contactButton: {
        borderColor: Config.commonColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        paddingHorizontal: 45,
        paddingVertical: 10,
    },
    contactText: {
        color: Config.commonColor,
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center'
    },
    userImageStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        paddingRight: 30
    },
    userTitleStyle: {
        flexDirection: 'column',
        paddingLeft: 20,
        justifyContent: 'center'
    },
    summaryStyle: {
        flexDirection: 'row',
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    summaryDetailStyle: {
        flex: 1
    },
    buttonStyle: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Config.primaryColor,
        borderRadius: 20
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
)(Portfolio);