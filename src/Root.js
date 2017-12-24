import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from './Config';
import LocalData from './components/LocalData';
import Application from './screens/Application';
import Intro from './screens/Intro';
import SignUp from './screens/SignUp';
import Login from './screens/Login';

class Root extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.props.setRoot(this);

        this.state = {
            page: 'loading',
        };
    }

    componentDidMount() {
        //load token
        LocalData.getUserData().then((response) => {
            console.log('Response', response);
            if (response == null) {
                this.setState({ page: 'intro' });
            } else {
                let json = JSON.parse(response);
                if (json.token == null) {
                    this.setState({ page: 'login' });
                } else {
                    this.setState({ page: 'menu' });
                }
            }
        });
    }

    gotoLogin() {
        this.setState({ page: 'login' });
    }

    gotoSignUp() {
        this.setState({ page: 'signup' });
    }

    gotoMenu() {
        this.setState({ page: 'menu' });
    }

    navigate(screen, data = null) {
        this.props.navigation.navigate(screen, data);
    }

    changePage(page) {
        this.setState({ page });
    }

    setToken(token) {
        console.log('Save Token')
        LocalData.setUserData({ token: token });
    }

    render() {
        let view = null;
        if (this.state.page == 'menu') {
            view = <Application />;
        } else if (this.state.page == 'intro') {
            view = <Intro />;
        } else if (this.state.page == 'signup') {
            view = <SignUp />;
        } else if (this.state.page == 'login') {
            view = <Login />;
        } else {
            view = (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return view;
    }
}

const styles = {

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
)(Root);