import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

export default function ContactScreen() {
  
  
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  
  const [showText, setShowText] = useState(false);
  const handlePress = () => {
    setShowText(true);
  };
  const hintText = () => {
    setShowText(false);
  };
  
  const router = useRouter();
  const checkCredentials = () => {
    if (email === 'email@gmail.com' && password === 'password1') {
      router.replace('/');
      //
    } else if (email === 'email@gmail.com' && password != 'password1'){
        Alert.alert('Incorrect Password');
    } else if (email != 'email@gmail.com'){
        Alert.alert('Incorrect Email');
    }
};

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.head]}>Sign In</Text>
      <View style={styles.formcontainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          
          value={email}
          placeholder="Enter your email"
          placeholderTextColor = 'grey'
          keyboardType="default"
          selectionColor='#E8E9F3'
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          
          value={password}
          placeholder="Enter password"
          placeholderTextColor = 'grey'
          keyboardType="default"
          selectionColor='#E8E9F3'
        />
        <View style={[styles.button]}>
          <Button title="Sign In" onPress={checkCredentials} color='#DD403A' />
        </View>
        
        <View style={[styles.button]}>
          <Button title="Hint" onPress={handlePress} color='#DD403A' />
        </View>
        {showText && <Text style={[styles.hintText]}>
          The correct email and password is email@gmail.com and password1
        </Text> }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formcontainer: {
    width: '100%',
  },
  text: {
    color: '#E8E9F3',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    textShadowColor: '#DD403A',
    textShadowOffset: { width: 3, height: 5},
    textShadowRadius: 5,
  },
  hintText: {
    color: '#E8E9F3',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    textShadowColor: '#DD403A',
    textShadowOffset: { width: 3, height: 5},
    textShadowRadius: 5,
    margin: 10,
  },
  head: {
    marginBottom: 50,
  },
  button: {
    margin: 10,
  },
  input: {
    color: '#E8E9F3',
    borderColor: '#E8E9F3',
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});
