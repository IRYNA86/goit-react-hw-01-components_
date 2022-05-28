import css from '../Friends/Friends.module.css';

function FriendListItem(props) {
  return (
    <li className={css.item}>
      <span
        className={props.isOnline === true ? css.statusBlue : css.statusRed}
      >
        {props.isOnline}
      </span>
      <img class="avatar" src={props.avatar} alt="User avatar" width="48" />
      <p className={css.name}>{props.name}</p>
    </li>
  );
}

export default FriendListItem;
