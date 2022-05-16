import { Link } from "react-router-dom";
import ImageStorage from "../../Constant/ImageStorage";

const BlogItem = ({ id, imgSrc, title, time }: any) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className='blog-item'>
        <div className='blog-item-img'>
          {imgSrc ? <img src={imgSrc} alt='' /> : null}
        </div>
        <div className='blog-item-content'>
          <p className='blog-item-time'>{time}</p>
          <p className='blog-item-title'>{title}</p>
          <img
            className='blog-item-arrow'
            src={ImageStorage.arrow1}
            alt=''
          />
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;