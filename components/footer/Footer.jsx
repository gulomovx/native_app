// Footer.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.footerText}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.footerText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#6200ee',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerItem: {
    padding: 10,
  },
  footerText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Footer;
