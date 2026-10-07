import { skills } from "../data/Skill";
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
        {
          skills.map((s)=>(
            <span  key={s.id}className="html" style={{backgroundColor:s.color}}>{s.name}</span>
      
          ))
        }
      </div>

      <button>Hire me!</button>

    </div>
  );
}

export default ProfileCard;