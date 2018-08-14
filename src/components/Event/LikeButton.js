import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { heart } from 'react-icons-kit/feather';
import CardFooterButton from '../universal/CardFooterButton';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };

    this.handleToggleLike = this.handleToggleLike.bind(this);
  }

  handleToggleLike() {
    this.setState(prevState => ({
      liked: !prevState.liked,
    }));
  }

  render() {
    const { className } = this.props;
    const { liked } = this.state;

    return (
      <span>
        <CardFooterButton className={className} onClick={() => this.handleToggleLike()}>
          <Icon
            icon={heart}
            size={20}
            style={{
              verticalAlign: 'middle',
              marginTop: '-4px',
              color: liked ? '#E856B6' : 'inherit',
            }}
          />{' '}
          {liked ? 'Liked' : 'Like'}
        </CardFooterButton>
      </span>
    );
  }
}

LikeButton.propTypes = {
  className: PropTypes.string,
};

export default LikeButton;
