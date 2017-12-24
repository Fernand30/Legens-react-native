import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import Swiper from 'react-native-swiper';
import Config from '../Config';

class Intro extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props){
        super(props);

        this.root = this.props.component.root;
    }

    gotoSignUp() {
        this.root.gotoSignUp();
    }

    gotoLogin() {
        this.root.gotoLogin();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: 480 }}>
                    <Swiper
                        height={380}
                        style={styles.wrapper}
                        showsButtons={false}
                        paginationStyle={styles.paginationStyle}
                        renderPagination={(index, total, context) => {
                            let arr = [];
                            for (let i = 0; i < total; i++) {
                                if (index == i) {
                                    arr.push(<View key={i} style={{ height: 8, width: 8, backgroundColor: '#57af2a', borderRadius: 4, marginHorizontal: 5 }} />);
                                } else {
                                    arr.push(<View key={i} style={{ height: 8, width: 8, backgroundColor: '#a9aba8', borderRadius: 4, marginHorizontal: 5 }} />);
                                }
                            }
                            return (
                                <View style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    position: 'absolute',
                                    bottom: 0,
                                    alignSelf: 'center'
                                }}>
                                    <View style={{ height: 1, width: 40, backgroundColor: '#57af2a', marginHorizontal: 5 }} />
                                    {arr}
                                    <View style={{ height: 1, width: 40, backgroundColor: '#57af2a', marginHorizontal: 5 }} />
                                </View>
                            );
                        }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 450 }}>
                            <Image source={require('../../images/intro/text_top_1_1.png')} style={{ height: 35 }} resizeMode='contain' />
                            <View style={{ height: 30 }} />
                            <Image source={require('../../images/intro/text_top_1_2.png')} style={{ height: 40 }} resizeMode='contain' />
                            <View style={{ height: 30 }} />
                            <View style={styles.bigImageWrapperStyle}>
                                <Image source={require('../../images/intro/center.jpg')} style={{
                                    height: 280, width: 280, borderRadius: 140,
                                }} resizeMode='cover' />
                                <View style={styles.smallImageWrapperStyle}>
                                    <Image source={require('../../images/intro/sync.png')} style={{ height: 48, width: 48 }} resizeMode='contain' />
                                    <Image source={require('../../images/intro/users.png')} style={{ height: 55, width: 55, position: 'absolute', top: 8 }} resizeMode='contain' />
                                </View>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 450 }}>
                            <Image source={require('../../images/intro/text_top_2_1.png')} style={{ height: 35 }} resizeMode='contain' />
                            <View style={{ height: 30 }} />
                            <Image source={require('../../images/intro/text_top_2_2.png')} style={{ height: 40 }} resizeMode='contain' />
                            <View style={{ height: 30 }} />
                            <View style={styles.bigImageWrapperStyle}>
                                <Image source={require('../../images/intro/center_2.jpg')} style={{
                                    height: 280, width: 280, borderRadius: 140,
                                }} resizeMode='cover' />
                                <View style={styles.smallImageWrapperStyle}>
                                    <Image source={require('../../images/intro/small_2_1.png')} style={{ height: 48, width: 48, position: 'absolute', top: 8, left: 8 }} resizeMode='contain' />
                                    <Image source={require('../../images/intro/small_2_2.png')} style={{ height: 23, width: 23, position: 'absolute', top: 35, left: 35, tintColor: Config.primaryColor }} resizeMode='contain' />
                                </View>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 450 }}>
                            <Image source={require('../../images/intro/text_top_3_1.png')} style={{ height: 35 }} resizeMode='contain' />
                            <View style={{ height: 30 }} />
                            <Image source={require('../../images/intro/text_top_3_2.png')} style={{ height: 40 }} resizeMode='contain' />
                            <View style={{ height: 30 }} />
                            <View style={styles.bigImageWrapperStyle}>
                                <Image source={require('../../images/intro/center_3.jpg')} style={{
                                    height: 280, width: 280, borderRadius: 140,
                                }} resizeMode='cover' />
                                <View style={styles.smallImageWrapperStyle}>
                                    <Image source={require('../../images/intro/small_3_1.png')} style={{ height: 45, width: 45 }} resizeMode='contain' />
                                    <Image source={require('../../images/intro/small_3_2.png')} style={{ height: 25, width: 25, position: 'absolute', top: 18, tintColor: Config.primaryColor }} resizeMode='contain' />
                                </View>
                            </View>
                        </View>
                    </Swiper>
                </View>
                <View style={{ height: 30 }} />
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { this.gotoSignUp() }}
                        style={{ backgroundColor: '#57af2a', height: 45, width: 150, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../images/intro/text_signup.png')} style={{ height: 15 }} resizeMode='contain' />
                    </TouchableOpacity>
                    <View style={{ width: 30 }} />
                    <TouchableOpacity onPress={() => { this.gotoLogin() }}
                        style={{ backgroundColor: '#f7f7f7', height: 45, width: 150, borderColor: '#57af2a', borderWidth: 2, alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../images/intro/text_login.png')} style={{ height: 15 }} resizeMode='contain' />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 30 }} />
                <View style={{ alignItems: 'center' }}>
                    <Image source={require('../../images/intro/text_term_2.png')} style={{ height: 10 }} resizeMode='contain' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#f7f7f7',
    },
    wrapper: {

    },
    bigImageWrapperStyle: {
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 5,
        shadowOffset: {
            height: 1,
            width: 1
        },
        height: 280, width: 280,
        borderRadius: 140,
    },
    smallImageWrapperStyle: {
        backgroundColor: '#fff', width: 70, height: 70,
        borderRadius: 35, position: 'relative', top: -275, left: 200,
        justifyContent: 'center', alignItems: 'center',
    },



    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

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
)(Intro);