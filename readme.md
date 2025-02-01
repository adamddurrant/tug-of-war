# Tug of War Game

## Overview
This is a simple **Tug of War** game built using **React Native**. The game consists of two players competing against each other by tapping on their respective halves of the screen. The goal is to reduce the opponent's side to a height of 20 or less. The game features a flashing animation when a player taps, and a winner is declared when one side wins. The game can be reset to play again.

## Features
- Two-player gameplay (top vs. bottom).
- Flashing animation on tap.
- Dynamic color transitions for visual feedback.
- Reset button to restart the game.

## Prerequisites
Before running the app, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup) or [Expo CLI](https://docs.expo.dev/get-started/installation/)


## How to Run the App Locally

### Step 1: Clone the Repository
Clone this repository to your local machine using the following command:
```bash
git clone https://github.com/your-username/tug-of-war-game.git
cd tug-of-war-game
```

### Step 2: Install Dependencies
Install the required dependencies using npm or Yarn:

```bash
npm install
# or
yarn install
```

### Step 3: Run the App
Start the development server and run the app on an emulator or physical device.

For React Native CLI:

```bash
npx react-native run-android
# or
npx react-native run-ios
```
For Expo CLI:
```bash
expo start
```
Then scan the QR code with the Expo Go app on your mobile device.

## Dependencies
The app uses the following dependencies:

- react: Core library for building the UI.

- react-native: Framework for building native apps using React.

- react-native-reanimated (if applicable): For smooth animations.

## How to Play
- The screen is divided into two halves: top and bottom.

- Each player taps rapidly on their respective half to increase their side's height and decrease the opponent's.

- The game ends when one side's height is reduced to 20 or less.

- A winner is declared, and the game can be reset using the "Play Again" button.