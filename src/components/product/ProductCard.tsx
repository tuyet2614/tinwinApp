import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import BtnIcon from '../BtnIcon';

interface Props {
  item: object;
}

const ProductCard: React.FC<Props> = (props: Props) => {
  const navigation = useNavigation();
  const {item} = props;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ProductDetail', {id: item.id})}
      className="p-3 border border-gray-200 rounded-lg mb-3"
      style={{width: 185}}>
      <Image source={item.image} className={`w-full h-32`} />
      <Text className="text-lg font-bold text-black">{item.name}</Text>
      <Text>Đã bán 200</Text>
      <Rating
        style={{alignItems: 'flex-start', marginTop: 12}}
        type="star"
        startingValue={item.rating}
        imageSize={10}
        readonly
        ratingCount={5}
      />
      <Text className="text-orange-primary text-xl font-bold my-2">
        {item.price}
      </Text>
      <View className="flex-row justify-between">
        <TouchableOpacity className=" rounded-lg px-5 py-2 bg-orange-100">
          <Text className="text-black">Mua ngay</Text>
        </TouchableOpacity>
        <BtnIcon icon={faCartArrowDown} style="py-2 px-4" />
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
