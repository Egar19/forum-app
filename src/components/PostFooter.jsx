/* eslint-disable react/prop-types */
import React from 'react';
import Category from './Category';
import { HiOutlineThumbUp, HiOutlineThumbDown, HiOutlineChat } from 'react-icons/hi';

const PostFooter = ({ like = 0, dislike = 0, comment, category }) => {
  return (
    <div className="flex gap-2">
      {category && <Category category={category} />}

      <div className="flex ml-auto gap-2 items-center">
        <span><HiOutlineThumbUp /></span>
        <span>{like}</span>
        <span><HiOutlineThumbDown /></span>
        <span>{dislike}</span>

        {comment !== undefined && (
          <>
            <span><HiOutlineChat /></span>
            <span>{comment}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default PostFooter;