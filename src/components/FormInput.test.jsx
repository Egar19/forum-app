import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import FormInput from './FormInput';

/**
 * testing scenario
 *
 * - FormInput component
 *   - should render input with correct type, placeholder, name, and value
 *   - should have required attribute
 *   - should call onChange function when typing
 *   - should call onChange the same number of times as typed characters
 */


describe('FormInput component', () => {
  it('should render input with correct type, placeholder, and value', () => {
    render(
      <FormInput
        type="text"
        name="username"
        placeholder="Enter username"
        value="john"
        onChange={() => {}}
      />
    );

    const input = screen.getByPlaceholderText(/Enter username/i);
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('name', 'username');
    expect(input).toHaveValue('john');
    expect(input).toBeRequired();
  });

  it('should call onChange when user types in the input', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <FormInput
        type="text"
        name="username"
        placeholder="Enter username"
        value=""
        onChange={handleChange}
      />
    );

    const input = screen.getByPlaceholderText(/Enter username/i);
    await user.type(input, 'doe');

    expect(handleChange).toHaveBeenCalled();
    expect(handleChange).toHaveBeenCalledTimes(3); // 'd', 'o', 'e'
  });
});
