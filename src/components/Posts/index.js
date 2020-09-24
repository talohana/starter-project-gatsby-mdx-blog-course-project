import React from 'react';
import Banner from '../Banner';
import Post from './Post';

const Posts = ({ posts, title }) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        {/* Posts Column */}
        <article>
          {posts.map(post => (
            <Post key={post.id} {...post} />
          ))}
        </article>
        {/* Banner Column */}
        <article>
          <Banner />
        </article>
      </div>
    </section>
  );
};

export default Posts;
