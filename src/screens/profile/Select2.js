import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';
import { View, Text, TouchableHighlight, TouchableOpacity, ListView, Modal, TextInput, Alert } from 'react-native';

class Select2 extends Component {
    componentWillMount() {
        const allowRemote = this.props.allowRemote != null ? this.props.allowRemote : false;
        this.state = {
            show: false,
            textFilter: '',
            allowRemote: allowRemote,
            realData: allowRemote ? [] : this.props.dataSource,
            displayData: allowRemote ? [] : this.props.dataSource,
            selectedItem: allowRemote ? null : this.filterByValue(this.props.dataSource),
        };
    }

    filter(teks) {
        if (this.state.allowRemote) {
            axios.get(this.props.renderUrl(teks)).then((result)=>{
                this.setState({
                    displayData: this.props.renderHttpResponse(result)
                });
            });
        } else {
            let pattern = new RegExp(teks, 'i');
            let contacts = _.filter(this.state.realData, (datum) => {
                let isFound = false;
                Object.keys(datum).forEach((key) => {
                    let obj = datum[key];
                    if (obj != null && typeof obj == 'string' && obj.search(pattern) != -1) {
                        isFound = true;
                    }
                });

                if (isFound) {
                    return datum;
                }
            });

            this.setState({
                displayData: contacts
            });
        }
    }

    filterByValue(data) {
        if (this.props.selectedValue == null) {
            return data[0];
        }
        let realData = null;
        data.forEach((item) => {
            if (this.props.renderId(item) == this.props.selectedValue) {
                realData = item;
            }
        });
        return realData;
    }

    selectRow(data) {
        this.props.onSelect(data);
        this.setState({
            show: false,
            selectedItem: data
        });
    }

    render() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let cancelText = this.props.cancelText ? this.props.cancelText : 'Cancel';
        const dataSource = ds.cloneWithRows(this.state.displayData);
        return (
            <View style={this.props.parentStyle}>
                <TouchableOpacity style={[styles.containerStyle, this.props.style]}
                    onPress={() => { this.setState({ show: true }) }}>
                    {this.state.selectedItem != null && this.props.renderDisplay(this.state.selectedItem)}
                    {this.state.selectedItem == null && this.props.renderEmpty()}
                </TouchableOpacity>
                <Modal
                    animationType='fade'
                    onRequestClose={() => {
                        this.setState({ show: false })
                    }}
                    transparent={true}
                    visible={this.state.show}
                    onRequestClose={() => { this.setState({ show: false }) }}
                >
                    <View style={styles.modalContainerStyle}>
                        <View style={styles.modalBoxStyle}>
                            <View style={styles.filterTopStyle}>
                                <TextInput
                                    style={styles.filterTopTextStyle}
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    onChangeText={textFilter => {
                                        this.setState({ textFilter });
                                        this.filter(textFilter);
                                    }}
                                    autoFocus={true}
                                    placeholder='Search..'
                                    value={this.state.textFilter}
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                />
                            </View>
                            <View style={{ flex: 1 }}>
                                <ListView
                                    dataSource={dataSource}
                                    enableEmptySections={true}
                                    renderRow={(rowData) => {
                                        return (
                                            <TouchableOpacity style={{ flex: 1 }} onPress={() => { this.selectRow(rowData) }}>
                                                {this.props.renderRow(rowData)}
                                            </TouchableOpacity>
                                        );
                                    }}
                                />
                            </View>
                            <View style={styles.bottomButtonStyle}>
                                <TouchableHighlight
                                    style={styles.btnTextStyle}
                                    onPress={() => { this.setState({ show: false }) }}>
                                    <Text style={styles.textStyle}>{cancelText}</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 3,
        flex: 1
    },
    modalContainerStyle: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBoxStyle: {
        width: '80%',
        height: '90%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
    },
    filterTopStyle: {
        height: 50,
        padding: 5
    },
    filterTopTextStyle: {
        height: 40,
        flex: 1,
        color: '#000',
        backgroundColor: '#fff',
        paddingHorizontal: 5
    },
    bottomButtonStyle: {
        height: 50,
        flexDirection: 'row',
        padding: 5
    },
    btnTextStyle: {
        height: 40,
        flex: 1,
        backgroundColor: '#95a5a6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    textStyle: {
        fontSize: 15,
        color: '#ffffff'
    }
};

export default Select2;