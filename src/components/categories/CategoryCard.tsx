import { useNavigation } from '@react-navigation/native';
import { Image, ImageSourcePropType, Text, TouchableOpacity } from 'react-native';

interface Props {
  item: object;
}

const CategoryCard: React.FC<Props> = (props: Props) => {
  const { image, text } = props;
  const navigation = useNavigation()

  return (
    <TouchableOpacity className="items-center mb-5">
      <Image source={image} className="m-3" />
      <Text className="text-black">{text}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
