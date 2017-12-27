import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import _ from 'lodash';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../../Config';

//android only
import KeyEvent from 'react-native-keyevent';

class ShareOffice extends Component {
    constructor(props) {
        super(props);

        this.root = this.props.component.root;

        this.state = {
            showAutocomplete: true,
            autocompleteText: '',
            autocompletePosition: {
                x: 0, y: -200, width: 100
            },
            buttons: [
                {
                    image: require('../../../images/share_office/icon_mid_1.png'),
                    label: 'Find Project'
                },
                {
                    image: require('../../../images/share_office/icon_mid_2.png'),
                    label: 'Find Freelancer'
                },
                {
                    image: require('../../../images/share_office/icon_mid_3.png'),
                    label: 'Find Co-Founder'
                }
            ],
            selectedButton: 0,
            skills: [
                { skill: 'Html', description: 'HyperText Markup Language, basic building block of the Web' },
                { skill: 'Css', description: 'Website front end language, Css3 Canvas' },
                { skill: 'Javascript', description: 'Programming language of HTML' },
                { skill: 'SEO', description: 'Baidu, Google, Search Engine Optimization' },
                { skill: 'Sketch', description: 'Drawing Software' },
                { skill: 'Adobe Photoshop', description: 'Drawing Software' },
                { skill: 'React Native', description: 'React Native' },
                { skill: 'ReactJS', description: 'ReactJS' },
                { skill: 'Adobe Flash', description: 'Adobe Flash' },
                { skill: 'Swift', description: 'Swift' },
                { skill: 'Android', description: 'Android' },
                { skill: 'C++', description: 'C++ Development' },
                { skill: 'VB.NET', description: 'Visual Basic dot NET' },
            ],
            filteredSkills: [],
            selectedSkills: [],
        };
    }

    componentDidMount() {
        //remove last selectedSkills
        KeyEvent.onKeyDownListener((keyCode) => {
            if (keyCode == 67 && this.state.autocompleteText == '') {
                let selectedSkills = this.state.selectedSkills;
                if (selectedSkills.length != 0) {
                    selectedSkills.splice(selectedSkills.length - 1, 1);
                    this.setState({ selectedSkills });
                }
            }
        });
    }

    componentWillUnmount() {
        // if you are listening to keyDown
        KeyEvent.removeKeyDownListener();
    }

    highlight(string) {
        return string;
        /*
        let toSearch = this.state.autocompleteText;
        let output = [];
        if (toSearch != '') {
            if (string.indexOf(toSearch) != -1) {
                let arr = string.split(toSearch);
                arr.forEach((item, index) => {
                    output.push(<Text key={item + index}>{item}</Text>);
                    output.push(<Text key={toSearch + index} style={{ backgroundColor: '#ff0' }}>{toSearch}</Text>);
                });
                output.splice(output.length - 1, 1);
            } else {
                output = string;
            }
        } else {
            output = string;
        }
        return output;
        */
    }

    filter(teks) {
        let pattern = new RegExp(teks, 'i');
        let filteredSkills = _.filter(this.state.skills, (item) => {
            if (item.skill.search(pattern) != -1 || item.description.search(pattern) != -1) {
                return item;
            }
        });

        filteredSkills = _.slice(filteredSkills, 0, 10);

        this.setState({ filteredSkills });
    }

    selectSkill(item) {
        let selectedSkills = this.state.selectedSkills;
        selectedSkills.push(item);
        this.setState({
            selectedSkills,
            autocompleteText: ''
        });
    }

    removeSelectedSkills(item) {
        let selectedSkills = this.state.selectedSkills;
        let filteredSelectedSkills = [];
        selectedSkills.forEach((item2) => {
            if (item2.skill != item.skill) {
                filteredSelectedSkills.push(item2);
            }
        });
        this.setState({ selectedSkills: filteredSelectedSkills });
    }

    showSearchResult() {
        this.root.navigate('SearchResult', {title: 'Experts With Contain Skill'});
    }

    onQrDetected() {
        this.root.navigate('QrcodeResult');
    }

