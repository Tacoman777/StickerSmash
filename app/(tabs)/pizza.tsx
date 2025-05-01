import { Text, View, ScrollView, StyleSheet } from 'react-native';

import { Image } from 'expo-image';


const Pepperoni = require('@/assets/images/days/Pepperoni Pizza.jpg');
const Hawaiian = require('@/assets/images/days/Hawaiian Pizza.jpg');
const Margherita = require('@/assets/images/days/Margherita Pizza.jpg');
const MeatLovers = require('@/assets/images/days/Meat Lovers Pizza.jpg');
const Vegetarian = require('@/assets/images/days/Vegetarian Pizza.jpg');
const Cheese = require('@/assets/images/days/Cheese Pizza.jpg');
const Alfredo = require('@/assets/images/days/Alfredo Pizza.jpg');

export default function OrderScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Pizza List</Text>
        <View style={styles.innercontainer}>
          <Text style={styles.list}>Pepperoni Pizza</Text>
          <Image source={Pepperoni} style={styles.image} />
          
          <Text style={styles.list}>Hawaiian Pizza</Text>
          <Image source={Hawaiian} style={styles.image} />

          <Text style={styles.list}>Margherita Pizza</Text>
          <Image source={Margherita} style={styles.image} />

          <Text style={styles.list}>Meat Lovers Pizza</Text>
          <Image source={MeatLovers} style={styles.image} />

          <Text style={styles.list}>Vegetarian Pizza</Text>
          <Image source={Vegetarian} style={styles.image} />

          <Text style={styles.list}>Cheese Pizza</Text>
          <Image source={Cheese} style={styles.image} />

          <Text style={styles.list}>Alfredo Pizza</Text>
          <Image source={Alfredo} style={styles.image} />
        </View>      
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: 2700,
    backgroundColor: '#000000',
    
  },
  innercontainer: {
    
    alignItems: 'center',
    justifyContent: 'center',
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
  image: {
    width: 300,
    height: 300,
    borderRadius: 15,
    marginBottom: 30,
  },
  list: {
    color: '#E8E9F3',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    textShadowColor: '#DD403A',
    textShadowOffset: { width: 3, height: 5},
    textShadowRadius: 5,
    
  },
});
