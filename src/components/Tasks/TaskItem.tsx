import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Task} from '../../types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({task, onToggle}) => {
  const getTaskIcon = (title: string) => {
    if (title.includes('meeting') || title.includes('Meeting')) return 'users';
    if (title.includes('Meditation') || title.includes('Simran')) return 'user';
    if (title.includes('Save') || title.includes('Rupees'))
      return 'trending-up';
    if (title.includes('Walk') || title.includes('Step')) return 'activity';
    if (title.includes('Buy') || title.includes('Sunflower')) return 'user';
    if (title.includes('Make') || title.includes('Mandala')) return 'edit-3';
    return 'check-square';
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onToggle(task.id)}
      activeOpacity={0.7}>
      <View
        style={[styles.iconContainer, {backgroundColor: task.backgroundColor}]}>
        <Icon name={getTaskIcon(task.title)} size={20} color={task.iconColor} />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {task.title}
        </Text>
        <View style={styles.metaContainer}>
          <Icon
            name="clock"
            size={11}
            color="#9CA3AF"
            style={styles.clockIcon}
          />
          <Text style={styles.time}>{task.time}</Text>
          {task.timeLabel && (
            <Text style={styles.timeLabel}>{task.timeLabel}</Text>
          )}
          <View style={styles.separator} />
          {task.tags.map((tag, index) => (
            <React.Fragment key={index}>
              <Text style={styles.tag}>{tag}</Text>
              {index < task.tags.length - 1 && (
                <Text style={styles.tagSeparator}>|</Text>
              )}
            </React.Fragment>
          ))}
        </View>
      </View>

      <TouchableOpacity
        onPress={() => onToggle(task.id)}
        style={styles.checkButton}>
        <Icon
          name={task.completed ? 'check-circle' : 'circle'}
          size={22}
          color={task.completed ? '#10B981' : '#E5E7EB'}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    marginRight: 4,
  },
  time: {
    fontSize: 12,
    color: '#9CA3AF',
    marginRight: 6,
  },
  timeLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    marginRight: 8,
  },
  separator: {
    width: 1,
    height: 12,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 8,
  },
  tag: {
    fontSize: 12,
    color: '#6B7280',
  },
  tagSeparator: {
    fontSize: 12,
    color: '#E5E7EB',
    marginHorizontal: 4,
  },
  checkButton: {
    padding: 4,
  },
});

export default TaskItem;
