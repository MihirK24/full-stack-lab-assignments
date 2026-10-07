function ProfileCard({ name, image, description }) {
  return (
    <div className="profile-card">
      <img
        src={image}
        alt={name}
        className="profile-image"
      />

      <h3>{name}</h3>

      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;