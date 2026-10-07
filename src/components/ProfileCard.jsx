function ProfileCard() {
  return (
    <div className="card">

      <img
        className="profile-img"
        src="/gojo1.jpg"
        alt="Profile"
      />

      <h1>GOJO</h1>

      <div className="skills">
        <span className="html">HTML&CSS</span>
        <span className="php">PHP</span>
        <span className="javascript">JavaScript</span>
      </div>

      <button>Hire me!</button>

    </div>
  );
}

export default ProfileCard;