import s from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, status }) => {
  return (
    <div className={s.friend}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={s.name}>{name}</p>
      <p className={status ? s.online : s.offline}>
        {status ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
