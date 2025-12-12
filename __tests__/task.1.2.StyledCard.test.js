import React from 'react';
import { render } from '@testing-library/react';
import { StyledCard } from '../src/components';

describe('Task 1.2: StyledCard', () => {
    test('should be a div element', () => {
        const { container } = render(<StyledCard>Content</StyledCard>);
        expect(container.querySelector('div')).toBeInTheDocument();
    });

    test('should have correct styles', () => {
        const { container } = render(<StyledCard>Content</StyledCard>);
        const card = container.querySelector('div');
        const styles = window.getComputedStyle(card);
        
        expect(styles.border).toBe('1px solid rgb(221, 221, 221)');
        expect(styles.borderRadius).toBe('8px');
        expect(styles.padding).toBe('20px');
        expect(styles.boxShadow).toContain('rgba(0, 0, 0, 0.1)');
    });
});
