import { useEffect } from "react";

const Profile = () => {
  useEffect(() => (document.title = "Profile"), []);
  return (
    <section className="section">
      <h1 className="section-title">Profile</h1>
      <p className="section-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, maxime
        laborum ratione expedita, iusto itaque consequatur perspiciatis voluptas
        exercitationem minus aperiam nulla assumenda dolor impedit sapiente
        libero facilis in, consectetur inventore voluptatum earum! Corrupti
        voluptatum possimus dolor culpa, dolores autem voluptas assumenda, alias
        qui voluptate mollitia distinctio voluptates libero dignissimos!
      </p>
    </section>
  );
};

export default Profile;
