import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';

import ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../../Config';

class Tab2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idCard: require('../../../images/profile/id_card_1.png'),
            idHoldingCard: require('../../../images/profile/id_card_2.png'),
            showModal: false,
            uploadType: 'id_card', //id_holding_card
        };
    }

    onSelectImage(response) {
        console.log('Response = ', response);

        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
            let source = { uri: response.uri };

            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
                idCard: source
            });
        }
    }

    launchCamera() {
        var options = {
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.launchCamera(options, (response) => {
            this.onSelectImage(response);
        });
    }

    launchImageLibrary() {
        var options = {
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            this.onSelectImage(response);
        });
    }

    render() {
        let title = 'Upload Holding ID Card';
        if (this.state.uploadType == 'id_card') {
            title = 'Upload ID Card';
        }

        return (
            <View style={styles.rootStyle}>
                <Image source={this.state.idCard}
                    style={{ width: 150, height: 110, resizeMode: 'contain', marginVertical: 20 }} />

                <TouchableOpacity style={{
                    width: 200, height: 35,
                    justifyContent: 'center', alignItems: 'center',
                    backgroundColor: Config.primaryColor,
                    borderRadius: 5
                }}
                    onPress={() => { this.setState({ showModal: true, uploadType: 'id_card' }) }}>
                    <Text style={{ color: '#fff' }}>Upload ID Card</Text>
                </TouchableOpacity>

                <Image source={require('../../../images/profile/id_card_2.png')}
                    style={{ width: 150, height: 110, resizeMode: 'contain', marginVertical: 20 }} />

                <TouchableOpacity style={{
                    width: 200, height: 35,
                    justifyContent: 'center', alignItems: 'center',
                    backgroundColor: Config.primaryColor,
                    borderRadius: 5
                }}
                    onPress={() => { this.setState({ showModal: true, uploadType: 'id_holding_card' }) }}>
                    <Text style={{ color: '#fff' }}>Upload Holding ID Card</Text>
                </TouchableOpacity>

                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={this.state.showModal}
                    onRequestClose={() => {
                        this.setState({
                            showModal: false
                        })
                    }} >
                    <View style={styles.modalStyle}>
                        <View style={styles.modalBoxStyle}>
                            <Text style={styles.modalTextStyle}>{title}</Text>
                            <View style={styles.modalBoxWrapperStyle}>
                                <TouchableOpacity style={styles.modalButtonWrapperStyle} onPress={() => { this.launchCamera() }}>
                                    <View style={styles.circleButtonStyle}>
                                        <Image source={require('../../../images/profile/icon_gallery.png')}
                                            style={{ width: 30, height: 30, resizeMode: 'contain', tintColor: '#fff' }} />
                                    </View>
                                    <Text style={styles.textButtonStyle}>Gallery</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.modalButtonWrapperStyle} onPress={() => { this.launchImageLibrary() }}>
                                    <View style={styles.circleButtonStyle}>
                                        <Image source={require('../../../images/profile/icon_camera.png')}
                                            style={{ width: 30, height: 30, resizeMode: 'contain', tintColor: '#fff' }} />
                                    </View>
                                    <Text style={styles.textButtonStyle}>Camera</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.modalButtonWrapperStyle} onPress={() => { this.launchCamera() }}>
                                    <View style={styles.circleButtonStyle}>
                                        <Image source={require('../../../images/profile/icon_qrscan.png')}
                                            style={{ width: 30, height: 30, resizeMode: 'contain', tintColor: '#fff' }} />
                                    </View>
                                    <Text style={styles.textButtonStyle}>QR Scan</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalStyle: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'flex-end',
        flexDirection: 'column'
    },
    modalBoxStyle: {
        backgroundColor: '#fff',
        height: 220,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    modalTextStyle: {
        fontSize: 20,
        color: '#000'
    },
    modalBoxWrapperStyle: {
        flexDirection: 'row',
        marginTop: 30
    },
    modalButtonWrapperStyle: {
        flexDirection: 'column',
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleButtonStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Config.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    textButtonStyle: {
        fontSize: 12
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
)(Tab2);