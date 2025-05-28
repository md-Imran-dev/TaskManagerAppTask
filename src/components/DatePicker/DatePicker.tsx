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
            <Text
              style={[
                styles.dayText,
                index === selectedIndex && styles.selectedText,
              ]}>
              {item.day}
            </Text>
            <Text
              style={[
                styles.dateText,
                index === selectedIndex && styles.selectedText,
              ]}>
              {item.date}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: '#F8F9FA',
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
  dateButton: {
    width: 46,
    height: 64,
    borderRadius: 16,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  selectedButton: {
    backgroundColor: '#5B47E0',
  },
  dayText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
  },
  selectedText: {
    color: '#FFFFFF',
  },
});

export default DatePicker;
