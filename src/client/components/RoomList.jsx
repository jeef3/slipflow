import React, { Component, PropTypes } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import Room from './Room.jsx';
import { showRoom, closeRoom } from '../actions/RoomActions';

const styles = {
  container: {}
};

export default class RoomList extends Component {
  static propTypes = {
    rooms: PropTypes.array.isRequired,
    currentRoom: PropTypes.string,
    dispatch: PropTypes.func.isRequired
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() : Component {
    const { rooms, currentRoom, dispatch } = this.props;

    return (
      <ul className="c-Sidebar__RoomList">
        {rooms.map((room) => {
          return <Room
            key={room.id}
            room={room}
            isActive={room.id === currentRoom}
            showFn={() => dispatch(showRoom(room))}
            closeFn={() => dispatch(closeRoom(room))} />;
        })}
      </ul>
    )
  }
}
