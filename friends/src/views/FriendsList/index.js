import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriends } from '../../actions';

const FriendsList = ({friends, gettingFriends, getFriends}) => {
  useEffect(() => { getFriends(); }, []);
  return (
    <div className={"friends-list" + (gettingFriends ? " loading" : "")}>
      {friends.map(f => <div key={f.id}>{f.name}, {f.age}, {f.email}</div>)}
    </div>
  );
};

const mapStateToProps = state => ({friends: state.friends, gettingFriends: state.gettingFriends});

export default connect(mapStateToProps, { getFriends })(FriendsList);
