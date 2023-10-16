import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";
import { Link, useLocation } from "react-router-dom";

const Watch = () => {
  const location = useLocation();

  const movie = location.hash.split("#")[1];
  return (
    <div className="watch">
      <Link to={"/"}>
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video className="video" src={movie} autoPlay progress controls></video>
    </div>
  );
};

export default Watch;
