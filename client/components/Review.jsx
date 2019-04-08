import React from 'react';
import moment from 'moment';
import styles from './Review.module.css';
import sharedStyles from './Component.module.css';
import DOMPurify from 'dompurify';

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  render() {
    let reviewText;
    if(this.state.expanded === true) {
      reviewText = this.props.review.review_text.split('\n').map( (paragraph, index) => {
        const boldPara = paragraph.replace(this.props.searchTerm, `<b>${this.props.searchTerm}</b>`);
        return <p className='reviewParagraph' key={index} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(boldPara)}}></p>;
      });
    } else {
      const reviewWordsArr = this.props.review.review_text.split(' ');
      const first50WordsArr = reviewWordsArr.slice(0, 50);
      const first50WordsStr = first50WordsArr.join(' ');
      
      if (reviewWordsArr.length<=50 && !first50WordsStr.includes('\n')) {
        reviewText = <p className='reviewParagraph'>{first50WordsStr}</p>;
      } else if (reviewWordsArr.length<=50) {
        reviewText = first50WordsStr.split('\n').map((paragraph, index) => {
          return (
            <p key={index} className='reviewParagraph'>{paragraph}</p>
          );
        });
      } else {
        const paragraphs = first50WordsStr.concat('...').split('\n').map((paragraph, index) => {
          console.log(paragraph);
          return (
            <p key={index} className='reviewParagraph'>{paragraph}</p>
          );
        });
        reviewText = (
          <span>
            {paragraphs}
            <a onClick={()=>{this.setState({expanded: true})}}>Read more</a>
          </span>
        )
      }
    }
    return (
      <div className='review'>
        <div className='userInfo'>
          <img src={this.props.review.user_photo} alt={this.props.review.user_name}></img>
          <div>
            <b className='name'>{this.props.review.user_name}</b>
            <div className='date'>{moment(this.props.review.review_date).format('MMMM YYYY')}</div>
          </div>
        </div>
        {reviewText}
        <hr></hr>
      </div>
    );
  }
}

export default Review;
