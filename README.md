# React Styled Components Lesson

This project contains exercises to practice styling React components with styled-components library. Follow the instructions for each exercise precisely. The automated tests will check your work against these exact requirements.

## Exercises

### 1. Basic Styled Components
- **Task 1.1**: Create a styled component named `StyledButton` using `styled.button`. It should have: `background-color: blue`, `color: white`, `padding: 10px 20px`, `border: none`, `border-radius: 5px`.
- **Task 1.2**: Create a styled component named `StyledCard` using `styled.div`. It should have: `border: 1px solid #ddd`, `border-radius: 8px`, `padding: 20px`, `box-shadow: 0 2px 4px rgba(0,0,0,0.1)`.
- **Task 1.3**: Create a styled component named `StyledTitle` using `styled.h1`. It should have: `color: #333`, `font-size: 24px`, `font-weight: bold`.

### 2. Props and Dynamic Styling
- **Task 2.1**: Create a styled component named `StyledBox` using `styled.div` that accepts a `primary` prop. If `primary` is true, background should be `blue`, otherwise `gray`. Color should always be `white`, and padding `15px`.
- **Task 2.2**: Create a styled component named `StyledText` using `styled.p` that accepts a `size` prop. Font-size should be `${props => props.size}px`. Default color `black`.
- **Task 2.3**: Create a styled component named `StyledBadge` using `styled.span` that accepts a `status` prop. If status is "success", background is `green`; if "error", background is `red`; otherwise `gray`. Color should be `white`, padding `5px 10px`, border-radius `12px`.

### 3. Extending Styled Components
- **Task 3.1**: Create a base styled button `BaseButton` with `padding: 10px 15px`, `border: none`, `cursor: pointer`. Then create `PrimaryButton` by extending BaseButton with `background: blue` and `color: white`.
- **Task 3.2**: Create a base styled component `BaseCard` with `padding: 20px`, `border-radius: 8px`. Then create `HighlightCard` by extending BaseCard with `border: 2px solid gold` and `background-color: #fffdf0`.

### 4. Styled Components with Themes
- **Task 4.1**: Create a `ThemeProvider` wrapper component that provides a theme object `{ primary: '#007bff', secondary: '#6c757d' }`. Create a styled component `ThemedButton` using `styled.button` that uses `background: ${props => props.theme.primary}`, `color: white`, `padding: 10px 20px`, `border: none`.
- **Task 4.2**: Create a styled component `ThemedContainer` using `styled.div` that uses `background: ${props => props.theme.secondary}`, `color: white`, `padding: 30px`.

### 5. Advanced Patterns
- **Task 5.1**: Create a styled component `HoverButton` using `styled.button` with initial `background: green` and `color: white`. On hover (using `&:hover`), background should change to `darkgreen`.
- **Task 5.2**: Create a styled component `FlexContainer` using `styled.div` with `display: flex`, `justify-content: center`, `align-items: center`, `gap: 10px`, `padding: 20px`.
- **Task 5.3**: Create a styled component `ResponsiveText` using `styled.p` that has `font-size: 14px` on small screens and `font-size: 18px` on screens wider than 768px (use `@media (min-width: 768px)`).

## Getting Started
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Complete the tasks in `src/components.js`.
4. Run the tests to check your progress.

## Testing
Run the tests to check your progress. Each task has its own test suite.
```bash
npm install
npm test
```

## Submission
- Push your changes to your GitHub repository.
- Ensure all tests pass.
- Submit the repository link to your instructor.
# React-Styled-Components
