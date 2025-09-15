/* eslint-disable react/prop-types */
import React from 'react';
import Category from './Category';
import { HiOutlineThumbUp, HiOutlineThumbDown, HiOutlineChat } from 'react-icons/hi';

const PostFooter = ({ upVotesBy = 0, downVotesBy = 0, totalComments, category }) => {
  return (
    <div className="flex gap-2">
      {category && <Category category={category} />}

      <div className="flex ml-auto gap-2 items-center">
        <span><HiOutlineThumbUp /></span>
        <span>{upVotesBy}</span>
        <span><HiOutlineThumbDown /></span>
        <span>{downVotesBy}</span>

        {totalComments !== undefined && (
          <>
            <span><HiOutlineChat /></span>
            <span>{totalComments}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default PostFooter;