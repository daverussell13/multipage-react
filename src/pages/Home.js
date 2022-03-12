import { useEffect } from "react";

const Home = () => {
  // judul halaman
  useEffect(() => (document.title = "Home"), []);
  return (
    <section className="section">
      <h1 className="section-title">Selamat datang di website saya</h1>
      <p className="section-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
        magni ipsa. Odit non laboriosam hic perferendis modi quibusdam dolores
        dolore expedita ratione rerum distinctio maxime ea dignissimos porro ut
        unde enim laborum, repellat suscipit voluptates amet quis. Itaque
        veritatis ipsum illum doloribus necessitatibus molestias beatae delectus
        quo. Amet, qui reiciendis?
      </p>
    </section>
  );
};

export default Home;
