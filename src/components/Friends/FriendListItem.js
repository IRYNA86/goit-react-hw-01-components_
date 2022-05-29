import PropTypes from 'prop-types';
import css from '../Friends/Friends.module.css';

function FriendListItem({isOnline, avatar, name}) {
  return (
    <li className={css.item}>
      <span
        className={isOnline === true ? css.statusBlue : css.statusRed}
      >
        {isOnline}
      </span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
}

export default FriendListItem;

