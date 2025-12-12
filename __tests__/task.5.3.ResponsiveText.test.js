import React from 'react';
import { render } from '@testing-library/react';
import { ResponsiveText } from '../src/components';

describe('Task 5.3: ResponsiveText', () => {
    test('should be a p element', () => {
        const { container } = render(<ResponsiveText>Text</ResponsiveText>);
        expect(container.querySelector('p')).toBeInTheDocument();
    });

    test('should have font-size of 14px by default', () => {
        const { container } = render(<ResponsiveText>Text</ResponsiveText>);
        const text = container.querySelector('p');
        const styles = window.getComputedStyle(text);
        
        expect(styles.fontSize).toBe('14px');
    });
});
