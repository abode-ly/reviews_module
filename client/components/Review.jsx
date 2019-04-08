import React from 'react';
import moment from 'moment';
import styles from './Review.module.css';
import sharedStyles from './Component.module.css';
import DOMPurify from 'dompurify';

function Review(props) {
  const text = props.review.review_text.split('\n').map( (paragraph, index) => {
    const boldPara = paragraph.replace(props.searchTerm, `<b>${props.searchTerm}</b>`);
    return <p className='reviewParagraph' key={index} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(boldPara)}}></p>;
  });

  return (
    <div className='review'>
      <div className='userInfo'>
        <img src={props.review.user_photo} alt={props.review.user_name}></img>
        <div>
          <b className='name'>{props.review.user_name}</b>
          <div className='date'>{moment(props.review.review_date).format('MMMM YYYY')}</div>
        </div>
      </div>
      {text}
      <hr></hr>
    </div>
  );
}

export default Review;
