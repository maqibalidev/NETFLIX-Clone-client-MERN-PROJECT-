import React, { useState } from "react";
import "./featured.scss";
import { userRequest } from "../../requestMethods";
import { Link } from "react-router-dom";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
const Featured = ({ type, setGenre }) => {
  const [content, setContent] = useState({});

  useState(() => {
    const getMovie = async () => {
      const res = await userRequest.get(`/movies/random?type=${type}`);
      console.log(res.data);
      setContent(res.data[0]);
    };
    getMovie();
  }, [type]);

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantacy">Fantacy</option>
            <option value="horror">Horror</option>
          </select>
        </div>
      )}
      <img width="100%" src={content.img} alt="" />

      <div className="info">
        <img src={content.imgTitle} alt="" />

        <span className="desc">{content.desc}</span>

        <div className="buttons">
          <Link to={{ pathname: "/watch", hash: content.video }}>
            <button className="play">
              <PlayArrow />
              <span>Play</span>
            </button>
          </Link>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
