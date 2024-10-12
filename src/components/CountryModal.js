import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';


const countries = [
  { name: 'Argentina', code: 'AR', flag: '🇦🇷' },
  { name: 'Afghanistan', code: 'AF', flag: '🇦🇫' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'Denmark', code: 'DK', flag: '🇩🇰' },
  { name: 'India', code: 'IN', flag: '🇮🇳' },
  { name: 'Switzerland', code: 'CH', flag: '🇨🇭' },
  { name: 'Italy', code: 'IT', flag: '🇮🇹' },
  { name: 'Jordan', code: 'JO', flag: '🇯🇴' },
  { name: 'Malaysia', code: 'MY', flag: '🇲🇾' },
  { name: 'USA', code: 'US', flag: '🇺🇸' },
  { name: 'Sri Lanka', code: 'LK', flag: '🇱🇰' },
  { name: 'Pakistan', code: 'PK', flag: '🇵🇰' },
  // Add more countries as needed
];

const CountryPickerModal = ({ visible, onClose, onSelectCountry }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => onSelectCountry(item)}
    >
      <Text style={styles.flag}>{item.flag}</Text>
      <Text style={styles.countryName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal visible={visible} animationType="slide" transparent={false}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Select Country</Text>

        <TextInput
          style={styles.searchInput}
          left={<TextInput.Icon icon="search-web" />}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <FlatList
          data={filteredCountries}
          keyExtractor={(item) => item.code}
          renderItem={renderItem}
        />

        <TouchableOpacity onPress={onClose} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  flag: {
    fontSize: 24,
    marginRight: 10,
  },
  countryName: {
    fontSize: 18,
  },
  cancelButton: {
    marginTop: 20,
    paddingVertical: 15,
    backgroundColor: '#007bff',
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CountryPickerModal;
