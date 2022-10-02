import {Text} from 'react-native';

interface Props {
  text: string;
}

const SubTitleOnboarding: React.FC<Props> = (props: Props) => {
  const {text} = props;

  return <Text className="text-lg text-center w-3/4">{text}</Text>;
};

export default SubTitleOnboarding;
