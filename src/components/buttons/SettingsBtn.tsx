import {faGear} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

const SettingsBtn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <FontAwesomeIcon icon={faGear} color="white" size={25} />
    </TouchableOpacity>
  );
};

export default SettingsBtn;
