import {faClose} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';

interface Props {
  onPress?: () => void;
}

const CloseBtn: React.FC<Props> = (props: Props) => {
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesomeIcon icon={faClose} size={25} />
    </TouchableOpacity>
  );
};

export default CloseBtn;
