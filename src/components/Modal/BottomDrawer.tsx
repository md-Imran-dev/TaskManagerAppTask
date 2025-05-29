import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {DrawerOption} from '../../types';
import {Icons} from '../../assets/icons';

const {height} = Dimensions.get('window');

const DRAWER_OPTIONS: DrawerOption[] = [
  {
    id: '1',
    title: 'Habit',
    subtitle:
      'Activity that repeats over time it has detailed tracking and statistics.',
    icon: Icons.habit,
  },
  {
    id: '2',
    title: 'Recurring Task',
    subtitle:
      'Activity that repeats over time it has detailed tracking and statistics.',
    icon: Icons.recruiting,
  },
  {
    id: '3',
    title: 'Task',
    subtitle: 'Single instance activity without tracking over time.',
    icon: Icons.task,
  },
  {
    id: '4',
    title: 'Goal of the Day',
    subtitle:
      'A specific target set for oneself to achieve within a single day.',
    icon: Icons.goal,
  },
];

interface BottomDrawerProps {
  visible: boolean;
  onClose: () => void;
  onSelect: (option: DrawerOption) => void;
}

const BottomDrawer = ({visible, onClose, onSelect}: BottomDrawerProps) => {
  const translateY = useSharedValue(height);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      translateY.value = withSpring(0, {
        damping: 20,
        stiffness: 100,
      });
      opacity.value = withTiming(1, {duration: 300});
    } else {
      translateY.value = withSpring(height, {
        damping: 20,
        stiffness: 100,
      });
      opacity.value = withTiming(0, {duration: 200});
    }
  }, [visible, opacity, translateY]);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const backdropStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value * 0.5,
    };
  });

  const handleOptionPress = (option: DrawerOption) => {
    onSelect(option);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onClose}>
          <Animated.View style={[styles.backdrop, backdropStyle]} />
        </TouchableWithoutFeedback>

        <Animated.View style={[styles.drawer, animatedStyles]}>
          {DRAWER_OPTIONS.map(option => (
            <TouchableOpacity
              key={option.id}
              style={styles.optionButton}
              onPress={() => handleOptionPress(option)}
              activeOpacity={0.7}>
              <View style={styles.iconContainer}>
                <Image source={option.icon} style={styles.icon} />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
              </View>

              <Image style={styles.arrow} source={Icons.arrow2} />
            </TouchableOpacity>
          ))}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#000',
  },
  drawer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 20,
    paddingBottom: 34,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  optionSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    lineHeight: 18,
  },
  icon: {
    width: 24,
    height: 24,
  },
  arrow: {
    width: 7,
    height: 14,
  },
});

export default BottomDrawer;
