import React from 'react';

const CommentInput = () => {
  return (
    <fieldset className='fieldset'>
      <legend className='fieldset-legend card-title'>Leave a comment</legend>
      <textarea type='text' className='textarea w-full' placeholder='Type here' />
      <button className='btn btn-primary'>Send comment</button>
    </fieldset>
  );
};

export default CommentInput;
