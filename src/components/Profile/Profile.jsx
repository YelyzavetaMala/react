import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.card}>
      <div className={css.cardProfile}>
        <img
          className={css.cardImg}
          src={image}
          alt="User avatar"
          width="250"
        />
        <p className={css.cardName}>{name}</p>
        <p className={css.cardInfo}>@{tag}</p>
        <p className={css.cardInfo}>{location}</p>
      </div>

      <ul className={css.cardFollowers}>
        <li className={css.cardList}>
          <span className={css.cardTitle}>Followers </span>
          <span className={css.cardNumber}>{stats.followers}</span>
        </li>
        <li className={css.cardList}>
          <span className={css.cardTitle}>Views </span>
          <span className={css.cardNumber}>{stats.views}</span>
        </li>
        <li className={css.cardList}>
          <span className={css.cardTitle}>Likes </span>
          <span className={css.cardNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
