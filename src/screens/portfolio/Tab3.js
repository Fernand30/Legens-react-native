import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AvatarWithStatus from '../../components/AvatarWithStatus';
import Config from '../../Config';

class Tab3 extends Component {
    static navigationOptions = {
        title: '官方评价',
    };

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    renderStar(count) {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            if (i < count) {
                arr.push(<Ionicons name='md-star' size={20} color='#f1c40f' />);
            } else {
                arr.push(<Ionicons name='md-star' size={20} color='#bdc3c7' />);
            }
        }
        return arr;
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.headerStyle}>
                    <AvatarWithStatus source={require('../../../images/dummy/user_2.png')}
                        diameter={60} showIndicator={false} />
                    <View style={styles.userTitleStyle}>
                        <Text style={{ fontSize: 16, marginBottom: 5 }}>神人官方</Text>
                        <Text style={{ fontSize: 14, color: '#979797' }}>发布于三天前</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {this.renderStar(4)}
                    </View>
                </View>
                <View style={styles.reviewStyle}>
                    <Text style={{ fontSize: 15, color: '#979797' }}>这是一次成功的合作，疾风小怪兽很完美地实现了我们的需求，而且注释清晰，方便了前端工程师的搭建，他是为出色的设计师。</Text>
                </View>
                <View style={styles.headerStyle}>
                    <AvatarWithStatus source={require('../../../images/dummy/user_3.png')}
                        diameter={60} showIndicator={false} />
                    <View style={styles.userTitleStyle}>
                        <Text style={{ fontSize: 16, marginBottom: 5 }}>神人官方</Text>
                        <Text style={{ fontSize: 14, color: '#979797' }}>发布于三天前</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        {this.renderStar(4)}
                    </View>
                </View>
                <View style={styles.reviewStyle}>
                    <Text style={{ fontSize: 15, color: '#979797' }}>这是一次成功的合作，疾风小怪兽很完美地实现了我们的需求，而且注释清晰，方便了前端工程师的搭建，他是为出色的设计师。</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flex: 1,
    },
    headerStyle: {
        paddingTop: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImageStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        paddingRight: 30
    },
    userTitleStyle: {
        flexDirection: 'column',
        flex: 1,
        paddingLeft: 20,
        justifyContent: 'center'
    },
    reviewStyle: {
        paddingLeft: 85,
        marginLeft: 5,
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
)(Tab3);