import {
  faBell,
  faHome,
  faRing,
  faStore,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';
import HomeScreen from '../screens/home/HomeScreen';

const TabBar: React.FC = () => {
  const Tab = createBottomTabNavigator();

  const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarIcon: ({focused, color, size}) => {
      return (
        <FontAwesomeIcon
          icon={
            route.name === 'Trang chủ'
              ? faHome
              : route.name === 'Danh mục'
              ? faStore
              : route.name === 'Thông báo'
              ? faBell
              : faUser
          }
          color={color}
          size={20}
        />
      );
    },
    tabBarActiveTintColor: '#FD7D00',
    tabBarStyle: {
      height: Platform.OS === 'ios' ? 100 : 70,
      paddingTop: 10,
    },
    tabBarOptions: {
      keyboardHidesTabBar: true,
    },
    tabBarLabelStyle: {
      marginBottom: 15,
    },
    tabBarHideOnKeyboard: true,
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Trang chủ" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default TabBar;
