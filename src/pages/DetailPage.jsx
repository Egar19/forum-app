import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../utils/data';
import PostHeader from '../components/PostHeader';
import PostFooter from '../components/PostFooter';
import PostBodyDetail from '../components/PostBodyDetail';
import CommentCard from '../components/CommentCard';
import CommentInput from '../components/CommentInput';

const DetailPage = () => {
  const { id } = useParams();

  const item = data.find((d) => d.id === Number(id));

  if (!item) {
    return <h2 className='text-error'>Item tidak ditemukan</h2>;
  }

  return (
    <div className='border-base-100 border-2 rounded bg-base-300 m-3'>
      <div className='card-body'>
        <PostHeader createdAt={item.createdAt} username={item.username} />
        <PostBodyDetail title={item.title} description={item.description} />
        <PostFooter
          upVotesBy={item.upVotesBy.lenght}
          downVotesBy={item.downVotesBy.lenght}
          totalComments={item.totalComment}
          category={item.category}
        />
        <CommentInput />
        <h1 className='card-title'>Comments({item.totalComment})</h1>
        <CommentCard comment={item.totalComment} />
      </div>
    </div>
  );
};

export default DetailPage;
