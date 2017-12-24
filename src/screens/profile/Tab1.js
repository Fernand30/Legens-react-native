import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity, DatePickerAndroid } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../../Config';
import Input from './Input';
import Select2 from './Select2';
import CustomInput from './CustomInput';
import RadioButton from './RadioButton';
import countryJsonData from './country.json';

class Tab1 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            realName: '',
            gender: 'M',
            genderData: [
                { id: 'M', text: 'Male' },
                { id: 'F', text: 'Female' },
            ],
            country: 'HK',
            countryList: countryJsonData,
            handphone: '',
            idCard: '',
            address: '',
            birthDate: '2017-01-01'
        };
    }

    showDatepicker() {
        //parse currect date
        const array = this.state.birthDate.split('-');

        DatePickerAndroid.open({
            // Use `new Date()` for current date.
            // May 25 2020. Month 0 is January.
            date: new Date(parseInt(array[0]), parseInt(array[1]) - 1, parseInt(array[2]))
        }).then((result) => {
            const { action, year, month, day } = result;
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
                console.log(year, month, day);
                const selectedDate = year + '-' + (month + 1) + '-' + day;
                this.setState({ birthDate: selectedDate });
            }
        }).catch((error) => { });
    }

    render() {
        let birthDate = (
            <TouchableOpacity onPress={() => { this.showDatepicker() }} style={{
                paddingVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                width: '100%'
            }}>
                <Text style={{ flex: 1 }}>{this.state.birthDate}</Text>
                <Ionicons name='md-calendar' color='#000' size={20} />
            </TouchableOpacity>
        );
        let select2 = (
            <Select2
                parentStyle={{ width: '100%' }}
                dataSource={this.state.countryList}
                renderId={(item) => (item.code)}
                renderRow={(item) => (
                    <View style={{
                        height: 40, justifyContent: 'center', alignItems: 'center',
                        paddingHorizontal: 10, flexDirection: 'row'
                    }}>
                        <Text style={{ flex: 1 }}>{item.name}</Text>
                    </View>
                )}
                renderDisplay={(item) => (
                    <View style={{
                        height: 40, justifyContent: 'center', alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Text style={{ flex: 1 }}>{item.name}</Text>
                        <Ionicons name='md-arrow-dropdown' color='#000' />
                    </View>
                )}
                renderEmpty={() => (
                    <View style={{
                        height: 40, justifyContent: 'center', alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Text style={{ flex: 1 }}>-</Text>
                        <Ionicons name='md-arrow-dropdown' color='#000' />
                    </View>
                )}
                renderLabel={(item) => (item.name)}
                onSelect={(item) => { this.setState({ country: item.code }); }}
                cancelText='Cancel'
                selectedValue={this.state.country}
            />
        );

        return (
            <ScrollView style={styles.rootStyle}>
                <Input title='REAL NAME' placeholder='Please Enter Your Name'
                    value={this.state.realName}
                    onChangeText={(realName) => { this.setState({ realName }) }} />

                <Input title='ID CARD NO.' placeholder='Please Enter Your ID Number'
                    value={this.state.idCard}
                    onChangeText={(idCard) => { this.setState({ idCard }) }} />

                <CustomInput title='BIRTH DATE' content={birthDate} />

                <Input title='ADDRESS' placeholder='Please Enter Your Current Address'
                    value={this.state.address}
                    onChangeText={(address) => { this.setState({ address }) }} />

                <RadioButton title='GENDER' value={this.state.gender}
                    radioData={this.state.genderData}
                    onSelect={(gender) => { this.setState({ gender }) }} />

                <Input title='HANDPHONE' placeholder='Please Enter Your Handphone Number'
                    value={this.state.handphone}
                    onChangeText={(handphone) => { this.setState({ handphone }) }} />

                <CustomInput title='COUNTRY' content={select2} />

                <TouchableOpacity style={{
                    height: 35,
                    justifyContent: 'center', alignItems: 'center',
                    backgroundColor: Config.primaryColor,
                    borderRadius: 5,
                    marginHorizontal: 10,
                    marginTop: 10
                }}
                    onPress={() => {  }}>
                    <Text style={{ color: '#fff' }}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
    },
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
)(Tab1);