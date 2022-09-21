import {useNavigation} from '@react-navigation/native';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const Login: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text className="text-blue-400">Login</Text>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text>Đăng ký</Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default Login;
