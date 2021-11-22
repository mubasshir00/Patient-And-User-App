import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

//Navigators
import Main from './src/Navigators/Main'
import { Box, NativeBaseProvider } from 'native-base'
import AuthScreen from './src/Screen/AuthScreen'
import Register from './src/Components/Auth/Register'

const App = () => {

  const [isLogin, setisLogin] = useState(true)
  const checkLogin = () =>{
     
  }

  return (
    <NativeBaseProvider>
      {/* <NavigationContainer>
        {
          isLogin ? <Box style={styles.container}>
            <Main />
          </Box> : <AuthScreen />
        }
      </NavigationContainer> */}
      <Register/>
    </NativeBaseProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})
