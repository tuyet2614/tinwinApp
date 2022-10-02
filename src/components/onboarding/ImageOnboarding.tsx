import {Image, View} from 'react-native';

interface Props {
  image: string;
}

const ImageOnboarding: React.FC<Props> = (props: Props) => {
  const {image} = props;

  return (
    <View className="h-80 items-center justify-between">
      <Image
        source={require('../../assets/logoTinwinPrimary.png')}
        className="w-18 h-14"
      />
      {/* <View className="h-32"></View> */}
      <Image
        source={
          image === '1'
            ? require('../../assets/onboarding/onboarding1.png')
            : image === '2'
            ? require('../../assets/onboarding/onboarding2.png')
            : require('../../assets/onboarding/onboarding3.png')
        }
        className="h-44 w-44"
      />
    </View>
  );
};

export default ImageOnboarding;
