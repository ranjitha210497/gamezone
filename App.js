import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-italic': require('./assets/fonts/Nunito-Italic.ttf'),
  'nunito-blackitalic': require('./assets/fonts/Nunito-BlackItalic.ttf'),
})


export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded) {
    return (
      <Navigator />
    ); 
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
  
}

