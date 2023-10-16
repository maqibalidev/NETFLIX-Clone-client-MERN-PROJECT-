import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/features/Featured";
import List from "../../components/list/List";

import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
const Home = ({ type }) => {
  const [list, setList] = useState([]);
  const [genre, setGenre] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(list);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await userRequest.get(
          `list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`
        );
        console.log(res.data);

        setList(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRandomList();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />

      <Featured type={type} setGenre={setGenre} />
      {list.map((list) => (
        <List list={list} key={list._id} />
      ))}
    </div>
  );
};

export default Home;
