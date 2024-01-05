import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Keyboard, SafeAreaView, ScrollView, Text, View } from 'react-native';
import COLORS from '../../consts/colors';
import Input from '../components/Input';
import Button from '../components/Button';
import Loader from '../components/Loader';

function RegistrationScreen({navigation}) {

    const [inputs, setInputs] = React.useState({
        email: '',
        fullname: '',
        phone: '',
        password: '',
    });

    const [errors, setErrors] = React.useState({});

    const [loading, setLoading] = React.useState(false);

    const validate = () => {

        Keyboard.dismiss();

        let valid = true;

        if(!inputs.email){
            handleError('Please enter your email.', 'email');
            valid = false;
        }else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handleError('Please input a valid email.', 'email');
            valid = false;
        }

        if(!inputs.fullname){
            handleError('Please enter your full name.', 'fullname');
        }

        if(!inputs.phone){
            handleError('Please enter your phone.', 'phone');
        }

        if(!inputs.password){
            handleError('Please enter your password.', 'password');
        }else if(inputs.password.length < 5){
            handleError('Minimum password length of 5.', 'password');
        }

        valid && register();

    }

    const register = () => {

        setLoading(true);

        setTimeout(() => {

            setLoading(false);

            try{

                AsyncStorage('user', JSON.stringify(inputs));

                navigation.navigate('Login');

            }catch(error){

                Alert.alert('Error', 'Something went wrong');

            }

        }, 3000);

    }

    const handleOnChange = (text, input) => {

        setInputs((prevState) => ({...prevState, [input]: text}))

    }

    const handleError = (errorMessage, input) => {

        setErrors((prevState) => ({...prevState, [input]: errorMessage}))

    }
    
    return (

        <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>

            <Loader visible={loading}/>

            <ScrollView contentContainerStyle={{
                paddingTop: 50,
                paddingHorizontal: 30,
            }}>

                <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>Register</Text>

                <Text style={{color: COLORS.gray, fontSize: 18, fontWeight: 'bold', marginVertical: 10}}>Enter your details to register</Text>

                <View style={{marginVertical: 20}}>
                    
                    <Input 
                        onChangeText={(text) => handleOnChange(text, 'email')} 
                        placeholder='Enter your email address' 
                        label='Email' 
                        iconName={'email-outline'}
                        error={errors.email}
                        onFocus={() => handleError(null, 'email')}
                    />
                    
                    <Input 
                        onChangeText={(text) => handleOnChange(text, 'fullname')} 
                        placeholder='Enter your full name' 
                        label='Fullname' 
                        iconName={'account-outline'}
                        error={errors.fullname}
                        onFocus={() => handleError(null, 'fullname')}
                    />

                    <Input 
                        onChangeText={(text) => handleOnChange(text, 'phone')} 
                        keyboardType={'numeric'} 
                        placeholder='Enter your phone number' 
                        label='Phone number' 
                        iconName={'phone-outline'}
                        error={errors.phone}
                        onFocus={() => handleError(null, 'phone')}
                    />

                    <Input 
                        onChangeText={(text) => handleOnChange(text, 'password')} 
                        placeholder='Enter your password' 
                        label='Password' 
                        iconName={'lock-outline'} 
                        password
                        error={errors.password}
                        onFocus={() => handleError(null, 'password')}
                    />

                    <Button title={'Register'} onPress={validate}/>

                    <Text 
                        onPress={() => navigation.navigate('Login')} 
                        underlineColorAndroid='transparent' 
                        style={{
                            color: COLORS.black, 
                            fontSize: 16, 
                            fontWeight: 'bold', 
                            marginVertical: 10,
                            textAlign: 'center'
                        }}
                    >
                        Already have an account? Login
                    </Text>

                </View>

            </ScrollView>

        </SafeAreaView>

    )

}

export default RegistrationScreen