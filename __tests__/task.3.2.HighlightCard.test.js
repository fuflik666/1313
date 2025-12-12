import React from 'react';
import { render } from '@testing-library/react';
import { BaseCard, HighlightCard } from '../src/components';

describe('Task 3.2: BaseCard and HighlightCard', () => {
    test('BaseCard should have correct styles', () => {
        const { container } = render(<BaseCard>Content</BaseCard>);
        const card = container.querySelector('div');
        const styles = window.getComputedStyle(card);
        
        expect(styles.padding).toBe('20px');
        expect(styles.borderRadius).toBe('8px');
    });

    test('HighlightCard should extend BaseCard with additional styles', () => {
        const { container } = render(<HighlightCard>Content</HighlightCard>);
        const card = container.querySelector('div');
        const styles = window.getComputedStyle(card);
        
        expect(styles.padding).toBe('20px');
        expect(styles.borderRadius).toBe('8px');
        expect(styles.border).toBe('2px solid gold');
        expect(styles.backgroundColor).toBe('rgb(255, 253, 240)');
    });
});
