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

  if (!resInfo)
    return <p className="text-center text-xl text-white">Loading...</p>;

  const { login, avatar_url, name, location, bio, html_url } = resInfo;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <div className="flex justify-center mb-8">
          <img
            src={avatar_url}
            alt="Profile Picture"
            className="w-40 h-40 rounded-full shadow-lg border-4 border-white"
          />
        </div>
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p className="text-xl mt-2">{login}</p>
        {location && <p className="mt-2">Location: {location}</p>}
        {bio && <p className="mt-2 text-lg">{bio}</p>}
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default About;