    render() {
        let searchResult = null;
        if (this.state.autocompleteText != '') {
            searchResult = (
                <View style={[styles.searchBoxStyle, {
                    top: this.state.autocompletePosition.y,
                    left: this.state.autocompletePosition.x,
                    width: this.state.autocompletePosition.width,
                }]}>
                    {
                        this.state.filteredSkills.map((item, index) => {
                            let style = {
                                flex: 1, width: '100%', flexDirection: 'row',
                                paddingHorizontal: 2, paddingVertical: 5,
                            };
                            if (index != 0) {
                                style.borderTopColor = '#eee';
                                style.borderTopWidth = 1;
                            }
                            return (
                                <TouchableOpacity key={index} style={style} onPress={() => { this.selectSkill(item) }}>
                                    <Text ellipsizeMode='tail' numberOfLines={1}>
                                        <Text style={{ fontWeight: 'bold' }}>{this.highlight(item.skill)}</Text>
                                        <Text>{` | `}</Text>
                                        {this.highlight(item.description)}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })
                    }
                </View>
            );
        }

        let selectedSkillsElement = this.state.selectedSkills.map((item) => {
            return (
                <TouchableOpacity style={styles.tagInput} onPress={() => { this.removeSelectedSkills(item) }}>
                    <Text style={{ color: '#fff' }}>{item.skill}   x</Text>
                </TouchableOpacity>
            );
        });

        let buttons = this.state.buttons.map((item, index) => {
            if (this.state.selectedButton == index) {
                return (
                    <TouchableOpacity key={'btn_' + index} style={styles.middleItemStyle}
                        onPress={() => { this.setState({ selectedButton: index }) }}>
                        <Image source={require('../../../images/share_office/selected_tab.png')}
                            style={{
                                height: 15, width: 30,
                                tintColor: Config.primaryColor
                            }}
                            resizeMode='stretch' />
                        <View style={{
                            width: '100%', height: 80,
                            justifyContent: 'center', alignItems: 'center',
                            backgroundColor: Config.primaryColor
                        }}>
                            <Image source={item.image}
                                style={{ height: 30, width: 30 }}
                                resizeMode='contain' />
                            <Text style={{ color: '#fff', fontSize: 12, marginTop: 10 }}>
                                {item.label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            } else {
                return (
                    <TouchableOpacity key={'btn_' + index} style={styles.middleItemStyle}
                        onPress={() => { this.setState({ selectedButton: index }) }}>
                        <View style={{
                            backgroundColor: 'red', width: '100%', height: 80,
                            justifyContent: 'center', alignItems: 'center',
                            backgroundColor: '#2e404e'
                        }}>
                            <Image source={item.image}
                                style={{ height: 30, width: 30 }}
                                resizeMode='contain' />
                            <Text style={{ color: '#fff', fontSize: 12, marginTop: 10 }}>
                                {item.label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            }
        });

        return (
            <View style={styles.rootStyle}>
                <View style={styles.topStyle}>
                    <Image source={require('../../../images/share_office/bg_top.jpg')}
                        style={{ height: '100%', width: '100%', position: 'absolute', top: 0 }} resizeMode='cover' />
                    <View style={styles.topContainerStyle}>
                        <Image source={require('../../../images/share_office/icon_xenren_top.png')}
                            style={{ height: 80, width: 80 }} resizeMode='cover' />
                        <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>LEGENDS LAIR</Text>
                        <Text style={{ color: '#7fb045', fontSize: 10, fontWeight: 'bold' }}>HALL OF TALENT</Text>
                        <View style={styles.searchBoxWrapperStyle}
                            ref='SearchInput'
                            onLayout={({ nativeEvent }) => {
                                this.refs.SearchInput.measure((x, y, width, height, pageX, pageY) => {
                                    console.log(x, y, width, height, pageX, pageY);
                                    this.setState({
                                        autocompletePosition: {
                                            x: pageX, y: pageY - 35, width
                                        }
                                    })
                                })
                            }}>
                            {selectedSkillsElement}
                            <TextInput style={styles.inputStyle}
                                placeholder='Search..'
                                autoCapitalize='none'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                onFocus={() => { this.setState({ showAutocomplete: true }) }}
                                onBlur={() => { this.setState({ showAutocomplete: false }) }}
                                onChangeText={(autocompleteText) => {
                                    this.setState({ autocompleteText });
                                    this.filter(autocompleteText);
                                }}
                                value={this.state.autocompleteText} />
                            <TouchableOpacity style={styles.searchButtonStyle} onPress={() => { this.showSearchResult(); }}>
                                <Ionicons name='ios-search' color={Config.primaryColor} size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.middleStyle}>
                    {buttons}
                </View>
                <View style={styles.bottomStyle}>

                    <TouchableOpacity style={{
                        height: '100%', width: '100%', position: 'absolute', top: 0, opacity: 0.9,
                        justifyContent: 'center', alignItems: 'center',
                        flexDirection: 'column'
                    }} onPress={() => { this.onQrDetected(); }}>
                        <Image source={require('../../../images/other/home_search_background.jpg')}
                            style={{ height: '100%', width: '100%', position: 'absolute', top: 0 }}
                            resizeMode='cover' />
                        <Image source={require('../../../images/other/home_search_icon.png')}
                            style={{ height: 50, width: 50 }}
                            resizeMode='contain' />
                        <Text style={{ color: '#fff', backgroundColor: 'transparent' }}>Scan QR Code to use Share Office</Text>
                    </TouchableOpacity>
                </View>
                {searchResult}
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
    topStyle: {
        flex: 3,
        flexDirection: 'column',
        marginBottom: -15
    },
    middleStyle: {
        height: 95,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    middleItemStyle: {
        flex: 1,
        height: 95,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'column'
    },

    bottomStyle: {
        flex: 1
    },

    inputStyle: {
        flex: 1,
        height: 40,
        marginLeft: 10,
        fontSize: 12
    },

    topContainerStyle: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBoxWrapperStyle: {
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        height: 40,
        width: '90%',
        flexDirection: 'row'
    },
    searchBoxStyle: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        flexDirection: 'column',
        paddingVertical: 10,
        //ios    
        shadowOpacity: 0.3,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        //android
        elevation: 1,
        paddingHorizontal: 10
    },
    bottomContainerStyle: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tagInput: {
        height: 30,
        borderRadius: 5,
        backgroundColor: Config.primaryColor,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginLeft: 5,
        marginTop: 5
    },
    searchButtonStyle: {
        padding: 10,
        backgroundColor: 'transparent'
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
)(ShareOffice);