import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { images } from '../../assets';

const Status = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Implement logout functionality here
    // For example, navigate to the login screen or clear user data
    navigation.reset({
      index: 0,
      routes: [{ name: 'Signup' }], // Navigate back to the login screen
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={images.ellipse}
          style={styles.icon}
        />
      </View>
      <Text style={styles.congratulationsText}>Congratulations</Text>
      <Text style={styles.descriptionText}>You have successfully created your account</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    width: 110,
    height: 110,
  },
  congratulationsText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#407AFF',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#888888',
    marginBottom: 30,
    textAlign: 'center',
  },
  logoutButton: {
    display: 'flex',
    marginTop: 60,
    backgroundColor: '#FF6B6B',
    width: '90%',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Status;
