
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";
import {COLORS, icons, images, SIZES} from '../constants'
import { Popularjobs, Nearbyjobs,  ScreenHeaderBtn, Welcome} from '../components/'
// import {NearbyJobs} from '../components/common/cards/nearby'
import { ColorSchemeStore } from "nativewind/dist/style-sheet/color-scheme";
import {Footer} from '../components/'
const Home =()=>{
      return(
            <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
                  <Stack.Screen 
                  options={{
                        headerStyle:{backgroundColor:COLORS.lightWhite},
                        headerShadowVisible:false,
                        headerLeft:()=>(
                              <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%'/>
                  ),
                        headerRight:()=>(
                              <ScreenHeaderBtn iconUrl={images.profile} dimension='100%'/>
                  ),
                  headerTitle:''
                  }}
                  />
              <ScrollView showsVerticalScrollIndicator={false}>
                  <View
                  style={{
                        flex:1,
                        padding:SIZES.medium
                  }}
                  >
                        <Welcome
                        
                        />
                        <Popularjobs/>
                        <Nearbyjobs/>
                  </View>

              </ScrollView>
              <View>
              {/* <Footer/> */}

              </View>
            </SafeAreaView>
      )
}
export default Home