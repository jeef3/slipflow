'use strict';

import React from 'react';
import cx from 'classnames';

import UserStore from '../stores/UserStore';

function getState() {
  return {
    online: navigator.onLine,
    me: UserStore.getMe()
  };
}

class OnlineStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = getState();

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener('online', this._onChange);
    window.addEventListener('offline', this._onChange);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this._onChange);
    window.removeEventListener('offline', this._onChange);
  }

  render() {
    return (
      <div className="online-status">
        <div className="avatar avatar--medium"
          style={{backgroundImage: 'url(' + this.state.me.avatar + '/80)'}}></div>
        <span className="online-status__name">{this.state.me.name}</span>
        <i className={cx('fa fa-fw fa-circle', {
            'online-status-icon--online': this.state.online,
            'online-status-icon--offline': !this.state.online
          })}></i>
      </div>
    )
  }

  _onChange() {
    this.setState(getState());
  }
}

export default OnlineStatus;
