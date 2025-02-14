/* eslint-disable @typescript-eslint/no-explicit-any */
import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Colors from '../../../assets/CustomeColors/colors';
import onboardin1 from '../../../assets/onboarding/onboarding1.png';
import onboardin2 from '../../../assets/onboarding/onboarding2.png';
import onboardin3 from '../../../assets/onboarding/onboarding3.png';
import Text from '../../../src/components/libraries/Text/index';
import TouchableOpacity from '../../../src/components/libraries/TouchableOpacity';
import { hs, ms, vs } from '../../../utils/design/design';

interface OnboardingItem {
  id: string;
  image: any;
  title: string;
  subtitle: string;
}

const onboardingData: OnboardingItem[] = [
  {
    id: '1',
    image: onboardin1,
    title: 'Quick Delivery At Your Doorstep',
    subtitle: 'Enjoy quick pick-up and delivery to your destination',
  },
  {
    id: '2',
    image: onboardin2,
    title: 'Flexible Payment',
    subtitle:
      'Different modes of payment either before and after delivery without stress',
  },
  {
    id: '3',
    image: onboardin3,
    title: 'Real-time Tracking',
    subtitle:
      'Track your packages/items from the comfort of your home till final destination',
  },
];

const Welcome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flashListRef = useRef<FlashList<OnboardingItem> | null>(null);
  const router = useRouter();

  // Sync currentIndex with FlashList scroll position
  const handleIndexChanged = (event: {
    nativeEvent: { contentOffset: { x: any } };
  }) => {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / Dimensions.get('window').width);
    setCurrentIndex(index);
  };

  const handleNext = () => {
    // Move to the next item if not at the last index
    if (flashListRef.current && currentIndex < onboardingData.length - 1) {
      flashListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSkip = () => {
    if (flashListRef.current) {
      flashListRef.current.scrollToIndex({ index: onboardingData.length - 1 });
      setCurrentIndex(onboardingData.length - 1);
    }
  };

  const renderItem = ({ item }: { item: OnboardingItem }) => (
    <View style={styles.slide}>
      <Image source={item.image} style={styles.image} />
      <Text
        className="text-customBlue items-center justify-center text-center"
        style={styles.boldtext}
      >
        {item.title}
      </Text>
      <Text className="text-center dark:text-white" style={styles.SimpleText}>
        {item.subtitle}
      </Text>
    </View>
  );

  // Add effect to handle initial scroll to currentIndex
  useEffect(() => {
    if (flashListRef.current && currentIndex !== 0) {
      flashListRef.current.scrollToIndex({ index: currentIndex });
    }
  }, [currentIndex]);

  return (
    <View className="flex-1  bg-white dark:bg-black items-center">
      {/* FlashList for onboarding slides */}
      <FlashList
        style={styles.flash}
        ref={flashListRef}
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={Dimensions.get('window').width}
        onMomentumScrollEnd={handleIndexChanged}
      />

      {/* Dots indicator */}
      <View
        style={styles.dotsContainer}
        className="flex-row justify-center items-center mt-5"
      >
        {onboardingData.map((_, index) => (
          <View
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>

      {/* Skip and Next Buttons */}
      {currentIndex !== onboardingData.length - 1 && (
        <View
          className="flex-row justify-between w-full"
          style={styles.bottomButtons}
        >
          <TouchableOpacity
            className="items-center text-center justify-center"
            style={styles.skipbt}
            onPress={handleSkip}
          >
            <Text className="text-customBlue font-bold">Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-customBlue items-center text-center justify-center"
            onPress={handleNext}
            style={styles.nextbt}
          >
            <Text className="text-white dark:text-white font-bold">Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Signup Button and Text */}
      {currentIndex === onboardingData.length - 1 && (
        <View style={styles.bottonsection}>
          <TouchableOpacity
            className="bg-customBlue items-center text-center justify-center"
            onPress={() => router.push('/signup')}
            style={styles.signupButton}
          >
            <Text className="text-white dark:text-white font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center" style={styles.bottomtext}>
            <Text className="text-customGray">Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/signin')}>
              <Text className="text-customBlue font-bold">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  flash: {},
  slide: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: ms(20),
  },
  image: {
    marginTop: vs(120),
    height: vs(320),
    width: hs(320),
  },
  boldtext: {
    fontSize: ms(25),
    width: hs(300),
    fontWeight: '600',
    marginTop: vs(50),
  },
  SimpleText: {
    width: hs(300),
    marginTop: vs(8),
    fontSize: ms(14),
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    marginBottom: vs(170),
  },
  dot: {
    width: hs(8),
    height: hs(8),
    borderRadius: ms(4),
    backgroundColor: Colors.customeGray,
    marginHorizontal: hs(3),
  },
  activeDot: {
    backgroundColor: Colors.customBlue,
  },
  bottomButtons: {
    marginBottom: vs(50),
    width: hs(340),
    position: 'absolute',
    bottom: 0,
  },
  nextbt: {
    width: hs(60),
    borderRadius: ms(5),
  },
  skipbt: {
    width: hs(60),
    height: vs(30),
    borderRadius: ms(5),
    borderWidth: ms(2),
    borderColor: Colors.customBlue,
  },
  signupButton: {
    width: hs(340),
    height: vs(40),
    borderRadius: ms(4),
  },
  bottonsection: {
    position: 'absolute',
    bottom: 0,

    marginBottom: vs(40),
  },
  bottomtext: {
    marginTop: vs(5),
  },
});

export default Welcome;
