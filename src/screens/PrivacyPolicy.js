import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Config from '../Config';

class PrivacyPolicy extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.rootStyle}>
                <View style={styles.headerStyle}>
                    <Text style={styles.headerTextStyle}>Privacy Policy</Text>
                </View>
                <View style={{ height: 10 }} />
                <ScrollView style={styles.scrollviewStyle}>
                    <Text style={styles.h1Style}>Our Policy:</Text>
                    <Text style={styles.pStyle}>
                        Welcome to the Legends Lair website (the “Site”). Legends Lair LLC (”Legends Lair”, “we”, “us”, and/or “our”) operates this Site to provide our users (“you” and “your”) with information about Legends Lair and its platform, which is designed to find and connect professional freelancers with Legends Lair’s clients who need their services (the “Services”). This Privacy Policy sets out how Legends Lair collects, retains, and uses information, including personally identifiable data (“Personal Data”), from you and other Site visitors, as well as users of the Services.
                    </Text>
                    <Text style={styles.h1Style}>Information We Collect:</Text>
                    <Text style={styles.pStyle}>
                        When you interact with us through the Site or the Services, we may collect Personal Data and other information from you, as further described below:
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="circle" size={10} color={Config.textColor} />
                        <Text style={[styles.h1Style, { flex: 1, marginLeft: 5 }]}>Personal Data That You Provide Through the Site:</Text>
                    </View>
                    <View style={styles.listContentStyle}>
                        <Text style={styles.pStyle}>
                            We collect Personal Data from you when you voluntarily provide such information such as when you register for access to the Services (for example, your name and mailing address), use certain Services, contact us with inquiries or respond to one of our surveys. Wherever Legends Lair collects Personal Data we make an effort to provide a link to this Privacy Policy.
                        </Text>
                        <Text style={styles.pStyle}>
                            By voluntarily providing us with Personal Data, you are consenting to our use of it in accordance with this Privacy Policy. If you provide Personal Data, you acknowledge and agree that such Personal Data may be transferred from your current location to the offices and servers of Legends Lair and the authorized third parties referred to herein located in the United States.
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome name="circle" size={10} color={Config.textColor} />
                        <Text style={[styles.h1Style, { flex: 1, marginLeft: 5 }]}>
                            Non-Identifiable or Aggregated Data:
                        </Text>
                    </View>
                    <View style={styles.listContentStyle}>
                        <Text style={styles.pStyle}>
                            When you interact with Legends Lair through the Site or Services, we receive and store certain personally non-identifiable information. Such information, which is collected passively using various technologies, cannot presently be used to specifically identify you. Legends Lair may store such information itself or such information may be included in databases owned and maintained by Legends Lair affiliates, agents or service providers. This Site may use such information and pool it with other information to track, for example, the total number of visitors to our Site, the number of visitors to each page of our Site, the domain names of our visitors' Internet service providers, and how our users use and interact with the Services. Also, in an ongoing effort to better understand and serve the users of the Services, Legends Lair often conducts research on its customer demographics, interests and behavior based on the Personal Data and other information provided to us. This research may be compiled and analyzed on an aggregate basis. Legends Lair may share this non-identifiable and aggregate data with its affiliates, agents and business partners, but this type of non-identifiable and aggregate information does not identify you personally. Legends Lair may also disclose aggregated user statistics in order to describe our Services to current and prospective business partners, and to other third parties for other lawful purposes.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerTextStyle: {
        color: Config.textColor,
        fontSize: 35,
        fontWeight: 'bold'
    },
    scrollviewStyle: {
        flex: 1,
        paddingHorizontal: 40
    },
    h1Style: {
        fontSize: 14,
        color: Config.textColor,
        fontWeight: 'bold'
    },
    pStyle: {
        fontSize: 12,
        color: Config.textColor,
        marginBottom: 10
    },
    listStyle: {
        fontSize: 14,
        color: Config.textColor,
        fontWeight: 'bold'
    },
    listContentStyle: {
        marginLeft: 5,
        paddingLeft: 10,
        borderLeftWidth: 1,
        borderLeftColor: Config.textColor
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
)(PrivacyPolicy);