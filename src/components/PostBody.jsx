/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const PostBody = ({ id, title, body }) => {
  const isHtml = /<\/?[a-z][\s\S]*>/i.test(body);

  return (
    <div className="p-3 rounded bg-base-100">
      <Link to={`/thread/${id}`} className="card-title">
        {title}
      </Link>

      {isHtml ? (
        <div dangerouslySetInnerHTML={{ __html: body }} />
      ) : (
        <p>{body}</p>
      )}
    </div>
  );
};

export default PostBody;
