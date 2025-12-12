import React from 'react';
import { render } from '@testing-library/react';
import { HoverButton } from '../src/components';

describe('Task 5.1: HoverButton', () => {
    test('should be a button with green background', () => {
        const { container } = render(<HoverButton>Hover me</HoverButton>);
        const button = container.querySelector('button');
        const styles = window.getComputedStyle(button);
        
        expect(styles.backgroundColor).toBe('green');
        expect(styles.color).toBe('white');
    });

    test('should be a button element', () => {
        const { container } = render(<HoverButton>Hover me</HoverButton>);
        expect(container.querySelector('button')).toBeInTheDocument();
    });
});
