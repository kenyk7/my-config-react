/* eslint-disable sonarjs/no-duplicate-string */
import { fireEvent, render, screen } from '@testing-library/react';

import { Counter } from './Counter';

describe('Counter', () => {
  let counter: HTMLElement;

  beforeEach(() => {
    const { container } = render(<Counter />);
    counter = container;
  });

  it('Counter loads with initial state of 0', () => {
    expect(counter.textContent).toBe('count is 0');
  });

  it('Counter get value when click', () => {
    fireEvent.click(screen.getByText('count is 0'));
    expect(counter.textContent).toBe('count is 1');
  });
});
