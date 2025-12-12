import React from 'react';
import { render } from '@testing-library/react';
import { StyledBox } from '../src/components';

describe('Task 2.1: StyledBox', () => {
    test('should be a div element', () => {
        const { container } = render(<StyledBox>Content</StyledBox>);
        expect(container.querySelector('div')).toBeInTheDocument();
    });

    test('should have blue background when primary is true', () => {
        const { container } = render(<StyledBox primary>Content</StyledBox>);
        const box = container.querySelector('div');
        const styles = window.getComputedStyle(box);
        
        expect(styles.backgroundColor).toBe('blue');
        expect(styles.color).toBe('white');
        expect(styles.padding).toBe('15px');
    });

    test('should have gray background when primary is false', () => {
        const { container } = render(<StyledBox primary={false}>Content</StyledBox>);
        const box = container.querySelector('div');
        const styles = window.getComputedStyle(box);
        
        expect(styles.backgroundColor).toBe('gray');
        expect(styles.color).toBe('white');
    });
});
