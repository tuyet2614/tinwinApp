import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useState } from 'react';
import {
  FlatList,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeTitle from '../home/HomeTitle';
import StallCard from '../home/StallCard';
import CategoryCard from './CategoryCard';
import { useNavigation } from '@react-navigation/native';


interface Props {
  data: object[];
  title: string;
  icon: ImageSourcePropType;
  flatlistStyle?: object;
  textBtn: string;
}

const CategoriesContainer: React.FC<Props> = (props: Props) => {
  const { data, icon, title, flatlistStyle, textBtn } = props;

  const [isEnd, setIsEnd] = useState(false);
  const navigation = useNavigation()

  return (
    <View>
      <HomeTitle title={title} icon={icon} textBtn={textBtn} />
      <FlatList
        onScrollBeginDrag={() => setIsEnd(false)}
        onEndReached={() => setIsEnd(true)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={flatlistStyle}
        columnWrapperStyle={
          flatlistStyle.num !== undefined ? flatlistStyle : undefined
        }
        numColumns={
          flatlistStyle.num !== undefined ? flatlistStyle.num : undefined
        }
        horizontal={flatlistStyle.num !== undefined ? false : true}
        data={data}
        keyExtractor={key => key.id}
        renderItem={({ item }) =>
          title === 'Ngành hàng' ? (
            <CategoryCard image={item.image} text={item.name} />
          ) : (
            <StallCard id={item.id} image={item.image} text={item.name} onPress={() => navigation.navigate('ShopDetail', { id: item.id })} />
          )
        }
      />
      {flatlistStyle.num === undefined ? (
        <View className="bg-gray-200 w-8 h-1 flex-row rounded-full my-5 self-center">
          <View
            className={`bg-${!isEnd ? 'orange-primary' : 'gray-200'
              } w-1/2 h-1 rounded-full`}></View>
          <View
            className={`bg-${isEnd ? 'orange-primary' : 'gray-200'
              } w-1/2 h-1 rounded-full`}></View>
        </View>
      ) : (
        <TouchableOpacity className="flex-row items-center self-center my-3">
          <Text className="text-orange-primary mr-2">Hiển thị thêm</Text>
          <FontAwesomeIcon icon={faAngleDown} color="#FD7D00" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CategoriesContainer;
