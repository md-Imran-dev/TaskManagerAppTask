import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

interface DateItem {
  day: string;
  date: number;
  isSelected: boolean;
}

const DatePicker: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(3);

  const dates: DateItem[] = [
    {day: 'Sun', date: 15, isSelected: false},
    {day: 'Mon', date: 16, isSelected: false},
    {day: 'Tue', date: 17, isSelected: false},
    {day: 'Wed', date: 18, isSelected: true},
    {day: 'Thu', date: 19, isSelected: false},
    {day: 'Fri', date: 20, isSelected: false},
    {day: 'Sat', date: 21, isSelected: false},
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {dates.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dateButton,
              index === selectedIndex && styles.selectedButton,
            ]}
            onPress={() => setSelectedIndex(index)}>
            <View
              style={[
                styles.dayContainer,
                index === selectedIndex && styles.selectedDayContainer,
              ]}>
              <Text
                style={[
                  styles.dayText,
                  index === selectedIndex && styles.selectedDayText,
                ]}>
                {item.day}
              </Text>
            </View>
            <View
              style={[
                styles.dateContainer,
                index === selectedIndex && styles.selectedDateContainer,
              ]}>
              <Text
                style={[
                  styles.dateText,
                  index === selectedIndex && styles.selectedDateText,
                ]}>
                {item.date}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  dateButton: {
    width: 45,
    height: 55,
    borderRadius: 18,
    marginHorizontal: 8,
    overflow: 'hidden',
    backgroundColor: '#F3F4F6',
  },
  selectedButton: {
    backgroundColor: '#4546D4',
  },
  dayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  selectedDayContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  dateContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E7EB',
    borderRadius: 14,
    overflow: 'hidden',
  },
  selectedDateContainer: {
    backgroundColor: '#3435B8',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
  selectedDayText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  dateText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#374151',
  },
  selectedDateText: {
    color: '#FFFFFF',
  },
});

export default DatePicker;
