import Colors from '@assets/CustomeColors/colors';
import { Ionicons } from '@expo/vector-icons';
import Back from 'assets/images/left-back-blue.svg';
import OriganDatail from 'assets/main/sendPackege/details.svg';
import Map from 'assets/main/sendPackege/map.svg';
import PackageDetail from 'assets/main/sendPackege/packegdatails.svg';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { hs, ms, vs } from '../../../utils/design/design';

const Index = () => {
  const router = useRouter();
  const [originAddress, setOriginAddress] = useState('');
  const [originCountry, setOriginCountry] = useState('');
  const [originPhone, setOriginPhone] = useState('');
  const [originOther, setOriginOther] = useState('');

  const [destinationAddress, setDestinationAddress] = useState('');
  const [destinationCountry, setDestinationCountry] = useState('');
  const [destinationPhone, setDestinationPhone] = useState('');
  const [destinationOther, setDestinationOther] = useState('');
  const [destinationDestination, setDestinationDestinatio] = useState('');

  const [packageItems, setPackageItems] = useState('');
  const [packageWeight, setPackageWeight] = useState('');
  const [packageWorth, setPackageWorth] = useState('');
  return (
    <View className="flex-1 bg-white dark:bg-customeBlack">
      <View className="flex-row" style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Back style={styles.image} />
        </TouchableOpacity>

        <Text
          style={styles.headertext}
          className="text-customGray font-medium text-center self-center justify-center"
        >
          Send a package
        </Text>
      </View>
      <View style={styles.hrLine} />
      <View style={styles.origanContainer}>
        <View className="flex-row items-center">
          <OriganDatail />
          <Text className="font-bold" style={styles.inptheading}>
            Origin Details
          </Text>
        </View>
        <View style={styles.card} className="bg-white">
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={originAddress}
            placeholderTextColor={Colors.customlightGray}
            onChangeText={setOriginAddress}
          />
        </View>
        <View style={styles.card} className="bg-white">
          <TextInput
            style={styles.input}
            placeholder="Country"
            value={originCountry}
            placeholderTextColor={Colors.customlightGray}
            onChangeText={setOriginCountry}
          />
        </View>
        <View style={styles.card} className="bg-white">
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={originPhone}
            placeholderTextColor={Colors.customlightGray}
            onChangeText={setOriginPhone}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.card} className="bg-white">
          <TextInput
            style={styles.input}
            placeholder="Other"
            placeholderTextColor={Colors.customlightGray}
            value={originOther}
            onChangeText={setOriginOther}
          />
        </View>
      </View>
      <View style={styles.destinationContainer}>
        <View className="flex-row items-center">
          <Map />
          <Text className="font-bold items-center" style={styles.inptheading}>
            Destination Details
          </Text>
        </View>
        <View style={styles.card} className="bg-white">
          <TextInput
            style={styles.input}
            placeholder="Address"
            placeholderTextColor={Colors.customlightGray}
            value={destinationAddress}
            onChangeText={setDestinationAddress}
          />
        </View>
        <View style={styles.card} className="bg-white">
          <TextInput
            style={styles.input}
            placeholder="State Country"
            value={destinationCountry}
            placeholderTextColor={Colors.customlightGray}
            onChangeText={setDestinationCountry}
          />
        </View>
        <View style={styles.card} className="bg-white">
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={destinationPhone}
            onChangeText={setDestinationPhone}
            placeholderTextColor={Colors.customlightGray}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.card} className="bg-white">
          <TextInput
            style={styles.input}
            placeholder="Others"
            placeholderTextColor={Colors.customlightGray}
            value={destinationOther}
            onChangeText={setDestinationOther}
          />
        </View>
        <View
          className="flex-row  items-center"
          style={{ marginVertical: vs(3) }}
        >
          <PackageDetail />
          <TextInput
            style={styles.input}
            placeholder="Add destination"
            placeholderTextColor={Colors.customeGray}
            value={destinationDestination}
            onChangeText={setDestinationDestinatio}
          />
        </View>
      </View>
      <View style={styles.inputcontainer}>
        <View>
          <Text className="font-bold items-center">Package Details</Text>
        </View>
        <View style={styles.card} className="bg-white">
          <TextInput
            style={styles.input}
            placeholder="Package Items"
            value={packageItems}
            placeholderTextColor={Colors.customlightGray}
            onChangeText={setPackageItems}
          />
        </View>
        <View style={styles.card} className="bg-white">
          <TextInput
            style={styles.input}
            placeholder="Weight of item(kg)"
            value={packageWeight}
            placeholderTextColor={Colors.customlightGray}
            onChangeText={setPackageWeight}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.card} className="bg-white">
          <TextInput
            style={styles.input}
            placeholder="Worth of items"
            value={packageWorth}
            placeholderTextColor={Colors.customlightGray}
            onChangeText={setPackageWorth}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.bottomcontainer}>
        <Text className="font-bold">Select delivery type</Text>
        <View
          className="flex-row justify-between"
          style={{ marginTop: vs(10) }}
        >
          <View
            style={styles.bottomcard}
            className="bg-white items-center justify-center"
          >
            <Ionicons
              name="time-outline"
              size={24}
              color={Colors.customeGray}
            />
            <Text className="text-customGray">instant delivery</Text>
          </View>
          <View
            style={styles.bottomcard}
            className="bg-white items-center justify-center"
          >
            <Ionicons name="calendar" size={24} color={Colors.customeGray} />
            <Text className="text-customGray">Sheduled delivery</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  image: {
    marginLeft: hs(20),
  },
  header: {
    marginTop: vs(50),
    marginBottom: vs(5),
  },
  headertext: {
    marginLeft: hs(95),
    fontSize: ms(15),
  },
  hrLine: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.customlightGray,
    marginTop: vs(10),
    marginBottom: vs(3),
    width: '100%',
  },
  card: {
    marginVertical: vs(3),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingHorizontal: hs(5),
    paddingVertical: vs(7),
  },
  inputcontainer: {
    marginHorizontal: hs(20),
  },
  inptheading: {
    marginLeft: hs(5),
  },
  destinationContainer: {
    marginHorizontal: hs(20),
    marginBottom: vs(8),
  },
  origanContainer: {
    marginHorizontal: hs(20),
    marginBottom: vs(30),
  },
  bottomcontainer: {
    marginHorizontal: hs(20),
    marginTop: vs(30),
  },
  bottomcard: {
    marginVertical: vs(3),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    height: vs(80),
    width: hs(155),
    borderRadius: ms(10),
  },
  input: {},
});
