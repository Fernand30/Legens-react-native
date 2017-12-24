import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Config from '../Config';

class TermOfService extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.headerStyle}>
                    <Text style={styles.headerTextStyle}>Term Of Services</Text>
                </View>
                <View style={{ height: 10 }} />
                <ScrollView style={styles.scrollviewStyle}>
                    <Text style={styles.h1Style}>Legends Lair Website.</Text>
                    <Text style={styles.pStyle}>
                        These Website Terms &amp; Conditions (“T&amp;Cs”) apply to your access and use of www.lgdlair.com (the “Site”), including all software, data, reports, text, images, sounds, video, and content made available through any portion of the Site (collectively, the “Content”). Content includes all such elements as a whole, as well as individual elements and portions thereof.
                    </Text>
                    <Text style={styles.h1Style}>Acceptance of Terms.</Text>
                    <Text style={styles.pStyle}>
                        Legends Lair permits you (“User” or “you” or “your”) to access and use the Site and Content, subject to these T&amp;Cs. By by accessing or using any portion of the Site, you acknowledge that you have read, understood, and agree to be bound by these T&amp;Cs. If you are entering into these T&amp;Cs on behalf of a company or other legal entity (“User Entity”), you must have the legal authority to contractually bind such User Entity to these T&amp;Cs, in which case the terms “you” or “your” or “User” will refer to such User Entity. If you lack such legal authority to contractually bind or you do not agree with these T&amp;Cs, you must not accept these T&amp;Cs or access or use the site or content.
                    </Text>
                    <Text style={styles.h1Style}>T&amp;Cs Updates.</Text>
                    <Text style={styles.pStyle}>
                    Legends Lair reserves the right, at its sole discretion, to change or modify portions of these T&amp;Cs at any time. Legends Lair will post the changes to these T&amp;Cs on the Site and will indicate at the top of this page the date these terms were last revised. It is your responsibility to check the T&amp;Cs periodically for changes. Your continued use of the Site and Content after the date any such changes become effective constitutes your acceptance of the new or revised T&amp;Cs.
                    </Text>
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
)(TermOfService);