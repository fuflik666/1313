# React Styled Components Lesson - Project Structure

## 📁 Directory Structure

```
react-styled-components-lesson/
├── __tests__/                          # Test files directory
│   ├── task.1.1.StyledButton.test.js
│   ├── task.1.2.StyledCard.test.js
│   ├── task.1.3.StyledTitle.test.js
│   ├── task.2.1.StyledBox.test.js
│   ├── task.2.2.StyledText.test.js
│   ├── task.2.3.StyledBadge.test.js
│   ├── task.3.1.PrimaryButton.test.js
│   ├── task.3.2.HighlightCard.test.js
│   ├── task.4.1.ThemedButton.test.js
│   ├── task.4.2.ThemedContainer.test.js
│   ├── task.5.1.HoverButton.test.js
│   ├── task.5.2.FlexContainer.test.js
│   └── task.5.3.ResponsiveText.test.js
├── src/
│   ├── components.js                   # Your implementation goes here
│   └── setupTests.js                   # Test setup configuration
├── .babelrc                            # Babel configuration (includes styled-components plugin)
├── .gitignore                          # Git ignore rules
├── jest.config.js                      # Jest testing configuration
├── package.json                        # Project dependencies (includes styled-components)
├── PROJECT_STRUCTURE.md                # This file
└── README.md                           # Project instructions
```

## 🎯 Learning Topics

### 1. Basic Styled Components (3 tasks)
- Creating styled button with CSS properties
- Styled card with borders and shadows
- Styled heading with typography

### 2. Props and Dynamic Styling (3 tasks)
- Conditional styling based on props
- Dynamic font sizes
- Status-based color schemes

### 3. Extending Styled Components (2 tasks)
- Creating base components
- Extending styles from base components
- Component composition

### 4. Styled Components with Themes (2 tasks)
- ThemeProvider setup
- Accessing theme values
- Theme-based color schemes

### 5. Advanced Patterns (3 tasks)
- Hover states and pseudo-classes
- Flexbox layouts
- Responsive design with media queries

## 📝 Task Format

Each task follows this naming pattern:
- **File:** `task.X.Y.ComponentName.test.js`
- **X** = Section number (1-5)
- **Y** = Task number within section

## 🧪 Testing

Run all tests:
```bash
npm test
```

Run specific test:
```bash
npm test task.1.1
```

Run tests in watch mode:
```bash
npm test -- --watch
```

## ✅ Completion Criteria

- All 13 test files pass
- All styled components properly implement the required CSS
- Props are correctly handled for dynamic styling
- Theme integration works correctly

## 📚 Key Concepts Covered

- **Basic Syntax:** styled.element`` template literals
- **Props:** Accessing props in styled components
- **Extending:** Reusing styles with styled(Component)
- **Theming:** Global styling with ThemeProvider
- **Pseudo-classes:** &:hover, &:focus states
- **Media Queries:** Responsive design patterns
- **Flexbox:** Modern layout techniques

## 🎨 Styled Components Benefits

- ✅ Scoped styles (no class name conflicts)
- ✅ Dynamic styling with props
- ✅ Theming support
- ✅ Automatic vendor prefixing
- ✅ Dead code elimination
- ✅ Better developer experience
