import React from 'react';
import { useGlobalContext } from './context';

const Stories = () => {
  const { hits } = useGlobalContext();
  return (
    <section className='stories'>
      {hits.map((story) => {
        const {
          objectID: id,
          title,
          points,
          author,
          num_comments,
          url,
        } = story;
        return (
          <article className='story' key={id}>
            <h4 className='title'>{title}</h4>
            <p className='info'>
              {points} points by <span>{author} | </span> {num_comments}{' '}
              comments
            </p>
            <div>
              <a href={url} className='read-link'>
                read more
              </a>
              <button className='remove-btn'>remove</button>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
