import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Task} from '../../types';
import {Icons} from '../../assets/icons';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({task, onToggle}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onToggle(task.id)}
      activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        <Image source={task?.icon} style={[styles.icon]} resizeMode="contain" />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {task.title}
        </Text>
        <View style={styles.metaContainer}>
          <View style={styles.timeTable}>
            <Image
              source={Icons.clockMain}
              style={[styles.clockIcon, {tintColor: '#9CA3AF'}]}
              resizeMode="contain"
            />
            <Image
              source={Icons.calculator}
              style={[styles.clockIcon, {tintColor: '#9CA3AF'}]}
              resizeMode="contain"
            />
            <Text style={styles.time}>{task.time}</Text>
            {task.timeLabel && (
              <Text style={styles.timeLabel}>{task.timeLabel}</Text>
            )}
          </View>
          <View style={styles.tagContainer}>
            {task.tags.map((tag, index) => (
              <React.Fragment key={index}>
                <Text style={styles.tag}>{tag}</Text>
                {index < task.tags.length - 1 && (
                  <Text style={styles.tagSeparator}>|</Text>
                )}
              </React.Fragment>
            ))}
            <React.Fragment>
              <Image
                source={Icons.flag}
                style={[styles.flag, {tintColor: '#9CA3AF'}]}
                resizeMode="contain"
              />
            </React.Fragment>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => onToggle(task.id)}
        style={styles.checkButton}>
        {task.completed ? (
          <Image
            source={Icons.tick}
            style={styles.checkIcon}
            resizeMode="contain"
          />
        ) : (
          <Image
            source={Icons.circle}
            style={[styles.checkIcon, {tintColor: '#E5E7EB'}]}
            resizeMode="contain"
          />
        )}
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
  icon: {
    width: 53,
    height: 53,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  metaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  clockIcon: {
    width: 12,
    height: 12,
    // marginRight: 4,
    tintColor: 'red  ',
  },
  time: {
    fontSize: 12,
    color: '#6B7280',
    // marginRight: 4,
  },
  timeLabel: {
    fontSize: 12,
    color: '#10B981',
    // marginRight: 8,
  },
  separator: {
    width: 1,
    height: 12,
    backgroundColor: '#E5E7EB',
    // marginRight: 8,
  },
  tag: {
    fontSize: 12,
    color: '#6B7280',
  },
  tagSeparator: {
    fontSize: 12,
    color: '#D1D5DB',
    // marginHorizontal: 4,
  },
  checkButton: {
    padding: 4,
  },
  checkIcon: {
    width: 22,
    height: 22,
  },
  flag: {
    width: 12,
    height: 12,
  },
  timeTable: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FA',
    borderRadius: 6,
    padding: 4,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    backgroundColor: '#F6F6F6',
    borderRadius: 6,
    padding: 4,
  },
});

export default TaskItem;
