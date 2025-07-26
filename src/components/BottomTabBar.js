import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { getTheme } from '../constants/theme';

const BottomTabBar = ({ state, descriptors, navigation }) => {
  const icons = ['🏠', '🔍', '➕', '❤️', '👤'];
  const labels = ['Home', 'Search', 'Create', 'Notifications', 'Profile'];
  const { isDarkMode } = useSelector(state => state.theme);
  const theme = getTheme(isDarkMode);

  return (
    <View style={[styles.container, {
      backgroundColor: theme.colors.card,
      borderTopColor: theme.colors.border
    }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = labels[index];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
          >
            <Text style={[styles.tabIcon, isFocused && styles.activeTabIcon]}>
              {icons[index]}
            </Text>
            <Text style={[
              styles.tabLabel,
              { color: theme.colors.text.secondary },
              isFocused && { color: theme.colors.primary, fontWeight: '600' }
            ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 1,
    paddingTop: 8,
    paddingBottom: 24,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  tabIcon: {
    fontSize: 24,
    marginBottom: 4,
    opacity: 0.5,
  },
  activeTabIcon: {
    opacity: 1,
  },
  tabLabel: {
    fontSize: 12,
  },
});

export default BottomTabBar; 