import React, { useRef, useState } from "react";
import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import ListItem from "../listItem/ListItem";
const List = ({ list }) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNum, setSlideNum] = useState(0);
  const listRef = useRef();

  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNum > 0) {
      listRef.current.style.transform = `translateX( ${230 + distance}px)`;
      setSlideNum(slideNum - 1);
    }
    if (direction === "right" && slideNum < 5) {
      listRef.current.style.transform = `translateX( ${-230 + distance}px)`;
      setSlideNum(slideNum + 1);
    }
  };
  return (
    <div className="list">
      <span className="listTitle">{list.title}</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          onClick={() => handleClick("left")}
          className="sliderArrow left"
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list.content.map((item, index) => (
            <ListItem index={index} item={item} key={index} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          onClick={() => handleClick("right")}
          className="sliderArrow right"
        />
      </div>
    </div>
  );
};

export default List;
