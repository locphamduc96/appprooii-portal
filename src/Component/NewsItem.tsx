import { Link } from "react-router-dom";
import ImageStorage from "../Store/ImageStorage";

const NewsItem = ({ id, imgSrc, title, time }: any) => {
  return (
    <Link to={`/news/${id}`}>
      <div className='news-item'>
        <div className='news-item-img'>
          {imgSrc ? <img src={imgSrc} alt='' /> : null}
        </div>
        <div className='news-item-content'>
          <p className='news-item-time'>{time}</p>
          <p className='news-item-title'>{title}</p>
          <img
            className='news-item-arrow'
            src={ImageStorage.arrow1}
            alt=''
          />
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;