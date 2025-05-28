import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import TaskItem from './TaskItem';
import {Task} from '../../types';
import {Icons} from '../../assets/icons';

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Schedule a meeting with Harshit Sir',
      time: '09:00 AM',
      tags: ['Habit', 'Must ❤️'],
      completed: true,

      icon: Icons.meeting,
    },
    {
      id: '2',
      title: '2.5 Hours Simran and Meditation',
      time: '05:00 AM',
      tags: ['Habit', 'Must ❤️'],
      completed: false,
      icon: Icons.meditation,
    },
    {
      id: '3',
      title: 'Save 200 Rupees Daily',
      time: '12:00 PM',
      tags: ['Habit', 'Must ❤️'],
      completed: false,
      icon: Icons.save,
    },
    {
      id: '4',
      title: 'Walk 10k Step Daily',
      time: '07:00 AM',
      timeLabel: '12/31',
      tags: ['Habit', 'Important ❤️'],
      completed: false,
      icon: Icons.walk,
    },
    {
      id: '5',
      title: 'Buy Sunflower for Mumma',
      time: '11:00 AM',
      timeLabel: '0/1',
      tags: ['Task', 'Important ❤️'],
      completed: false,
      icon: Icons.sunflower,
    },
    {
      id: '6',
      title: 'Make Mandala and Colour Daily',
      time: '07:30 PM',
      timeLabel: '12/30',
      tags: ['Task', 'Important ❤️'],
      completed: false,
      icon: Icons.daily,
    },
  ]);

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onToggle={toggleTask} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 8,
    paddingBottom: 100,
  },
});

export default TaskList;
