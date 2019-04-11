import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFriends, deleteFriend, addFriend } from '../../actions';
import Error from '../../components/Error';

const FriendsList = ({friends, getFriends, deleteFriend, addFriend, error, ...props}) => {
  const performAddFriend = event => {
    event.preventDefault();
    addFriend({
      name: event.target.name.value,
      age: parseInt(event.target.age.value, 10),
      email: event.target.email.value,
    });
  };
  useEffect(() => { getFriends(); }, []);
  return (
    <div className={"friends-list" + (props.gettingFriends || props.deletingFriend || props.addingFriend ? " loading" : "")}>
      {friends.map(f => <div key={f.id}>
                          {f.name}, {f.age}, {f.email}
                          <span onClick={() => deleteFriend(f.id)}>&times;</span>
                        </div>)}
      <form onSubmit={performAddFriend}>
        <input type="text" name="name" placeholder="name" />
        <input type="number" name="age" placeholder="age" />
        <input type="email" name="email" placeholder="email" />
        <button type="submit">Add Friend</button>
      </form>
      {error && <Error error={error}/>}
    </div>
  );
};

const mapStateToProps = state => ({
  friends: state.friends,
  gettingFriends: state.gettingFriends,
  deletingFriend: state.deletingFriend,
  addingFriend: state.addingFriend,
  error: state.error
});

export default connect(mapStateToProps, { getFriends, deleteFriend, addFriend })(FriendsList);
