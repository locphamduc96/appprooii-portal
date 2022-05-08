import { Link } from "react-router-dom";
import ImageStorage from "../../Constant/ImageStorage";

const BlogItem = ({ id, imgSrc, title, time }: any) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className='section2-news'>
        <div className='section2-news-img'>
          {imgSrc ? <img src={imgSrc} alt='' /> : null}
        </div>
        <div className='section2-news-content'>
          <p className='section2-news-time'>{time}</p>
          <p className='section2-news-title'>{title}</p>
          <img
            className='section2-news-arrow'
            src={ImageStorage.arrow1}
            alt=''
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;