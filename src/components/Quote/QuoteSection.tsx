import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const QuoteSection: React.FC = () => {
  const progress = 0.6;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Quote</Text>
      <Text style={styles.quote}>
        "You must do the things, you think you cannot do."
      </Text>

      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>
          Progress {Math.round(progress * 100)}%
        </Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, {width: `${progress * 100}%`}]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  quote: {
    fontSize: 14,
    lineHeight: 20,
    color: '#374151',
    marginBottom: 16,
  },
  progressContainer: {
    gap: 8,
  },
  progressLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#5B47E0',
    borderRadius: 4,
  },
});

export default QuoteSection;
