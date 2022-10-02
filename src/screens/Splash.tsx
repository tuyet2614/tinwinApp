import {Animated, Image, SafeAreaView, Text, View} from 'react-native';
import {colors} from '../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
import {useEffect, useState} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';

const Splash: React.FC = () => {
  const [logoOpacity, setLogoOpacity] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  useEffect(() => {
    Animated.sequence([
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.dispatch(StackActions.replace('Onboarding'));
    });
  }, []);

  return (
    <SafeAreaView>
      <LinearGradient
        colors={['#FD7D00', '#FEB336']}
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        locations={[0, 1]}>
        <Animated.View
          className="flex-1 h-full items-center justify-center"
          style={{opacity: logoOpacity}}>
          <Image
            className="h-48 w-60 "
            source={require('../assets/logoTinwin.png')}
          />
          <Text className="text-white font-bold text-2xl">
            Xoá mọi khoảng cách
          </Text>
        </Animated.View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Splash;
