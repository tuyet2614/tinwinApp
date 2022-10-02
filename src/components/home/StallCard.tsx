import { Image, ImageSourcePropType, Text, TouchableOpacity } from 'react-native';

interface Props {
  id: number
  image: ImageSourcePropType;
  text: string;
  onPress?: () => void;
}

const StallCard: React.FC<Props> = (props: Props) => {
  const { image, text, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} className="items-center m-3">
      <Image source={image} className="bg-blue-300 h-28 w-40 rounded-lg" />
      <Text className="text-black">{text}</Text>
    </TouchableOpacity>
  );
};

export default StallCard;
