import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function ContactScreen() {
  
  const [name, onChangeName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [about, onChangeAbout] = React.useState('');
  const [showText, setShowText] = useState(false);
  const handlePress = () => {
    setShowText(true);
  };
  const hideThanks = () => {
    setShowText(false);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.head]}>Contact Form</Text>
      <View style={styles.formcontainer}>
        <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            onPressIn={hideThanks}
            value={name}
            placeholder="Enter your name"
            placeholderTextColor = 'grey'
            keyboardType="default"
            selectionColor='#E8E9F3'
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            onPressIn={hideThanks}
            value={email}
            placeholder="Enter your email"
            placeholderTextColor = 'grey'
            keyboardType="default"
            selectionColor='#E8E9F3'
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAbout}
            onPressIn={hideThanks}
            value={about}
            placeholder="What is this about?"
            placeholderTextColor = 'grey'
            keyboardType="default"
            selectionColor='#E8E9F3'
          />
          <View style={[styles.button]}>
            <Button title="Send" onPress={handlePress} color='#DD403A' />
          </View>
          {showText && <Text style={[styles.thankyoutext]}>
            Thank you for contacting me {name} I will get back to you at {email} about {about} soon
          </Text> }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    
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
  thankyoutext: {
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
