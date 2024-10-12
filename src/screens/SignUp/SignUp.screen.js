import React, { useMemo, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import CountryPickerModal from '../../components/CountryModal';

const Signup = () => {
  const navigation = useNavigation()

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry.name);
    setIsModalVisible(false);
  };

  const navigateToOTP = () => {
    if (!formValid) {
      Alert.alert('Form Empty Detected', 'Please fill the empty field');
      return;
    }
    navigation.navigate('OTPVerification');
  };

  const formValid = useMemo(() => {
    const isValid = firstName !== '' &&
    lastName !== '' &&
    phoneNumber !== '' &&
    email !== '' &&
    password !== '' &&
    country !== '';

    return isValid;

  }, [country, email, firstName, lastName, password, phoneNumber]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <Text style={styles.subtitle}>
        Great to have you on board. Please start by providing us with the following info
      </Text>

      <TextInput
        style={styles.input}
        left={<TextInput.Icon icon="account-outline" />}
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        style={styles.input}
        left={<TextInput.Icon icon="account-outline" />}
        placeholder="Last name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        left={<TextInput.Icon icon="phone" />}
        placeholder="Phone number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        left={<TextInput.Icon icon="at" />}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        left={<TextInput.Icon icon="lock" />}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      {/* Country Picker Button */}
      <TouchableOpacity
        style={{
          ...styles.input,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 25,
        }}
        onPress={() => setIsModalVisible(true)}
      >
        <TextInput.Icon icon="google-earth" style={{marginLeft: 35}} />
        <Text style={{ fontSize: 16, marginLeft: 30, color: 'black'}}>{country ? country : 'Select Country'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={navigateToOTP}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.signInText}>
        Already have an account?{' '}
        <Text style={styles.signInLink}>Sign in</Text>
      </Text>

      {/* Country Picker Modal */}
      <CountryPickerModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSelectCountry={handleCountrySelect}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'black'
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#777',
  },
  input: {
    height: 50,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#407AFF',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  signInText: {
    textAlign: 'center',
    marginTop: 5,
    color: '#777',
    marginBottom: 30,
  },
  signInLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});

export default Signup;
