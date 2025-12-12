import React from 'react';
import { render } from '@testing-library/react';
import { StyledButton } from '../src/components';

describe('Task 1.1: StyledButton', () => {
    test('should be a button element', () => {
        const { container } = render(<StyledButton>Click me</StyledButton>);
        expect(container.querySelector('button')).toBeInTheDocument();
    });

    test('should have correct styles', () => {
        const { container } = render(<StyledButton>Click me</StyledButton>);
        const button = container.querySelector('button');
        const styles = window.getComputedStyle(button);
        
        expect(styles.backgroundColor).toBe('blue');
        expect(styles.color).toBe('white');
        expect(styles.padding).toBe('10px 20px');
        expect(styles.border).toContain('none');
        expect(styles.borderRadius).toBe('5px');
    });
});
