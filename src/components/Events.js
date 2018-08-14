import axios from 'axios';
import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import Event from './Event';

const Header = styled.div`
  border-bottom: 1px solid #ccc;
`;

class ActivityStream extends React.Component {
  state = {
    events: [],
  };

  componentDidMount() {
    this.getEvents();
  }

  getEvents() {
    axios
      .get('https://api.opensea.io/api/v1/events/?event_type=successful')
      .then((response) => {
        this.setState({ events: response.data.asset_events });
      })
      .catch(err => new Error(err));
  }

  render() {
    const { events } = this.state;

    return (
      <div>
        <Header className="p-4">
          <h4>Activity stream</h4>
        </Header>
        <Container className="py-3">
          {events.length > 0 ? (
            events.map(event => <Event event={event} key={event.id} />)
          ) : (
            <div className="text-center">Loading…</div>
          )}
        </Container>
      </div>
    );
  }
}

export default ActivityStream;
