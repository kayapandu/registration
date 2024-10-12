import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../assets';

const OTPVerification = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChangeText = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  };

  const handleVerifyOtp = () => {
    const otpCode = otp.join('');
    if (otpCode.length === 4) {
      navigation.navigate('Status');
      Alert.alert('OTP Verified', `Your OTP code is ${otpCode}`);
    } else {
      Alert.alert('Invalid OTP', 'Please enter the correct 4-digit OTP');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagePlaceholder}>
        <Image source={images.connectivity} width={100} height={100} />
      </View>

      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>
        Enter the OTP sent to <Text style={styles.phoneNumber}>+234-7087139241</Text>
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((value, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={value}
            onChangeText={(text) => handleChangeText(text, index)}
          />
        ))}
      </View>

      <Text style={styles.resendText}>
        Didn’t receive an OTP?{' '}
        <Text style={styles.resendLink} onPress={() => Alert.alert('OTP Resent')}>Resend OTP</Text>
      </Text>

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyOtp}>
        <Text style={styles.verifyButtonText}>Verify & Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  backButtonText: {
    fontSize: 24,
    color: '#007bff',
  },
  imagePlaceholder: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  imagePlaceholderText: {
    fontSize: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
    marginVertical: 10,
  },
  phoneNumber: {
    fontWeight: 'bold',
    color: '#000',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 50,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
  resendText: {
    textAlign: 'center',
    color: '#777',
    marginBottom: 20,
  },
  resendLink: {
    color: '#ff5a5f',
    fontWeight: 'bold',
  },
  verifyButton: {
    backgroundColor: '#407AFF',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 50,
  },
  verifyButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPVerification;
