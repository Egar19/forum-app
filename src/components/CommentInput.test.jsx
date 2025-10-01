import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, afterEach } from 'vitest';
import CommentInput from './CommentInput';

/**
 * testing scenario
 *
 * - CommentInput component
 *   - should render textarea and button correctly
 *   - should handle typing in textarea
 *   - should call onAddComment function when form is submitted with valid input
 *   - should not call onAddComment function when form is submitted with empty input
 *   - should clear textarea after successful submit
 */


afterEach(() => {
  cleanup();
});

describe('CommentInput component', () => {
  it('should render textarea and button properly', () => {
    render(<CommentInput onAddComment={() => {}} />);
    const textarea = screen.getAllByPlaceholderText(/Type your comment here/i)[0];
    const button = screen.getAllByRole('button', { name: /Send Comment/i })[0];

    expect(textarea).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('should call onAddComment with input value when submitted', async () => {
    const user = userEvent.setup();
    const mockAddComment = vi.fn();

    render(<CommentInput onAddComment={mockAddComment} />);

    const textarea = screen.getAllByPlaceholderText(/Type your comment here/i)[0];
    const button = screen.getAllByRole('button', { name: /Send Comment/i })[0];

    await user.type(textarea, 'This is my comment');
    await user.click(button);

    expect(mockAddComment).toHaveBeenCalledWith('This is my comment');
    expect(textarea).toHaveValue('');
  });

  it('should not call onAddComment when textarea is empty', async () => {
    const user = userEvent.setup();
    const mockAddComment = vi.fn();

    render(<CommentInput onAddComment={mockAddComment} />);

    const button = screen.getAllByRole('button', { name: /Send Comment/i })[0];
    await user.click(button);

    expect(mockAddComment).not.toHaveBeenCalled();
  });
});
