import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../../Config';

class Tab1 extends Component {
    static navigationOptions = {
        title: 'Platform Review'
    };

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.rowStyle}>
                    <Text style={styles.labelStyle}>职位</Text>
                    <Text style={styles.descriptionStyle}>全栈工程师</Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.labelStyle}>公司</Text>
                    <Text style={styles.descriptionStyle}>腾讯</Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.labelStyle}>技能</Text>
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                        <View style={styles.skillStyle}>
                            <Text>Javascript</Text>
                        </View>
                        <View style={styles.skillStyle}>
                            <Text>CSS</Text>
                        </View>
                        <View style={styles.skillStyle}>
                            <Text>HTML</Text>
                        </View>
                        <View style={styles.skillStyle}>
                            <Text>C++</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.labelStyle}>语言</Text>
                    <Text style={styles.descriptionStyle}>中文</Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.labelStyle}>地址</Text>
                    <Text style={styles.descriptionStyle}>广东深圳</Text>
                </View>
                <View style={styles.rowStyle}>
                    <Text style={styles.labelStyle}>邮箱</Text>
                    <Text style={styles.descriptionStyle}>401871194@qq.com</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    rowStyle: {
        flexDirection: 'row',
        paddingVertical: 10
    },
    labelStyle: {
        fontSize: 16,
        width: 60,
        color: Config.textColor,
    },
    descriptionStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
    },
    skillStyle: {
        backgroundColor: Config.lineColor,
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10,
        marginRight:5
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
)(Tab1);