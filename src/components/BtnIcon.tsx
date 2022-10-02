import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  icon: IconDefinition;
  style: string;
  onPress?: () => void;
  prop?: object;
}

const BtnIcon: React.FC<Props> = props => {
  const {icon, style, onPress, prop} = props;

  return (
    <LinearGradient
      className={`rounded-md`}
      colors={['#FD7D00', '#FEB336']}
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      locations={[0, 1]}>
      <TouchableOpacity className={style} onPress={onPress} {...prop}>
        <FontAwesomeIcon icon={icon} color="white" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default BtnIcon;
