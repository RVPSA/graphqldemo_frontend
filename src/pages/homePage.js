import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { useState } from "react";

const TEST_QUERY = gql`
  {
    testmethod {
      name
    }
  }
`;

const Home = () => {
  //use 'useLazyQuery' to send request after click event of the button otherwise we can use use useQuery
  const [glRequest, { data, loading, error }] = useLazyQuery(TEST_QUERY);

  console.log("data from GraphQL:::", data);
  console.log("data from GraphQL:::", glRequest);
  const [number, setNumber] = useState(1);
  // const glRequest = () => {
  // const { data, loading, error } = useQuery(FILMS_QUERY);
  // console.log("data from GraphQL:::", data);
  // };
  const clickM = () => {
    setNumber((number) => number + 1);
    glRequest();
    console.log(number);
  };

  return (
    <div>
      <h1>Home page</h1>
      <button onClick={clickM}>GraphQL Request</button>
      {/* {data &&
        data.launchesPast.map((d) => {
          return <div>{d.mission_name}</div>;
        })} */}
      <div>{number}</div>
    </div>
  );
};

export default Home;
