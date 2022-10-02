import {IconProp} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {TouchableOpacity} from 'react-native';

interface Props {
  icon: IconProp;
  style?: string;
}

const IconBtnOnly: React.FC<Props> = (props: Props) => {
  const {icon, style} = props;

  return (
    <TouchableOpacity className={style}>
      <FontAwesomeIcon icon={icon} size={20} />
    </TouchableOpacity>
  );
};

export default IconBtnOnly;
