# Instagram Clone - React Native

یک اپلیکیشن شبیه اینستاگرام که با React Native و Tailwind CSS ساخته شده است.

## 🚀 ویژگی‌ها

- **Feed اصلی**: نمایش پست‌ها با قابلیت لایک و کامنت
- **جستجو**: جستجوی کاربران
- **ایجاد پست**: آپلود عکس و نوشتن کپشن
- **اعلان‌ها**: نمایش اعلان‌های مختلف
- **پروفایل**: نمایش اطلاعات کاربر و پست‌ها
- **طراحی زیبا**: استفاده از Tailwind CSS برای استایل‌دهی
- **State Management**: استفاده از Redux Toolkit
- **Navigation**: ناوبری با React Navigation

## 🛠️ تکنولوژی‌های استفاده شده

- React Native
- Expo
- Tailwind CSS (NativeWind)
- Redux Toolkit
- React Navigation
- React Native Vector Icons

## 📦 نصب و راه‌اندازی

1. **نصب وابستگی‌ها**:
```bash
npm install
```

2. **اجرای پروژه**:
```bash
npm start
```

3. **اجرا روی دستگاه**:
- برای iOS: `npm run ios`
- برای Android: `npm run android`

## 🏗️ ساختار پروژه

```
src/
├── components/          # کامپوننت‌های قابل استفاده مجدد
│   ├── PostCard.js     # کارت پست
│   ├── BottomTabBar.js # نوار پایین
│   └── Toast.js        # اعلان‌ها
├── screens/            # صفحات اصلی
│   ├── HomeScreen.js
│   ├── SearchScreen.js
│   ├── CreatePostScreen.js
│   ├── NotificationsScreen.js
│   └── ProfileScreen.js
├── store/              # Redux store
│   ├── index.js
│   └── slices/
│       ├── postsSlice.js
│       └── userSlice.js
├── services/           # API calls
├── utils/              # توابع کمکی
└── constants/          # ثابت‌ها
```

## 🎨 طراحی

این پروژه از Tailwind CSS برای استایل‌دهی استفاده می‌کند. رنگ‌های اصلی:

- **Primary**: #0095F6 (آبی اینستاگرام)
- **Secondary**: #262626 (مشکی)
- **Background**: #FAFAFA (خاکستری روشن)
- **Surface**: #FFFFFF (سفید)

## 📱 صفحات اصلی

1. **Home**: نمایش پست‌ها
2. **Search**: جستجوی کاربران
3. **Create**: ایجاد پست جدید
4. **Notifications**: اعلان‌ها
5. **Profile**: پروفایل کاربر

## 🔧 قابلیت‌های آینده

- [ ] آپلود عکس واقعی
- [ ] سیستم کامنت
- [ ] Direct Messages
- [ ] Stories
- [ ] Authentication
- [ ] Backend API

## 📄 لایسنس

این پروژه برای اهداف آموزشی ساخته شده است. # App_React_Native_tailwind_redux
