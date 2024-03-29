import bannerImg from "../assets/img/banner-image.png";

export default function Home(props) {
  return (
    <div className="home" id="home">
      <div className="intro">
        <h1>
          Hi, I'm <span className="emph">Ebuka</span>.
        </h1>
        <h2>I create things for the web.</h2>
        <p>
          I'm a software developer based in Waterloo. I am passionate about
          building efficient software applications, exciting user experiences
          and everything in between.
        </p>
        <a className="button my-work" href="#projects">
          <i className="fas fa-briefcase"></i>
          My work
        </a>
      </div>
      <img src={bannerImg} alt="banner-img" className="banner-img" />
    </div>
  );
}
