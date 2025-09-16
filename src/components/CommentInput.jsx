/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const CommentInput = ({ onAddComment }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    onAddComment(content);
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <fieldset className="fieldset">
        <legend className="fieldset-legend card-title">Leave a comment</legend>

        <textarea
          className="textarea w-full"
          placeholder="Type your comment here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit" className="btn btn-primary mt-2">
          Send Comment
        </button>
      </fieldset>
    </form>
  );
};

export default CommentInput;
