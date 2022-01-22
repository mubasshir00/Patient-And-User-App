import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'

//Navigators
import Main from './src/PatientApp/Navigators/Main'
import { Box, NativeBaseProvider } from 'native-base'
import AuthScreen from './src/PatientApp/Screen/AuthScreen'
import Register from './src/PatientApp/Components/Auth/Register'

import { Provider } from 'react-redux'
import store from './src/PatientApp/Redux/store'
import CustomerApp from './src/CustomerApp'

const PatientApp = () =>{
  const [isLogin, setisLogin] = useState(true)

  return(
    <NativeBaseProvider>
      <NavigationContainer>
        {
          isLogin ? <Box style={styles.container}>
            <Main />
          </Box> : <AuthScreen />
        }
      </NavigationContainer>
      {/* <Register/> */}
    </NativeBaseProvider>
  )
}

const Customer = () =>{
  return(
    <NativeBaseProvider>
        <CustomerApp />
      {/* <Register/> */}
    </NativeBaseProvider>
  )
}

const App = () => {

  const checkLogin = () =>{
     
  }

  return (
      // <PatientApp/>
    <Customer/>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})
