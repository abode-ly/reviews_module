import React from 'react';
import moment from 'moment';
import styles from './Review.module.css';
import sharedStyles from './Component.module.css';
import DOMPurify from 'dompurify';

function Review(props) {

  const text = props.review.review_text.split('\n').map( (paragraph, index) => {
    const boldSearchTerm = JSON.stringify(DOMPurify.sanitize(<b>{props.searchTerm}</b>));
    function createMarkup() {
      return {__html: paragraph.replace(props.searchTerm, boldSearchTerm)};
    }
    // const boldPara = paragraph.split(props.searchTerm).join(<strong>{props.searchTerm}</strong>);
    // console.log(paragraph.replace(props.searchTerm, props.searchTerm.bold()));
    // console.log(props.searchTerm.bold());
    // const boldPara = paragraph.replace(props.searchTerm, `<b>${props.searchTerm}</b>`);
    return <p className='reviewParagraph' key={index} dangerouslySetInnerHTML={createMarkup()}></p>;
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
      {/* {props.review.review_text.split('\n').map( (paragraph, index) => {
        return <p className='reviewParagraph' key={index}>{paragraph}</p>;
      })} */}
    </div>
  );
}

export default Review;
