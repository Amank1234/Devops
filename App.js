/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import qs from 'qs';
import React,{useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  ImageBackground,
  useColorScheme,
  View,
  Alert,
  Pressable,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
function sendmail(to,subject,body)
{
  
  let url='mailto:${to}';
  const query = qs.stringify({
    subject: subject,
    body: body,
    
});
if (query.length) {
  url += '?${query}';
}
// const canOpen = await Linking.canOpenURL(url);
// if (!canOpen) {
//   throw new Error('Provided URL can not be handled');
// }

return Linking.openURL(url);
}
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [value, onChangeText] = React.useState(null);
  const [value2, onChangeText2] = React.useState(null);
  const [value3, onChangeText3] = React.useState(null);
  const [value4, onChangeText4] = React.useState(null);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <ScrollView>
        
      <Text style={styles.heading}>
        CONTACT US
        </Text>

      <Text style={styles.inputstyle}>
        
        Enter your Name: 

      </Text>
      <TextInput onChangeText={text => onChangeText(text)} value={value} style={styles.entertext} >
      
      </TextInput>
      <Text style={styles.inputstyle2} >
        
        Enter your Institue's Name: 

      </Text>
      <TextInput style={styles.entertext} onChangeText={text => onChangeText2(text)} value2={value2}>
      
      </TextInput>
      <Text style={styles.inputstyle}>
        
        Enter your Email: 

      </Text>
      <TextInput style={styles.entertext} onChangeText={text => onChangeText3(text)} value3={value3}>
      
      </TextInput>
      <Text style={styles.inputstyle}>
        
        Enter your Query: 

      </Text>
      <TextInput style={styles.entertext} onChangeText={text => onChangeText4(text)} value4={value4}>
      
      </TextInput>
      <Button title="SEND"  color="#841584" style={styles.buttonstyle} 
      
       onPress={() => sendmail('rakeshkumarpandey1970@gmail.com','testing',value4)}
      >
        
      </Button>
      
         {/* <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.instagram.com/currents_nitt/?hl=en')}>
          <Image source={require("C:\Users\Aman\Desktop\assets\insta.jpg")}/>
        </TouchableOpacity> */}
        
      
      {/* <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.facebook.com/currentsnitt/')}>
          <Image source={require("C:\Users\Aman\Desktop\assets\face.jpg")}/>
        </TouchableOpacity>
        
      </View>  */}
      <View>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.facebook.com/currentsnitt/')}>
<Image source={{
  uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vector%2Ffacebook-icon-vector-21082437&psig=AOvVaw0-tX2kIDvA_oUcLraZkmak&ust=1637249340456000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMiBibPbn_QCFQAAAAAdAAAAABAD',
}}
/>

      </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.instagram.com/currents_nitt/?hl=en')}>
<Image source={{
  uri:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2016%2F05%2F12%2Ftechnology%2Fthe-great-instagram-logo-freakout-of-2016.html&psig=AOvVaw1_MxeSbgpnS2vQh0tqOWIi&ust=1637249594446000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDh_avcn_QCFQAAAAAdAAAAABAD',
}}
/>

      </TouchableOpacity>
      </View>
</ScrollView>
</SafeAreaView>
  );
};



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputstyle: {
    height: 40,
    margin: 12,
    width: 130,
    borderWidth: 1,
    marginTop:20,
    marginLeft: 40,
    padding: 10,
  },
  inputstyle2: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 1,
    marginTop:20,
    marginLeft: 40,
    padding: 10,
  },
  entertext:{
  
    height: 40,
    margin: 12,
    
    borderWidth: 1,
    marginTop:1,
    marginLeft: 40,
    padding: 10,
  },
  heading: {
    height: 60,
   
    marginTop:2,
    fontSize: 30,
    
    padding: 10,
    alignSelf: 'center',
    color: '#000000',
  },
  buttonstyle:{
   
    marginTop: 5,
    marginLeft: 50,
    borderWidth:5,
    paddingVertical: 12,
    paddingHorizontal: 32,
    fontSize: 20,
    alignSelf: 'center',
    elevation: 3,
    borderRadius: 4,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#859a9b',
    borderRadius: 40,
    padding: 10,
    marginTop:20,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 20 },
    height:20,
    shadowRadius: 20,
    shadowOpacity: 0.35,
  },
  logo:
  {
    width:50,
    height:50,
  }
});

export default App;
