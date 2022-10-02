import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  color: string;
  style?: string;
}

const CartBtn: React.FC<Props> = (props: Props) => {
  const { color, style } = props;

  return (
    <TouchableOpacity className={`${style}`}>
      <FontAwesomeIcon icon={faCartShopping} color={color} size={25} />
      <View className="bg-blue-200 w-4 h-4 absolute items-center justify-center rounded-full top-2 right-2">
        <Text className="text-white text-xs">0</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CartBtn;
