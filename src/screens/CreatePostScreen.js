import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, StyleSheet } from 'react-native';

const CreatePostScreen = () => {
  const [caption, setCaption] = useState('');

  const handleCreatePost = () => {
    if (!caption.trim()) {
      Alert.alert('خطا', 'لطفاً توضیحی برای پست خود اضافه کنید');
      return;
    }

    Alert.alert('موفقیت', 'پست شما با موفقیت ایجاد شد!', [
      { text: 'باشه', onPress: () => setCaption('') }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity>
            <Text style={styles.cancelButton}>انصراف</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>پست جدید</Text>
          <TouchableOpacity onPress={handleCreatePost}>
            <Text style={styles.shareButton}>اشتراک‌گذاری</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.imagePlaceholder}>
          <Text style={styles.placeholderIcon}>📷</Text>
          <Text style={styles.placeholderText}>افزودن عکس</Text>
        </View>

        <TextInput
          placeholder="توضیح پست خود را بنویسید..."
          value={caption}
          onChangeText={setCaption}
          multiline
          style={styles.captionInput}
          placeholderTextColor="#8E8E93"
          textAlignVertical="top"
          textAlign="right"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancelButton: {
    color: '#8E8E93',
    fontSize: 16,
  },
  headerTitle: {
    fontWeight: '600',
    color: '#262626',
    fontSize: 16,
  },
  shareButton: {
    color: '#0095F6',
    fontWeight: '600',
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  imagePlaceholder: {
    backgroundColor: '#F0F0F0',
    width: '100%',
    height: 320,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  placeholderIcon: {
    fontSize: 48,
    color: '#8E8E93',
  },
  placeholderText: {
    color: '#8E8E93',
    marginTop: 8,
    fontSize: 16,
  },
  captionInput: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    color: '#262626',
    minHeight: 100,
    fontSize: 16,
  },
});

export default CreatePostScreen; 