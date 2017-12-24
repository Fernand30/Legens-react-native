import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';
import Tab1 from './profile/Tab1';
import Tab2 from './profile/Tab2';

class EditProfile extends Component {
    static navigationOptions = {
        title: 'Edit Profile'
    };

    constructor(props) {
        super(props);

        this.state = {
            activeTabIndex: 0
        };

        this.root = this.props.component.root;
    }

    logout() {
        this.root.setToken(null);
        this.root.changePage('login');
    }

    renderLogoutButton() {
        return (
            <TouchableOpacity style={{
                height: 40, backgroundColor: Config.primaryColor,
                justifyContent: 'center', alignItems: 'center'
            }} onPress={() => { this.logout(); }}>
                <Text style={{ color: '#fff' }}>Logout</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.topButtonWrapperStyle}>
                    <TouchableOpacity onPress={() => { this.setState({ activeTabIndex: 0 }) }}
                        style={[styles.topButtonStyle, this.state.activeTabIndex == 0 ? styles.topButtonActiveStyle : {}]}>
                        <Text style={this.state.activeTabIndex == 0 ? styles.topTextActiveStyle : {}}>Information</Text>
                    </TouchableOpacity>
                    <View style={{ width: 1, height: 50, backgroundColor: '#ecf0f1' }} />
                    <TouchableOpacity onPress={() => { this.setState({ activeTabIndex: 1 }) }}
                        style={[styles.topButtonStyle, this.state.activeTabIndex == 1 ? styles.topButtonActiveStyle : {}]}>
                        <Text style={this.state.activeTabIndex == 1 ? styles.topTextActiveStyle : {}}>Photo</Text>
                    </TouchableOpacity>
                </View>
                {this.state.activeTabIndex == 0 && <Tab1 />}
                {this.state.activeTabIndex == 1 && <Tab2 />}
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
    },
    topButtonWrapperStyle: {
        flexDirection: 'row',
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
    },
    topButtonStyle: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ecf0f1',
        borderBottomWidth: 2,
    },

    topButtonActiveStyle: {
        borderBottomColor: Config.primaryColor,
        borderBottomWidth: 2,
    },

    topTextActiveStyle: {
        color: Config.primaryColor
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
)(EditProfile);