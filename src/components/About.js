import { useEffect, useState } from "react";

const About = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.github.com/users/rishiraj38");
      const json = await response.json();
      setResInfo(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  if (!resInfo) return <p>Loading...</p>;

  const { login, avatar_url, name, location, bio, html_url } = resInfo;

  return (
    <div>
      <h1>About Me</h1>
      <img src={avatar_url} />
      <h2>{name}</h2>
      <p>Username: {login}</p>
      {location && <p>Location: {location}</p>}
      {bio && <p>Bio: {bio}</p>}
      <a href={html_url}>
        View GitHub Profile
      </a>
    </div>
  );
};

export default About;
