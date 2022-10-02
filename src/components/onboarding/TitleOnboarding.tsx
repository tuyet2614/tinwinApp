import {Text, View} from 'react-native';

interface Props {
  title: string;
}

const TitleOnboarding: React.FC<Props> = (props: Props) => {
  const {title} = props;

  return (
    <View>
      <Text className="font-bold text-2xl text-black my-5">{title}</Text>
    </View>
  );
};

export default TitleOnboarding;
