# Task Manager App

A React Native task management application that helps users track their daily tasks, habits, and important activities with an intuitive interface.

## Setup Instructions

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd TaskManagerAppTask
   ```

2. **Install dependencies**
   ```sh
   # Using npm
   npm install
   
   # OR using Yarn
   yarn install
   ```

3. **Install iOS dependencies** (for iOS development)
   ```sh
   cd ios
   pod install
   cd ..
   ```

4. **Start Metro bundler**
   ```sh
   # Using npm
   npm start
   
   # OR using Yarn
   yarn start
   ```

5. **Run the app**
   - For iOS:
     ```sh
     npx react-native run-ios
     ```
   - For Android:
     ```sh
     npx react-native run-android
     ```

## Folder Structure

```
src/
├── assets/
│   ├── fonts/
│   └── icons/         # App icons and images
│
├── components/
│   ├── common/       # Reusable UI components
│   └── Tasks/         # Task-related components
│       ├── TaskItem.tsx
│       └── TaskList.tsx
│
├── navigation/       # Navigation configuration
├── screens/          # Screen components
├── services/         # API and service layer
├── store/            # State management
├── theme/            # Global theming
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## Key Decisions & Assumptions

### Technical Stack
- **React Native** for cross-platform mobile development
- **TypeScript** for type safety
- **React Navigation** for routing and navigation
- **React Native Vector Icons** for iconography

### Component Architecture
- **TaskList**: Manages the list of tasks and their state
- **TaskItem**: Individual task component with completion toggle and metadata
- **Icons**: Custom icon set with consistent theming

### Styling Approach
- Used React Native's StyleSheet for component-specific styles
- Implemented a consistent color scheme and spacing system
- Responsive design considerations for different screen sizes

### State Management
- Local state management using React's useState and useEffect hooks
- Future-proof architecture for potential state management library integration

### Assumptions
1. Tasks are primarily managed locally (no backend integration yet)
2. Offline-first approach for task management
3. Basic task operations (create, read, update, delete) are sufficient for initial release
4. User preferences and settings are stored locally

## Future Improvements
- Add task categories and filtering
- Implement task priorities and due dates
- Add user authentication
- Sync with cloud storage
- Dark mode support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
