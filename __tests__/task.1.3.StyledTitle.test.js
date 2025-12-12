import React from 'react';
import { render } from '@testing-library/react';
import { StyledTitle } from '../src/components';

describe('Task 1.3: StyledTitle', () => {
    test('should be an h1 element', () => {
        const { container } = render(<StyledTitle>Title</StyledTitle>);
        expect(container.querySelector('h1')).toBeInTheDocument();
    });

    test('should have correct styles', () => {
        const { container } = render(<StyledTitle>Title</StyledTitle>);
        const title = container.querySelector('h1');
        const styles = window.getComputedStyle(title);
        
        expect(styles.color).toBe('rgb(51, 51, 51)');
        expect(styles.fontSize).toBe('24px');
        expect(styles.fontWeight).toBe('bold');
    });
});
