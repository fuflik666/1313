import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, ThemedButton } from '../src/components';

describe('Task 4.1: ThemeProvider and ThemedButton', () => {
    test('ThemedButton should use theme primary color', () => {
        const { container } = render(
            <ThemeProvider>
                <ThemedButton>Themed</ThemedButton>
            </ThemeProvider>
        );
        const button = container.querySelector('button');
        const styles = window.getComputedStyle(button);
        
        expect(styles.backgroundColor).toBe('rgb(0, 123, 255)');
        expect(styles.color).toBe('white');
        expect(styles.padding).toBe('10px 20px');
        expect(styles.border).toContain('none');
    });
});
