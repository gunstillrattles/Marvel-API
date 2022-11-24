import { Main } from "./styles";

export const About = () => {
  return (
    <Main>
      <h1>ABOUT THE WEBSITE</h1>

      <p style={{ marginTop: 10 }}>
        This website is based on MARVEL's public API, where you can search for
        characters and see the series and the comics they appear.
      </p>
      <hr />
      <h1 style={{ marginTop: 20 }}>ABOUT ME</h1>

      <p style={{ marginTop: 10 }}>I'm a (frontend) webdevolper from Kazakhstan</p>
      <a
        href="https://github.com/gunstillrattles"
        style={{ marginTop: 10, fontSize: 25, textDecoration: "none" }}
      >
        GitHub
      </a>

      <hr />

      <span style={{ marginTop: 200 }}>Thats a portfolio piece</span>
    </Main>
  );
};
