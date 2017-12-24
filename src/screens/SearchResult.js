import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Image, Text, View, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import _ from 'lodash';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';


class SearchResult extends Component {
    static navigationOptions = {
        title: 'Search Result'
    };

    constructor(props) {
        super(props);

        let searchResult = [
            {
                id: 1301, name: 'Really Long Long Name Using Very Long Name On Earth', job: 'Designer', status: 'LOOKING FOR PROJECT', star: 5,
                avatar: require('../../images/share_office/user_dummy.png'),
                skills: [
                    { id: 'PHP', level: 3 },
                    { id: 'Javascript', level: 2 },
                    { id: 'HTML', level: 1 },
                ]
            },
            {
                id: 1301, name: 'John Doe', job: 'Designer', status: 'LOOKING FOR PROJECT', star: 3,
                avatar: require('../../images/member_list/member_1.png'),
                skills: [
                    { id: 'PHP', level: 3 },
                    { id: 'Javascript', level: 2 },
                    { id: 'HTML', level: 1 },
                ]
            },
            {
                id: 1301, name: 'Good People', job: 'Designer', status: 'LOOKING FOR PROJECT', star: 2,
                avatar: require('../../images/share_office/user_dummy.png'),
                skills: [
                    { id: 'PHP', level: 3 },
                    { id: 'Javascript', level: 2 },
                    { id: 'HTML', level: 1 },
                ]
            },
            {
                id: 1301, name: 'Adam John', job: 'Designer', status: 'LOOKING FOR PROJECT', star: 4,
                avatar: require('../../images/member_list/member_1.png'),
                skills: [
                    { id: 'PHP', level: 3 },
                    { id: 'Javascript', level: 2 },
                    { id: 'HTML', level: 1 },
                ]
            }
        ];

        this.state = {
            searchResult: searchResult,
            searchResultDS: this.convertToDataSource(searchResult),
            levels: [
                { level: 3, icon: require('../../images/share_office/icon_crown.png'), backgroundColor: '#f1c40f', textColor: '#fff' },
                { level: 2, icon: require('../../images/share_office/icon_check.png'), backgroundColor: Config.primaryColor, textColor: '#fff' },
                { level: 1, icon: require('../../images/share_office/icon_check.png'), backgroundColor: '#ecf0f1', textColor: '#000' },
            ]
        };
    }

    convertToDataSource(array) {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return ds.cloneWithRows(array);
    }

    checkPortfolio(){
        this.props.navigation.navigate('Portfolio');
    }

    sendChat() {
        this.props.navigation.navigate('ChatSingle');
    }

    renderStar(jumlah) {
        let array = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= jumlah) {
                array.push(<Ionicons key={'star_' + i} name='md-star' color='#f1c40f' size={15} />);
            } else {
                array.push(<Ionicons key={'star_' + i} name='md-star' color='#7f8c8d' size={15} />);
            }
        }
        return (<View style={styles.starStyle}>{array}</View>);
    }

    renderSkill(skills) {
        return skills.map((item) => {
            let skill = _.find(this.state.levels, { level: item.level });
            console.log('Skill', skill);
            if (skill == null) {
                return null;
            } else {
                return (
                    <View style={{
                        backgroundColor: skill.backgroundColor, borderRadius: 15,
                        borderColor: '#fff', borderWidth: 1,
                        flexDirection: 'row', alignItems: 'center',
                        marginRight: 5,
                        padding: 3
                    }}>
                        <View style={{
                            width: 24, height: 24,
                            borderRadius: 12, borderColor: '#fff', borderWidth: 1,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Image style={{ height: 13, width: 13, resizeMode: 'contain', tintColor: skill.textColor }} source={skill.icon} />
                        </View>
                        <Text style={{ paddingHorizontal: 10, color: skill.textColor, backgroundColor: 'transparent' }}>{item.id}</Text>
                    </View>
                );
            }
        });
    }

    renderRow(item) {
        return (
            <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
                <View style={styles.boxInsideStyle}>
                    <View style={styles.topSideStyle}>
                        <Image source={item.avatar} style={styles.avatarStyle} />
                        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text ellipsizeMode='tail' numberOfLines={1} style={styles.text1Style}>{item.name}</Text>
                                {this.renderStar(item.star)}
                            </View>
                            <Text style={styles.text2Style}>{item.job}</Text>
                            <Text style={styles.text3Style}>{item.status}</Text>
                        </View>
                    </View>
                    <View style={styles.middleSideStyle}>
                        {this.renderSkill(item.skills)}
                    </View>
                    <View style={{ flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10 }}>
                        <TouchableOpacity style={styles.cardButtonStyle} onPress={() => { this.checkPortfolio(); }}>
                            <Ionicons name='ios-folder-open' color={Config.textSecondaryColor} size={15} />
                            <Text style={styles.cardButtonTextStyle}>  PORTFOLIO</Text>
                        </TouchableOpacity>
                        <View style={{ width: 1, backgroundColor: Config.textSecondaryColor }} />
                        <TouchableOpacity style={styles.cardButtonStyle} onPress={() => { this.sendChat(); }}>
                            <Ionicons name='ios-mail' color={Config.textSecondaryColor} size={15} />
                            <Text style={styles.cardButtonTextStyle}>  CHECK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <ListView
                    style={{ flex: 1 }}
                    dataSource={this.state.searchResultDS}
                    renderRow={(rowData) => { return this.renderRow(rowData) }}
                />
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#ecf0f1'
    },
    boxInsideStyle: {
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    topSideStyle: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingTop: 10
    },
    middleSideStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 10,
    },
    avatarStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    cardButtonStyle: {
        flex: 1,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    cardButtonTextStyle: {
        color: Config.textSecondaryColor,
        fontSize: 12
    },

    text1Style: {
        flex: 1,
        fontSize: 16
    },
    text2Style: {
        fontSize: 13,
        color: '#bdc3c7'
    },
    text3Style: {
        marginVertical: 5,
        fontSize: 13,
        fontWeight: 'bold',
        color: Config.primaryColor
    },

    starStyle: {
        flexDirection: 'row'
    }
};

function mapStateToProps(state) {
    return {
        component: state.component,
    }
}

export default connect(
    mapStateToProps
)(SearchResult);