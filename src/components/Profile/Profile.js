function Profile(props) {
    return(
<div className="profile">
  <div className="description">
    <img width = '50px'
      src={props.avatar}
      alt="User avatar"
      class="avatar"
    />
    <p className="name">{props.username}</p>
    <p className="tag">{props.tag}</p>
    <p className="location">{props.location}</p>
  </div>

  <ul className="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity"> {props.stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity"> {props.stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity"> {props.stats.likes}</span>
    </li>
  </ul>
</div>)
}

export default Profile;