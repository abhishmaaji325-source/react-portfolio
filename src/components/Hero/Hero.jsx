import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Hi, I'm Abhishma Aji 👩‍💻</h1>
        <p>Frontend Developer | React Enthusiast</p>

        <a
          href="https://github.com/abhishmaaji325"
          target="_blank"
          rel="noreferrer"
        >
          <button>View GitHub</button>
        </a>
      </div>

      <div className="hero-right">
       <img
  src="https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
  alt="female avatar"
/>
      </div>
    </section>
  );
}

export default Hero;