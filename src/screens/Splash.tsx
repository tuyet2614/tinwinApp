import {Image, SafeAreaView, Text, View} from 'react-native';
import {colors} from '../assets/colors';

const Splash: React.FC = () => {
  return (
    <SafeAreaView>
      <View
        className={`flex-1`}
        style={{backgroundColor: colors.primaryGradiant}}>
        <Image
          className="h-32 w-32"
          source={require('../assets/logoTinwin.png')}
        />
      </View>
      {/* <Text>Splash</Text> */}
    </SafeAreaView>
  );
};

export default Splash;
