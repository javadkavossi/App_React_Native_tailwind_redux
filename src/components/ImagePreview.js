import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { getTheme } from '../constants/theme';

const ImagePreview = ({ imageUri, onRemove, theme }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUri }} style={styles.image} />
            <TouchableOpacity style={[styles.removeButton, { backgroundColor: theme.colors.error }]} onPress={onRemove}>
                <Text style={styles.removeButtonText}>✕</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 280,
        borderRadius: 8,
    },
    removeButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    removeButtonText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
});

export default ImagePreview; 