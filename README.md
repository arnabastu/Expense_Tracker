# Expense Tracker App

This project is a Vite + React + Tailwind web app scaffolded for Capacitor so it can be packaged as an Android APK.

## Setup

1. Open terminal in `c:\Users\arnab\OneDrive\Desktop\Expense_Tracker`
2. Run `npm install`

## Run locally

- `npm run dev`

## Build and package for Android

1. Run `npm run build`
2. Install Capacitor Android support:
   - `npx cap add android`
3. Sync the build to the native project:
   - `npx cap sync android`
4. Open Android Studio:
   - `npx cap open android`
5. Build an APK from Android Studio or use `./gradlew assembleRelease`

> Android Studio and Android SDK are required to generate a real APK.
