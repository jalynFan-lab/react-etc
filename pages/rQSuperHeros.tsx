import Nav from "../components/nav";
import { useQuery } from "react-query";
import axios from "axios";

const RQSuperHero = () => {
  const fetchDatas = () => {
    return axios.get("http://localhost:4000/superHeros");
  };

  const { isLoading, data } = useQuery("super-heros", fetchDatas);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  type Res = {
    id: number;
    name: string;
    gender: string;
  };

  return (
    <>
      <Nav></Nav>
      <div>RQ Super Hero</div>
      {data?.data.map((hero: Res) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};

export default RQSuperHero;
