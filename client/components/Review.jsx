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

  replaceWithBold(paragraph) {
    return paragraph.replace(this.props.searchTerm, `<b>${this.props.searchTerm}</b>`);
  }

  render() {
    const {review} = this.props;
    let reviewText;
    if(this.state.expanded === true) {
      reviewText = review.review_text.split('\n').map( (paragraph, index) => {
        return <p className='reviewParagraph' key={index} dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.replaceWithBold(paragraph))}}></p>;
      });
    } else if (this.state.expanded === false) {
      const reviewWordsArr = review.review_text.split(' ');
      const first50WordsArr = reviewWordsArr.slice(0, 35);
      const first50WordsStr = first50WordsArr.join(' ');
      
      if (reviewWordsArr.length <= 35 && !first50WordsStr.includes('\n')) {
        reviewText = <p className="reviewParagraph" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.replaceWithBold(first50WordsStr))}}></p>;
      } else if (reviewWordsArr.length <= 35) {
        reviewText = first50WordsStr.split('\n').map((paragraph, index) => <p key={index} className='reviewParagraph' dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.replaceWithBold(paragraph))}} />);
      } else {
        const paragraphs = first50WordsStr.concat('...').split('\n').map((paragraph, index) => {
          return (
            <p key={index} className="reviewParagraph" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.replaceWithBold(paragraph))}}></p>
          );
        });
        reviewText = (
          <span>
            {paragraphs}
            <a onClick={()=>{this.setState({expanded: true})}}>Read more</a>
          </span>
        );
      }
    }

    return (
      <div className='review' >
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
