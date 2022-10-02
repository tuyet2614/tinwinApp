import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';

interface Props {
  style?: string;
  color?: string;
}

const SearchBtn: React.FC<Props> = (props: Props) => {
  const {style, color} = props;

  return (
    <TouchableOpacity className={style}>
      <FontAwesomeIcon icon={faSearch} color={color} size={25} />
    </TouchableOpacity>
  );
};

export default SearchBtn;
