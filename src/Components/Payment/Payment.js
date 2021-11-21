import {
  Box,
  CheckIcon,
  Heading,
  Select,
  Text,
  Image,
  ScrollView,
  FormControl,
  Input,
  Center,
  Pressable,
} from 'native-base';

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ProfileCard from '../../ReusableComponents/ProfileCard/ProfileCard';

const Payment = () => {
  const [cardOption, setCardOption] = useState('');
  const [otherPaymentOption, setOtherPaymentOption] = useState('');
  return (
    <ScrollView background="white" flex="1" px="4">
      <Box p="4" background="#F0F4F7">
        <Box background="white" borderRadius="10" p="2">
          <ProfileCard />
        </Box>
        <Box
          background="white"
          my="4"
          py="2"
          px="2"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="6">
          <Heading fontSize="14">Payment Total</Heading>
          <Text color="blue.400" fontWeight="bold" fontSize="14">
            BDT 200
          </Text>
        </Box>
        <Box>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Heading fontSize="15">Pay Using Card</Heading>
            <Select
              minWidth="130"
              background="white"
              selectedValue={cardOption}
              accessibilityLabel="Payment Option"
              placeholder="Payment Option"
              _selectedItem={{
                bg: 'white',
              }}
              mt="1"
              height="8"
              onValueChange={itemValue => setCardOption(itemValue)}>
              <Select.Item label="Debit Card" />
              <Select.Item label="Credit Card" />
              <Select.Item label="Bkash" />
              <Select.Item label="Nagad" />
            </Select>
          </Box>
        </Box>

        <Box></Box>

        <Box>
          <Image
            source={require('../../assets/images/card.jpeg')}
            alt="card"
            resizeMode="contain"
          />
        </Box>

        <Box>
          <FormControl>
            <FormControl.Label>Card No</FormControl.Label>
            <Input background="white" fontSize="15" py="1" />
            <Box
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              my="5">
              <Box alignItems="center" flexDirection="row">
                <FormControl.Label>Validity</FormControl.Label>
                <Input width="100" fontSize="15" py="1" background="white" />
              </Box>
              <Box alignItems="center" flexDirection="row">
                <FormControl.Label>CVV</FormControl.Label>
                <Input width="60" fontSize="15" py="1" background="white" />
              </Box>
            </Box>
            <FormControl.Label>Name</FormControl.Label>
            <Input background="white" fontSize="15" py="1" />

            <Box background="white" mt="4">
              <Select
                minWidth="130"
                background="white"
                selectedValue={otherPaymentOption}
                accessibilityLabel="Other Payment Option"
                fontSize="16"
                placeholder="Other Payment Option"
                _selectedItem={{
                  bg: 'white',
                }}
                onValueChange={itemValue => setOtherPaymentOption(itemValue)}>
                <Select.Item label="Net Banking" />
                <Select.Item label="Offline Banking" />
                <Select.Item label="Bkash" />
                <Select.Item label="Nagad" />
              </Select>
            </Box>
          </FormControl>
        </Box>
      </Box>
      <Pressable
      //navigation to summery screen
      >
        {({isHovered, isFocused, isPressed}) => {
          return (
            <Box
                bg={isPressed ? 'blue.400' : isHovered ? 'blue.300' : '#5099F3'}
              py="2"
              mx="4"
              my="2"
              rounded="8"
              style={{
                transform: [
                  {
                    scale: isPressed ? 0.95 : 1,
                  },
                ],
              }}>
              <Center>
                <Text color="white" fontWeight="bold" fontSize="16">
                  Confirm
                </Text>
              </Center>
            </Box>
          );
        }}
      </Pressable>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({});
