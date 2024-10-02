import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import Swiper from 'react-native-swiper';
import { onboarding } from '@/constants';
import CustomButton from '@/components/CustomButton';

const WelcomeScreen = () => {
	const swiperRef = React.useRef<Swiper>(null)
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const isLastSlide = activeIndex === onboarding.length - 1;

	const navigateToSignup = () => {
		router.replace("/(auth)/sign-up")
	}

	return (
		<SafeAreaView className='flex h-full items-center justify-between bg-white'  >
			<TouchableOpacity onPress={navigateToSignup} className='w-full flex justify-end items-end p-5'  >
				<Text className='text-black font-JakartaBold' >Skip</Text>
			</TouchableOpacity>
			<Swiper ref={swiperRef} onIndexChanged={(index) => setActiveIndex(index)} loop={false} dot={<View className='w-[32px] h-[4px] mx-1 bg-[#E2E8F0]' />} activeDot={<View className='w-[32px] h-[4px] mx-1 bg-[#0286FF]' />} style={{borderColor: 'blue', borderWidth: 5}} >
				{
					onboarding.map((item, index) => (
						<View key={item.id} className="flex items-center justify-center p-5">
            <Image
              source={item.image}
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <View className="flex flex-row items-center justify-center w-full mt-10">
              <Text className="text-black text-3xl font-bold mx-10 text-center">
                {item.title}
              </Text>
            </View>
            <Text className="text-md font-JakartaSemiBold text-center text-[#858585] mx-10 mt-3">
              {item.description}
            </Text>
          </View>
					))
				}
			</Swiper>
			<CustomButton 
       title={isLastSlide ? "Get Started" : "Next"}
			 onPress={() =>
				 isLastSlide
					 ? navigateToSignup()
					 : swiperRef.current?.scrollBy(1)
			 }
			 className="w-11/12 mt-10 mb-5"
			 />
		</SafeAreaView>
	)
}

export default WelcomeScreen
