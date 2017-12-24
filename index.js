'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import component from './src/reducers/component';

import Root from './src/Root';
import ForgotPassword from './src/screens/ForgotPassword';
import Portfolio from './src/screens/Portfolio';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import TermOfService from './src/screens/TermOfService';
import TimeTracking from './src/screens/TimeTracking';
import MemberList from './src/screens/MemberList';
import ChatSingle from './src/screens/ChatSingle';
import Complain from './src/screens/Complain';
import ContactManagement from './src/screens/ContactManagement';
import SearchResult from './src/screens/SearchResult';
import Detail from './src/screens/Detail';
import Menu from './src/screens/Menu';
import Confirmation from './src/screens/Confirmation';
import EditProfile from './src/screens/EditProfile';
import TransactionHistory from './src/screens/TransactionHistory';
import TransactionHistoryDetail from './src/screens/TransactionHistoryDetail';
import Balance from './src/screens/Balance';
import Legends from './src/screens/Legends';
import QrcodeResult from './src/screens/QrcodeResult';

console.disableYellowBox = true;

//React Navigation
const initModule = 'Root';
const AppNavigator = StackNavigator({
	Root: { screen: Root },
	Confirmation: { screen: Confirmation },
	Portfolio: { screen: Portfolio },
	Menu: { screen: Menu },
	Detail: { screen: Detail },
	Complain: { screen: Complain },
	ContactManagement: { screen: ContactManagement },
	SearchResult: { screen: SearchResult },
	ChatSingle: { screen: ChatSingle },
	MemberList: { screen: MemberList },
	TimeTracking: { screen: TimeTracking },
	TermOfService: { screen: TermOfService },
	PrivacyPolicy: { screen: PrivacyPolicy },
	ForgotPassword: { screen: ForgotPassword },
	EditProfile: { screen: EditProfile },
	TransactionHistory: { screen: TransactionHistory },
	TransactionHistoryDetail: { screen: TransactionHistoryDetail },
	Balance: { screen: Balance },
	Legends: { screen: Legends },
	QrcodeResult: { screen: QrcodeResult },
});

//Redux vs React Navigation
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams(initModule));
const navReducer = (state = initialState, action) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

//Declaring Reducers
const appReducer = combineReducers({
	nav: navReducer,
	component: component,
});

//Wrapping Navigator inside React Component
class AppWrapper extends React.Component {
	render() {
		return (
			<AppNavigator navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav,
			})} />
		);
	}
}

const mapStateToProps = (state) => ({
	nav: state.nav
});

//Connect React Component to Redux
const AppWithNavigationState = connect(mapStateToProps)(AppWrapper);

const store = createStore(appReducer);

//Declare that AppWithNavigationState is Controlled by redux
export default class AppWithNavigationStateAndRedux extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}

AppRegistry.registerComponent('PsdToReactNative', () => AppWithNavigationStateAndRedux);