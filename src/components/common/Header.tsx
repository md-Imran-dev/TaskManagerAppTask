import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      <View style={styles.statusBar}>
        <Text style={styles.time}>9:41</Text>
        <View style={styles.rightIcons}>
          <Icon
            name="signal"
            size={14}
            color="#1F2937"
            style={styles.statusIcon}
          />
          <Icon
            name="wifi"
            size={14}
            color="#1F2937"
            style={styles.statusIcon}
          />
          <Icon name="battery" size={14} color="#1F2937" />
        </View>
      </View>

      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Icon name="send" size={18} color="#FFFFFF" />
          </View>
          <Text style={styles.appName}>WingsFly</Text>
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="search" size={20} color="#374151" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="calendar" size={20} color="#374151" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="help-circle" size={20} color="#374151" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F9FA',
  },
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 8,
  },
  time: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginRight: 6,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#5B47E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  appName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 4,
  },
});

export default Header;
