import React from 'react';
import { render } from '@testing-library/react';
import { StyledText } from '../src/components';

describe('Task 2.2: StyledText', () => {
    test('should be a p element', () => {
        const { container } = render(<StyledText size={16}>Text</StyledText>);
        expect(container.querySelector('p')).toBeInTheDocument();
    });

    test('should have font-size based on size prop', () => {
        const { container } = render(<StyledText size={20}>Text</StyledText>);
        const text = container.querySelector('p');
        const styles = window.getComputedStyle(text);
        
        expect(styles.fontSize).toBe('20px');
        expect(styles.color).toBe('black');
    });

    test('should handle different size values', () => {
        const { container } = render(<StyledText size={14}>Text</StyledText>);
        const text = container.querySelector('p');
        const styles = window.getComputedStyle(text);
        
        expect(styles.fontSize).toBe('14px');
    });
});
