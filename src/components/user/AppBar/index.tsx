import scanner from '@assets/icons/user/scan.png';
import { getRespValue } from '@utils/design/design';
import { Image, Pressable, Text, View } from 'react-native';

const AppBar = () => {
  return (
    <View className="px-4 py-4 pb-5 flex-row justify-between items-center">
      <Pressable
        style={{
          width: getRespValue(65),
          height: getRespValue(65),
        }}
        className="bg-[#fff]  rounded-full flex justify-center items-center"
      >
        <Text className="text-xl font-aeonik-medium font-bold text-gray-800">
          HR
        </Text>
      </Pressable>
      <Pressable>
        <Image
          style={{
            width: getRespValue(65),
            height: getRespValue(65),
          }}
          source={scanner}
        />
      </Pressable>
    </View>
  );
};

export default AppBar;
