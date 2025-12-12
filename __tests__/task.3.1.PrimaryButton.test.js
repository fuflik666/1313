import React from 'react';
import { render } from '@testing-library/react';
import { BaseButton, PrimaryButton } from '../src/components';

describe('Task 3.1: BaseButton and PrimaryButton', () => {
    test('BaseButton should have correct styles', () => {
        const { container } = render(<BaseButton>Base</BaseButton>);
        const button = container.querySelector('button');
        const styles = window.getComputedStyle(button);
        
        expect(styles.padding).toBe('10px 15px');
        expect(styles.border).toContain('none');
        expect(styles.cursor).toBe('pointer');
    });

    test('PrimaryButton should extend BaseButton with additional styles', () => {
        const { container } = render(<PrimaryButton>Primary</PrimaryButton>);
        const button = container.querySelector('button');
        const styles = window.getComputedStyle(button);
        
        expect(styles.padding).toBe('10px 15px');
        expect(styles.cursor).toBe('pointer');
        expect(styles.backgroundColor).toBe('blue');
        expect(styles.color).toBe('white');
    });
});
