import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriends, deleteFriend } from '../../actions';

const FriendsList = ({friends, gettingFriends, getFriends, deleteFriend, deletingFriend}) => {
  useEffect(() => { getFriends(); }, []);
  return (
    <div className={"friends-list" + (gettingFriends || deletingFriend ? " loading" : "")}>
      {friends.map(f => <div key={f.id}>
                          {f.name}, {f.age}, {f.email}
                          <span onClick={() => deleteFriend(f.id)}>&times;</span>
                        </div>)}
    </div>
  );
};

const mapStateToProps = state => ({
  friends: state.friends,
  gettingFriends: state.gettingFriends,
  deletingFriend: state.deletingFriend
});

export default connect(mapStateToProps, { getFriends, deleteFriend })(FriendsList);
