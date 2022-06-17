import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../components/nav";

const SuperHero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Res[]>([]);

  type Res = {
    id: number;
    name: string;
    gender: string;
  };

  useEffect(() => {
    axios.get("http://localhost:4000/superHeros").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Nav></Nav>
      <div>Super Hero</div>
      {data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default SuperHero;
