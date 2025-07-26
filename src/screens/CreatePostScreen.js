import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as ImagePicker from 'expo-image-picker';
import { getTheme } from '../constants/theme';
import ImagePreview from '../components/ImagePreview';
import Toast from '../components/Toast';

const CreatePostScreen = () => {
  const [caption, setCaption] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: '', type: 'success' });
  const { isDarkMode } = useSelector(state => state.theme);
  const theme = getTheme(isDarkMode);
  const insets = useSafeAreaInsets();

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, message, type });
  };

  const hideToast = () => {
    setToast({ visible: false, message: '', type: 'success' });
  };

  const pickImage = async () => {
    try {
      // درخواست مجوز دسترسی به گالری
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        showToast('Please grant permission to access your photo library', 'error');
        return;
      }

      // باز کردن گالری
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets[0]) {
        setSelectedImage(result.assets[0].uri);
        showToast('Photo selected successfully!', 'success');
      }
    } catch (error) {
      showToast('Failed to pick image. Please try again.', 'error');
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    showToast('Photo removed', 'warning');
  };

  const handleCreatePost = () => {
    if (!selectedImage) {
      showToast('Please select a photo first', 'error');
      return;
    }

    if (!caption.trim()) {
      showToast('Please add a caption to your post', 'error');
      return;
    }

    showToast('Post created successfully!', 'success');

    // پاک کردن فرم بعد از 2 ثانیه
    setTimeout(() => {
      setCaption('');
      setSelectedImage(null);
    }, 2000);
  };

  return (
    <View style={[styles.container, {
      backgroundColor: theme.colors.background,
      paddingTop: Math.max(insets.top, 8)
    }]}>
      <Toast
        visible={toast.visible}
        message={toast.message}
        type={toast.type}
        onHide={hideToast}
      />

      <View style={[styles.header, {
        backgroundColor: theme.colors.card,
        borderBottomColor: theme.colors.border
      }]}>
        <View style={styles.headerContent}>
          <TouchableOpacity>
            <Text style={[styles.cancelButton, { color: theme.colors.text.secondary }]}>Cancel</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.colors.text.primary }]}>New Post</Text>
          <TouchableOpacity onPress={handleCreatePost}>
            <Text style={[styles.shareButton, {
              color: selectedImage && caption.trim() ? theme.colors.primary : theme.colors.text.secondary
            }]}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          {selectedImage ? (
            <ImagePreview
              imageUri={selectedImage}
              onRemove={removeImage}
              theme={theme}
            />
          ) : (
            <TouchableOpacity onPress={pickImage}>
              <View style={[styles.imagePlaceholder, { backgroundColor: theme.colors.input }]}>
                <Text style={[styles.placeholderIcon, { color: theme.colors.text.secondary }]}>📷</Text>
                <Text style={[styles.placeholderText, { color: theme.colors.text.secondary }]}>Add Photo</Text>
                <Text style={[styles.placeholderSubtext, { color: theme.colors.text.secondary }]}>Tap to select from gallery</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>

        <TextInput
          placeholder="Write a caption..."
          value={caption}
          onChangeText={setCaption}
          multiline
          style={[styles.captionInput, {
            backgroundColor: theme.colors.card,
            color: theme.colors.text.primary
          }]}
          placeholderTextColor={theme.colors.text.secondary}
          textAlignVertical="top"
        />
      </View>
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
  cancelButton: {
    fontSize: 15,
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 16,
  },
  shareButton: {
    fontWeight: '600',
    fontSize: 15,
  },
  content: {
    flex: 1,
    padding: 12,
  },
  imageContainer: {
    marginBottom: 12,
  },
  imagePlaceholder: {
    width: '100%',
    height: 280,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderIcon: {
    fontSize: 40,
  },
  placeholderText: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: '600',
  },
  placeholderSubtext: {
    marginTop: 4,
    fontSize: 13,
  },
  captionInput: {
    padding: 10,
    borderRadius: 8,
    minHeight: 80,
    fontSize: 15,
  },
});

export default CreatePostScreen; 