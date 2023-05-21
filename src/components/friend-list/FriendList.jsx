import PropTypes from 'prop-types';
import { ListItem } from './FriendListItem';
import css from './Friend.module.css'

export const FriendList = ({ friends }) => (
  <>
    <ul className={css.friendList}>
      {friends.map(friend => (
        <ListItem
          key={friend.id}
          avatar={friend.avatar}        
          name={friend.name}
          isOnline={friend.isOnline}
        ></ListItem>
      ))}
    </ul>
  </>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};