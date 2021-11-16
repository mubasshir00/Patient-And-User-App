import {useNavigation} from '@react-navigation/native';
import {Box, Center, Flex, Image, Pressable, Text, Input} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import Input from '../../ReusableComponents/Form/Input';

var {width} = Dimensions.get('window');

const data = [
  {
    id: '1',
    title1: 'Free',
    title2: 'Consultation',
    image: require('../../assets/images/doctor.png'),
    screen: 'Free Consultation',
  },
  {
    id: '2',
    title1: 'Online',
    title2: 'Appointment',
    image: require('../../assets/images/phone-call.png'),
    screen: 'Online Appointment',
  },
];

const Category = () => {
  const [text, settext] = useState('');
  const navigation = useNavigation();
  return (
    <Center borderTopRadius="17" backgroundColor="info.100" mt={-width / 3}>
      <View style={styles.inputBox} backgroundColor="info.100">
        <Input
          placeholder="Search"
          onChangeText={text => settext(text)}
          width={width / 1.2}
          background="white"
          mb="5"
          borderRadius="40"
          fontSize="17"
          px="5"
          textAlign="center"
        />
      </View>
      <Flex direction="row" justifyContent="space-between" width={width - 30}>
        {data.map(item => {
          const {id, title1, title2, image, screen} = item;
          return (
            <Pressable key={id} onPress={() => navigation.navigate(screen)}>
              {({isHovered, isFocused, isPressed}) => {
                return (
                  <Flex>
                    <Box
                      bg={
                        isPressed
                          ? 'blue.400'
                          : isHovered
                          ? 'blue.500'
                          : 'blue.600'
                      }
                      py="2"
                      rounded="5"
                      flexDirection="row"
                      alignItems="center"
                      style={{
                        transform: [
                          {
                            scale: isPressed ? 0.96 : 1,
                          },
                        ],
                      }}>
                      <Box style={styles.imageContainer}>
                        <Image
                          source={image}
                          alt="doctor"
                          width="3"
                          height="3"
                          style={styles.imageC}
                        />
                      </Box>
                      <View>
                        <Text px="3" fontWeight="bold"  color="white" textAlign="center">
                          {title1}
                        </Text>
                         <Text px="3" fontWeight="bold" color="white">{title2}</Text>
                      </View>
                    </Box>
                  </Flex>
                );
              }}
            </Pressable>
          );
        })}
      </Flex>
    </Center>
  );
};

export default Category;

const styles = StyleSheet.create({
  inputBox: {
    marginTop: -20,
    alignItems: 'center',
    width: width,
  },
  imageContainer: {
    width: 35,
    height: 35,
    backgroundColor: 'white',
    borderRadius: 100,
    alignItems: 'center',
    padding: 3,
    justifyContent:'center',
    marginLeft:15
  },
  imageC: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 100,
  },
});
