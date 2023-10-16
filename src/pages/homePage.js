import React from "react";

const Home = () => {
  const glRequest = () => {
    return console.log("Request sent");
  };

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={glRequest}>GraphQL Request</button>
    </div>
  );
};

export default Home;
