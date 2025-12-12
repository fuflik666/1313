import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, ThemedContainer } from '../src/components';

describe('Task 4.2: ThemedContainer', () => {
    test('ThemedContainer should use theme secondary color', () => {
        const { container } = render(
            <ThemeProvider>
                <ThemedContainer>Content</ThemedContainer>
            </ThemeProvider>
        );
        const themedDiv = container.querySelector('div');
        const styles = window.getComputedStyle(themedDiv);
        
        expect(styles.backgroundColor).toBe('rgb(108, 117, 125)');
        expect(styles.color).toBe('white');
        expect(styles.padding).toBe('30px');
    });
});
