import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Platform, SafeAreaView, Text, View} from 'react-native';

const TabBar: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();

  const screenOptions = ({route}) => ({
    tabBarIndicatorStyle: {
      backgroundColor: '#FC832D',
      height: 3,
    },
    tabBarActiveTintColor: '#636366',
    tabBarStyle: {
      margin: 10,
      backgroundColor: 'white',
    },
    indicatorStyle: {
      backgroundColor: '#333',
      height: 4,
    },
  });

  return <View className={`flex-1 h-screen`}></View>;
};

export default TabBar;
