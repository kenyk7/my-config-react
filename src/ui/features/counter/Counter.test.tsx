import { render, fireEvent, getByTestId } from '@testing-library/react';

import { Counter } from './Counter';

describe('Counter', () => {
  let counter: HTMLElement;

  beforeEach(() => {
    const { container } = render(<Counter />);
    counter = container;
  });

  it('Counter loads with initial state of 0', () => {
    const countValue = getByTestId(counter, 'btnCounter');
    expect(countValue.textContent).toBe('count is 0');
  });

  it('Counter get value when click', () => {
    const countValue = getByTestId(counter, 'btnCounter');
    fireEvent.click(countValue);
    expect(countValue.textContent).toBe('count is 1');
  });
});
