import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import {
  Card, CardBody, CardFooter, Input,
} from 'reactstrap';
import styled from 'styled-components';

const Container = styled(CardFooter)`
  background-color: #f6f8ff;
`;

const AvatarSmall = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

const CommentCard = styled(Card)`
  width: 100%;
`;

const CommentCardBody = styled(CardBody)`
  padding: 0.75rem;
`;

const comments = [
  {
    id: 'ea8c6584-0e1e-4585-af20-2e8549205637',
    author: '7762df',
    body: 'Who the heck would buy Egypt Coral for this price?',
  },
  {
    id: 'c055f24f-27b8-433f-b528-01f44973a0f2',
    author: '254f12',
    body:
      'Man I placed a bid on this for 0.34 and 12319 didn’t accept it. Wonder why he accepted 12312’s bid?',
  },
  {
    id: 'a580b9f8-3dfe-4116-96c8-277cf987ccea',
    author: '7762df',
    body: 'What’s going on with these prices?',
  },
];

const Comments = ({ event }) => (
  <Container>
    <div className="d-flex align-items-center mb-4">
      <AvatarSmall
        className="mr-3"
        src={event.winner_account.profile_img_url}
        alt="Profile image"
      />
      <Input placeholder="Write a comment…" />
    </div>
    {comments.map(comment => (
      <div className="d-flex align-items-center mb-4" key={comment.id}>
        <AvatarSmall
          className="mr-3"
          object
          src={event.winner_account.profile_img_url}
          alt="Profile image"
        />
        <CommentCard>
          <CommentCardBody>
            <div className="text-muted">
              <a href="#link-to-author-profile">{comment.author}</a>
              {' · '}
              {moment(new Date()).format('MMMM D, YYYY')}
            </div>
            <div>{comment.body}</div>
          </CommentCardBody>
        </CommentCard>
      </div>
    ))}
  </Container>
);

Comments.propTypes = {
  event: PropTypes.object,
};

export default Comments;
