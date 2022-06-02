import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

interface NewsProps {
  img: any;
  title: string;
  content: string;
}

const News: React.FC<NewsProps> = ({ img, title, content }) => {
  return (
    <div className="col-md-6 col-12 p-md-4 p-2">
      <div className="news-container">
        <div className="text-center news-header">
          <img src={img} alt="logo" className="col-md-2 col-4" />
        </div>
        <div className="news-content">
          <h4 className="news-title fw-bold">{title}</h4>
          <p className="news-desc">{content}</p>
          <h6 className="fw-bold news-readmore d-flex align-items-center">
            Read More{" "}
            <ArrowRightAltIcon sx={{ fontSize: "1.5rem", color: "rgb(64, 37, 139)" }} />
          </h6>
        </div>
      </div>
    </div>
  );
};

export default News;
