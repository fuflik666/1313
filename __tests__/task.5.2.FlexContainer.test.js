import React from 'react';
import { render } from '@testing-library/react';
import { FlexContainer } from '../src/components';

describe('Task 5.2: FlexContainer', () => {
    test('should have correct flex styles', () => {
        const { container } = render(<FlexContainer>Content</FlexContainer>);
        const flexDiv = container.querySelector('div');
        const styles = window.getComputedStyle(flexDiv);
        
        expect(styles.display).toBe('flex');
        expect(styles.justifyContent).toBe('center');
        expect(styles.alignItems).toBe('center');
        expect(styles.gap).toBe('10px');
        expect(styles.padding).toBe('20px');
    });
});
