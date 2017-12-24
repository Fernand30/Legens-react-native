import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity, DatePickerAndroid } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';

class Legends extends Component {
    static navigationOptions = {
        title: 'Legends Lair'
    };

    constructor(props) {
        super(props);

        this.state = {

        };

        this.root = this.props.component.root;
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.qrWrapperStyle}>
                    <Image source={require('../../images/other/rect_scanner.png')}
                        style={{
                            height: 250,
                            width: 300,
                            resizeMode: 'stretch',
                            backgroundColor: '#fff'
                        }} />
                </View>
                <TouchableOpacity style={styles.buttonFullBackgroundStyle} onPress={() => { }}>
                    <Text style={{ color: '#fff' }}>CHANGE SEAT</Text>
                </TouchableOpacity>
                <View style={{ height: 10 }} />
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.moneyTabStyle}>
                        <Text style={{ color: '#ccc' }}>MONEY SPEND</Text>
                        <Text style={{ color: Config.primaryColor, fontSize: 25, fontWeight: 'bold' }}>
                            3105 ¥
                        </Text>
                    </View>
                    <View style={{ width: 1, backgroundColor: Config.lineColor, height: 80 }} />
                    <View style={styles.moneyTabStyle}>
                        <Text style={{ color: '#ccc' }}>TIME SPEND</Text>
                        <Text style={{ color: Config.primaryColor, fontSize: 25, fontWeight: 'bold' }}>
                            30 MIN
                        </Text>
                    </View>
                </View>
                <View style={{ height: 10 }} />
                <TouchableOpacity style={styles.buttonOutlineBackgroundStyle} onPress={() => { }}>
                    <Text style={{ color: '#f26c4f' }}>STOP</Text>
                </TouchableOpacity>
                <View style={{ height: 10 }} />
                <TouchableOpacity style={styles.buttonFullBackgroundStyle} onPress={() => { }}>
                    <Text style={{ color: '#fff' }}>XENREN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    qrWrapperStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonFullBackgroundStyle: {
        backgroundColor: Config.primaryColor,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 10
    },
    buttonOutlineBackgroundStyle: {
        borderColor: '#f26c4f',
        borderWidth: 2,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    moneyTabStyle: {
        flex: 1,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        flexDirection: 'column'
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
)(Legends);