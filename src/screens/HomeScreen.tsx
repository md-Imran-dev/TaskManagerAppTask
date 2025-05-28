import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import Header from '../components/common/Header';
import DatePicker from '../components/DatePicker/DatePicker';
import QuoteSection from '../components/Quote/QuoteSection';
import TaskList from '../components/Tasks/TaskList';
import FloatingButton from '../components/common/FloatingButton';
import BottomDrawer from '../components/Modal/BottomDrawer';
import {DrawerOption} from '../types';

const HomeScreen: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOption = (option: DrawerOption) => {
    console.log('Selected option:', option.title);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      <Header />
      <DatePicker />
      <QuoteSection />
      <TaskList />

      <FloatingButton onPress={() => setIsDrawerOpen(true)} />

      <BottomDrawer
        visible={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSelect={handleDrawerOption}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
});

export default HomeScreen;
