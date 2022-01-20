import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import { Image } from 'native-base';
const {width,height} = Dimensions.get('screen')
const Banner = () => {
  const [bannerData,setBannerData] = useState([])
  useEffect(()=>{
      setBannerData([
          "https://i.pinimg.com/236x/e9/5c/60/e95c60d5a695d14a76bea6470c2540d5.jpg",
          "https://i.pinimg.com/236x/e4/50/86/e450866ac33a6eb6bffe71bb77c39075.jpg",
          "https://i.pinimg.com/236x/83/2a/46/832a46e38c9bd1f49e45e0df5b3720d9.jpg"
      ])
      return () =>{
          setBannerData([])
      }
  },[])
  return (
   <ScrollView>
          <View style={styles.container}>
              <View style={styles.swiper}>
                  <Swiper
                      style={{ height: width / 2 }}
                      showsButtons={false}
                      autoplay={true}
                      autoplayTimeout={2}
                  >
                      {bannerData.map((item) => {
                          return (
                              <Image key={item} style={styles.imageBanner} resizeMode="cover" source={{ uri: item }} alt='image'/>
                          )
                      })}
                  </Swiper>
                  {/* <View style={{ height: 20 }}>

                  </View> */}
              </View>
          </View>
   </ScrollView>
  );
};

export default Banner;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    swiper:{
        width:width,
        alignItems:'center',
        justifyContent:'center',
        // marginTop:10
    },
    imageBanner:{
        height:width/2,
        width:width,
        borderRadius:3,
        // marginHorizontal:20,
    }
});
