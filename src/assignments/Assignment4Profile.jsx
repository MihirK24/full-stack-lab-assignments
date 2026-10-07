import ProfileCard from "./ProfileCard";

function Assignment4Profile() {
  return (
    <div className="assignment-container">
      <h2>Assignment 4: React Profile Card</h2>

      <p className="assignment-description">
        Profile card created using a reusable React component
        and props.
      </p>

      <ProfileCard
        name="Mihir Katare"
        image="https://i.pravatar.cc/300?img=12"
        description="MCA Student interested in web development and software engineering."
      />
    </div>
  );
}

export default Assignment4Profile;