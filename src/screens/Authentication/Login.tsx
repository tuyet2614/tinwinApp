import {
  faApple,
  faFacebook,
  faGooglePlus,
} from '@fortawesome/free-brands-svg-icons';
import {faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BtnPrimary from '../../components/BtnPrimary';
import {style} from './style';

const Login: React.FC = ({}) => {
  const navigation = useNavigation();
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Image
          source={require('../../assets/logoTinwinPrimary.png')}
          style={style.image}></Image>
        <View style={style.boxTextWelcome}>
          <Text style={style.textWelcome}>
            Chào mừng bạn đến với <Text style={style.textPrimary}>Tinwin.</Text>
          </Text>
        </View>
      </View>
      <View style={style.loginView}>
        <View style={{marginBottom: 20}}>
          <Text style={style.textDescription}>Email / Số điện thoại</Text>
          <TextInput
            style={style.input}
            value={userName}
            placeholder="Nhập Email / Số điện thoại"
            onChange={text => setUserName(text)}
          />
        </View>
        <View>
          <Text style={style.textDescription}>Mật khẩu</Text>
          <TextInput
            style={style.input}
            placeholder="Nhập mật khẩu"
            autoCapitalize="none"
            value={password}
            secureTextEntry={isPasswordSecure}
            onChange={value => setPassword(value)}
          />
          <View
            style={{
              position: 'absolute',
              right: 20,
              top: 40,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPressIn={() => setIsPasswordSecure(!isPasswordSecure)}
              onPressOut={() => setIsPasswordSecure(!isPasswordSecure)}>
              <FontAwesomeIcon icon={faEyeSlash} size={20} color="#AEAEB2" />
            </TouchableOpacity>
            <Text style={{color: '#AEAEB2'}}> | </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              <Text style={style.textForgot}>Quên ?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('LoginSMS');
          }}>
          <Text style={style.textSMS} className="self-end mr-4">
            Đăng nhập bằng sms
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 40, marginBottom: 31}}>
        <BtnPrimary
          style="items-center p-3"
          text="Đăng nhập"
          onPress={() => navigation.navigate('TabBar')}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: '#F2F2F2'}} />
        <View>
          <Text style={{width: 130, textAlign: 'center', color: '#A2A2A2'}}>
            Hoặc tiếp tục với
          </Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: '#F2F2F2'}} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: 200,
          alignSelf: 'center',
          marginTop: 30,
        }}>
        <FontAwesomeIcon icon={faFacebook} color="#3D5E96" size={55} />
        <FontAwesomeIcon icon={faGooglePlus} color="#5089E8" size={55} />
        <FontAwesomeIcon icon={faApple} color="#000000" size={55} />
      </View>
      <View
        style={{
          alignSelf: 'center',
          justifyContent: 'flex-end',
          marginTop: 140,
        }}>
        <Text
          style={{
            color: '#8E8E93',
            fontSize: 14,
            fontWeight: '400',
            lineHeight: 18,
          }}>
          Bạn mới biết đến tinwin?{' '}
          <TouchableOpacity
            className="mt-3"
            onPress={() => navigation.navigate('Register')}>
            <Text style={{color: '#FC832D', marginTop: 3}}>Đăng ký</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
