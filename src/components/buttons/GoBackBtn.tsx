import {faAngleLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';

interface Props {
  style?: string;
  color?: string;
}

const GoBackBtn: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const {style, color} = props;

  return (
    <TouchableOpacity className={style} onPress={() => navigation.goBack()}>
      <FontAwesomeIcon icon={faAngleLeft} color={color} size={25} />
    </TouchableOpacity>
  );
};

export default GoBackBtn;
