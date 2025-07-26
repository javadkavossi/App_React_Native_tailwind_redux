import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { getTheme } from '../constants/theme';
import { toggleTheme, setTheme } from '../store/slices/themeSlice';

const SettingsScreen = () => {
    const { isDarkMode } = useSelector(state => state.theme);
    const dispatch = useDispatch();
    const theme = getTheme(isDarkMode);
    const insets = useSafeAreaInsets();

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };

    const handleThemeChange = (isDark) => {
        dispatch(setTheme(isDark));
    };

    const settingsItems = [
        {
            id: 'theme',
            title: 'App Theme',
            subtitle: isDarkMode ? 'Dark Mode' : 'Light Mode',
            icon: isDarkMode ? '🌙' : '☀️',
            type: 'theme',
        },
        {
            id: 'notifications',
            title: 'Notifications',
            subtitle: 'Manage notification settings',
            icon: '🔔',
            type: 'toggle',
            value: true,
        },
        {
            id: 'privacy',
            title: 'Privacy',
            subtitle: 'Control your privacy settings',
            icon: '🔒',
            type: 'navigate',
        },
        {
            id: 'security',
            title: 'Security',
            subtitle: 'Manage your account security',
            icon: '🛡️',
            type: 'navigate',
        },
        {
            id: 'help',
            title: 'Help & Support',
            subtitle: 'Get help and contact support',
            icon: '❓',
            type: 'navigate',
        },
        {
            id: 'about',
            title: 'About',
            subtitle: 'App version and information',
            icon: 'ℹ️',
            type: 'navigate',
        },
    ];

    const renderSettingItem = (item) => {
        return (
            <TouchableOpacity
                key={item.id}
                style={[styles.settingItem, {
                    backgroundColor: theme.colors.card,
                    borderBottomColor: theme.colors.border
                }]}
                onPress={() => {
                    if (item.type === 'theme') {
                        handleThemeToggle();
                    } else if (item.type === 'navigate') {
                        // Navigation logic here
                    }
                }}
            >
                <View style={styles.settingLeft}>
                    <Text style={styles.settingIcon}>{item.icon}</Text>
                    <View style={styles.settingText}>
                        <Text style={[styles.settingTitle, { color: theme.colors.text.primary }]}>
                            {item.title}
                        </Text>
                        <Text style={[styles.settingSubtitle, { color: theme.colors.text.secondary }]}>
                            {item.subtitle}
                        </Text>
                    </View>
                </View>

                {item.type === 'theme' && (
                    <View style={styles.themeSelector}>
                        <TouchableOpacity
                            style={[styles.themeOption, !isDarkMode && styles.themeOptionActive]}
                            onPress={() => handleThemeChange(false)}
                        >
                            <Text style={styles.themeOptionText}>☀️</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.themeOption, isDarkMode && styles.themeOptionActive]}
                            onPress={() => handleThemeChange(true)}
                        >
                            <Text style={styles.themeOptionText}>🌙</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {item.type === 'toggle' && (
                    <Switch
                        value={item.value}
                        onValueChange={() => { }}
                        trackColor={{ false: theme.colors.input, true: theme.colors.primary }}
                        thumbColor={item.value ? '#FFFFFF' : theme.colors.text.secondary}
                    />
                )}

                {item.type === 'navigate' && (
                    <Text style={[styles.chevron, { color: theme.colors.text.secondary }]}>›</Text>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View style={[styles.container, {
            backgroundColor: theme.colors.background,
            paddingTop: Math.max(insets.top, 8)
        }]}>
            <View style={[styles.header, {
                backgroundColor: theme.colors.card,
                borderBottomColor: theme.colors.border
            }]}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Text style={[styles.backButton, { color: theme.colors.primary }]}>Back</Text>
                    </TouchableOpacity>
                    <Text style={[styles.headerTitle, { color: theme.colors.text.primary }]}>Settings</Text>
                    <View style={{ width: 40 }} />
                </View>
            </View>

            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.colors.text.secondary }]}>
                        APPEARANCE
                    </Text>
                    {settingsItems.slice(0, 1).map(renderSettingItem)}
                </View>

                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.colors.text.secondary }]}>
                        PREFERENCES
                    </Text>
                    {settingsItems.slice(1, 2).map(renderSettingItem)}
                </View>

                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.colors.text.secondary }]}>
                        ACCOUNT
                    </Text>
                    {settingsItems.slice(2, 4).map(renderSettingItem)}
                </View>

                <View style={styles.section}>
                    <Text style={[styles.sectionTitle, { color: theme.colors.text.secondary }]}>
                        SUPPORT
                    </Text>
                    {settingsItems.slice(4).map(renderSettingItem)}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        padding: 12,
        borderBottomWidth: 1,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backButton: {
        fontSize: 16,
        fontWeight: '600',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    content: {
        flex: 1,
    },
    section: {
        marginTop: 20,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: '600',
        marginBottom: 8,
        marginHorizontal: 16,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    settingIcon: {
        fontSize: 20,
        marginRight: 12,
    },
    settingText: {
        flex: 1,
    },
    settingTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    settingSubtitle: {
        fontSize: 14,
        marginTop: 2,
    },
    themeSelector: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    themeOption: {
        width: 36,
        height: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
        backgroundColor: '#F0F0F0',
    },
    themeOptionActive: {
        backgroundColor: '#0095F6',
    },
    themeOptionText: {
        fontSize: 16,
    },
    chevron: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SettingsScreen; 