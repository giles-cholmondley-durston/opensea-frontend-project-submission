import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Icon } from 'react-icons-kit';
import { messageSquare } from 'react-icons-kit/feather';
import {
  Card, CardBody, CardFooter, Media,
} from 'reactstrap';
import styled from 'styled-components';
import { constructPrice, getShortUserAddress } from '../../utils/web3';
import CardFooterButton from '../universal/CardFooterButton';
import Comments from './Comments';
import LikeButton from './LikeButton';

const StyledCardFooter = styled(CardFooter)`
  background-color: #fff;
`;

const EventMediaObject = styled(Media)`
  border-radius: 50%;
  width: 50px;
`;

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
    };

    this.handleToggleComments = this.handleToggleComments.bind(this);
  }

  handleToggleComments() {
    this.setState(prevState => ({
      showComments: !prevState.showComments,
    }));
  }

  render() {
    const { event } = this.props;
    const { showComments } = this.state;

    return (
      <Card className="mb-4">
        <CardBody>
          <Media>
            <Media left href="#">
              <EventMediaObject
                className="mr-3"
                object
                src={event.winner_account.profile_img_url}
                alt="Profile image"
              />
            </Media>
            <Media body>
              <div className="text-muted">{moment(event.created_date).format('MMMM D, YYYY')}</div>
              <a href="#link-to-user-profile">
                {getShortUserAddress(event.winner_account.address)}
              </a>{' '}
              bought <a href={event.asset.external_link}>{event.asset.name}</a> for&nbsp;<b>Ξ</b>&nbsp;
              {constructPrice(event.total_price)}
            </Media>
          </Media>
        </CardBody>
        <StyledCardFooter>
          <LikeButton className="mr-3" />
          <CardFooterButton outline color="link" onClick={this.handleToggleComments}>
            <Icon
              icon={messageSquare}
              size={20}
              style={{ verticalAlign: 'middle', marginTop: '-4px' }}
            />{' '}
            Comment
          </CardFooterButton>
        </StyledCardFooter>
        {showComments && <Comments event={event} />}
      </Card>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object,
};

export default Event;
