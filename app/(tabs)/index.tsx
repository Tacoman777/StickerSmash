//Tutorial Link
//https://docs.expo.dev/tutorial/create-your-first-app/

import React, {useState} from 'react';
import { Text, View, ScrollView, StyleSheet, ImageSourcePropType, Modal, Alert, Pressable, Button } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import FontAwesome from '@expo/vector-icons/FontAwesome';



const videoSource = require('@/assets/PizzaVideo.mp4');
const getDay = (day: number): string => {
  switch (day) {
    case 0:
      return 'Pepperoni';
    case 1:
      return 'Hawaiian';
    case 2:
      return 'Margherita';
    case 3:
      return 'Meat Lovers';
    case 4:
      return 'Vegetarian';
    case 5:
      return 'Cheese';
    case 6:
      return 'Alfredo';
    default:
      return 'The Best';
  }
};
const dayImages: { [key: number]: ImageSourcePropType } = {
  0: require('@/assets/images/days/Pepperoni Pizza.jpg'),
  1: require('@/assets/images/days/Hawaiian Pizza.jpg'),
  2: require('@/assets/images/days/Margherita Pizza.jpg'),
  3: require('@/assets/images/days/Meat Lovers Pizza.jpg'),
  4: require('@/assets/images/days/Vegetarian Pizza.jpg'),
  5: require('@/assets/images/days/Cheese Pizza.jpg'),
  6: require('@/assets/images/days/Alfredo Pizza.jpg'),
};
const today = new Date();
const dayMessage = getDay(today.getDay()); // 0 = Sunday, 6 = Saturday
//Replace the code here         ^ with a number 0-6 to see different days
const today2 = new Date().getDay();
const daySource = dayImages[today2];
//Replace the today2          ^ with a number 0-6 to see different days

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });
  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}> Pizza App </Text>

        <View style={styles.imageContainer}>
          <Text style={[styles.pizzaDay, styles.text]}> Pizza of the Day: </Text>
          <Text style={styles.dayText}>{dayMessage} Pizza</Text>
          <Image source={daySource} style={styles.image} />
        </View>
        <Link href="/pizza" style={styles.button}>
          See Pizza List
        </Link>
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
            Alert.alert('Schedule has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Monday - Sunday</Text>
              <Text style={styles.modalText}>9 A.M. - 5 P.M.</Text>
              <Text style={styles.modalText}>Contact Me for More Info</Text>
              
              <Pressable
                style={[styles.schedule, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.text}>Hide Schedule</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <View style={styles.footerContainer}>
          <View style={styles.buttonContainer}>
            <Pressable style={[styles.button2, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
              <FontAwesome name="calendar" size={18} color="#000000" style={styles.buttonIcon} />
              <Text style={styles.textStyle}>View My Schedule</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.videoContainer}>
          <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
          <View style={styles.controlsContainer}>
            <Button
              title={isPlaying ? 'Pause' : 'Play'}
              onPress={() => {
                if (isPlaying) {
                  player.pause();
                } else {
                  player.play();
                }
              }}
            />
          </View>
        </View>
        
      </View>
    </ScrollView>
    
  
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1400,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    color: '#E8E9F3',
    
  },
  pizzaDay: {
    
    color: '#E8E9F3',
    fontSize: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    textShadowColor: '#DD403A',
    textShadowOffset: { width: 3, height: 5},
    textShadowRadius: 5,
    
  },
  dayText: {
    
    color: '#E8E9F3',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    textShadowColor: '#DD403A',
    textShadowOffset: { width: 3, height: 5},
    textShadowRadius: 5,
    
  },
  header: {
    flex: 0.5,
    color: '#E8E9F3',
    fontSize: 80,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    textShadowColor: '#DD403A',
    textShadowOffset: { width: 3, height: 5},
    textShadowRadius: 5,
    
  },
  button: {
    flex: 0.5,
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#E8E9F3',
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-condensed',
    textShadowColor: '#DD403A',
    textShadowOffset: { width: 3, height: 5},
    textShadowRadius: 5,
    alignItems: 'flex-end',
  },
  imageContainer: {
    flex: 1.5,
    
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 15,
  },
  footerContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#000000',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  schedule: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#E8E9F3',
  },
  buttonClose: {
    backgroundColor: '#DD403A',
  },
  textStyle: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: '#E8E9F3',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalLink: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button2: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#000000',
    fontSize: 16,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
  videoContainer: {
    
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
});





