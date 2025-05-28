import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';
import {DrawerOption} from '../../types';

const {height} = Dimensions.get('window');

const DRAWER_OPTIONS: DrawerOption[] = [
  {
    id: '1',
    title: 'Habit',
    subtitle:
      'Activity that repeats over time it has detailed tracking and statistics.',
    icon: 'refresh-cw',
  },
  {
    id: '2',
    title: 'Recurring Task',
    subtitle:
      'Activity that repeats over time it has detailed tracking and statistics.',
    icon: 'repeat',
  },
  {
    id: '3',
    title: 'Task',
    subtitle: 'Single instance activity without tracking over time.',
    icon: 'check',
  },
  {
    id: '4',
    title: 'Goal of the Day',
    subtitle:
      'A specific target set for oneself to achieve within a single day.',
    icon: 'target',
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
                <Icon name={option.icon} size={24} color="#374151" />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionSubtitle}>{option.subtitle}</Text>
              </View>

              <Icon name="chevron-right" size={20} color="#9CA3AF" />
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
});

export default BottomDrawer;
