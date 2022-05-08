import ImageStorage from '../../../Constant/ImageStorage';
import Utils from '../../../Utils';
import sample from '../../../assets/html-sample.json';
import BlogItem from '../BlogItem';

const BlogDetailsPage = () => {
  return (
    <div className='news-details'>
      <div className='section1'>
        <img className='section1-cover-image' src={ImageStorage.newsBanner} alt='' />
      </div>
      <div className='section2'>
        <div className='wrapper'>
          <div className='title-text'>
            <img
              src={ImageStorage.headerBackground}
              loading='lazy'
              alt=''
              className='title-text-background'
            />
            <div className='title-text-content news-title'>
              Cách xây dựng thương hiệu thành công cho mobile app
            </div>
          </div>
          <div className='section2-time'>
            <img
              src={ImageStorage.calendarIcon}
              alt=''
              className='section2-time-icon'
            />
            <div className='section2-time-text'>
              {Utils.getDateFromMillis(sample.data.createdAt)}
            </div>
          </div>
          <div className='content'>
            <div
              dangerouslySetInnerHTML={{
                __html: Utils.decodeHTMLEntities(sample.data.content),
              }}
            />
          </div>
          <div className='share-news'>
            <div className='text'>Share this:</div>
            <img
              src={ImageStorage.facebookIconGreen}
              alt=''
              className='facebook-icon'
            />
            <img
              src={ImageStorage.zaloIconGreen}
              alt=''
              className='zalo-icon'
            />
            <img
              src={ImageStorage.linkedInIconGreen}
              alt=''
              className='linkedin-icon'
            />
          </div>
        </div>
      </div>

      {/* LEAVE A COMMENT */}
      <div className='comment'>
        <div className='wrapper'>
          <div className='title-text'>
            Leave
            <span className='green'> a comment</span>
          </div>
          <div className='form comment-form'>
            <form>
              <div className='form-element'>
                <textarea
                  className='form-element-textarea'
                  name=''
                  id=''
                  cols={30}
                  rows={10}
                  placeholder='Message *'
                ></textarea>
              </div>
              <div className='comment-form-bottom'>
                <div className='form-element comment-form-name'>
                  <input
                    className='form-element-input'
                    type='text'
                    name=''
                    placeholder='Name *'
                  />
                </div>
                <div className='form-element comment-form-email'>
                  <input
                    className='form-element-input'
                    type='text'
                    name=''
                    placeholder='Email * (Your email address will not published)'
                  />
                </div>
              </div>
              <div className='form-element inline'>
                <input type='checkbox' name='radio' />
                <p className='description'>
                  Save my name, email and website in this browser for the next
                  time i comment.
                </p>
              </div>
              <button className='button'>Comment</button>
            </form>
          </div>
        </div>
      </div>

      {/* RECOMMEND POST */}
      <div className='recommend-post'>
        <div className='wrapper'>
          <div className='title-text'>
            <span className='green'>Recommended</span> Posts
          </div>
          <div className='list-news-item'>
            {NEWS_ARR.map((news, index) => {
              return (
                <BlogItem
                  id={news.id}
                  imgSrc={news.imgSrc}
                  time={news.time}
                  title={news.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;

const NEWS_ARR = [
  {
    id: 1,
    imgSrc: ImageStorage.newsImage,
    time: 'August 05, 2021',
    title: 'How to build a brand for mobile apps',
  },
  {
    id: 2,
    imgSrc: null,
    time: 'August 05, 2021',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    id: 3,
    imgSrc: null,
    time: 'August 05, 2021',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];
