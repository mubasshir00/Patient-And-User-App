import { Image } from 'native-base';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput} from 'react-native'
import Input from '../../ReusableComponents/Form/Input';

var { width,height } = Dimensions.get("window");

const HeroContent = () => {
    const [text, settext] = useState('')
    const searchInputText = ()=>{

    }
    return (
        <View>
            <Image 
            source={require('../../assets/images/3641634.jpg')} style={styles.heroImage} 
            resizeMode="cover"
            alt="text"
            height={height/2.5}
            width={width}
            />
        </View>
    )
}

export default HeroContent

const styles = StyleSheet.create({
    inputBox:{
       marginTop:-width/3.1,
       alignItems:'center',
       width:width,
       backgroundColor:'black'
    }
})
