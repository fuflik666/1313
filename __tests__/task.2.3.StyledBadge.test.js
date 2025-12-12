import React from 'react';
import { render } from '@testing-library/react';
import { StyledBadge } from '../src/components';

describe('Task 2.3: StyledBadge', () => {
    test('should be a span element', () => {
        const { container } = render(<StyledBadge status="success">Badge</StyledBadge>);
        expect(container.querySelector('span')).toBeInTheDocument();
    });

    test('should have green background for success status', () => {
        const { container } = render(<StyledBadge status="success">Badge</StyledBadge>);
        const badge = container.querySelector('span');
        const styles = window.getComputedStyle(badge);
        
        expect(styles.backgroundColor).toBe('green');
        expect(styles.color).toBe('white');
        expect(styles.padding).toBe('5px 10px');
        expect(styles.borderRadius).toBe('12px');
    });

    test('should have red background for error status', () => {
        const { container } = render(<StyledBadge status="error">Badge</StyledBadge>);
        const badge = container.querySelector('span');
        const styles = window.getComputedStyle(badge);
        
        expect(styles.backgroundColor).toBe('red');
    });

    test('should have gray background for other status', () => {
        const { container } = render(<StyledBadge status="other">Badge</StyledBadge>);
        const badge = container.querySelector('span');
        const styles = window.getComputedStyle(badge);
        
        expect(styles.backgroundColor).toBe('gray');
    });
});
