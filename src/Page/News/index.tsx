import { Carousel } from 'react-responsive-carousel';
import ImageStore from '../../Store/ImageStore';

const NewsPage = () => {
  return (
    <div className='news'>
      <div className='section1'>
        <Carousel
          autoPlay={true}
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
        >
          <img className='news-carousel' src={ImageStore.newsBanner} alt='' />
          <img className='news-carousel' src={ImageStore.newsBanner} alt='' />
          <img className='news-carousel' src={ImageStore.newsBanner} alt='' />
        </Carousel>
      </div>
      <div className='section2'>
        <div className='wrapper'>
          <div className='section2-list-new'>
            {NEWS_ARR.map((news) => {
              return (
                <News
                  imgSrc={news.imgSrc}
                  time={news.time}
                  title={news.title}
                />
              );
            })}
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

const News = ({ imgSrc, title, time }: any) => {
  return (
    <div className='section2-news'>
      <div className='section2-news-img'>
        {imgSrc ? <img src={imgSrc} alt='' /> : null}
      </div>
      <div className='section2-news-content'>
        <p className='section2-news-time'>{time}</p>
        <p className='section2-news-title'>{title}</p>
        <img className='section2-news-arrow' src='images/arrow_1.png' alt='' />
      </div>
    </div>
  );
};

const Pagination = ({ startIndex, endIndex, currentIndex }: any) => {
  // const [currentValue, setCurrentValue] = useState<number>(2);

  // const handleClickPaginationNumber =(value: number) => {
  //   setCurrentValue(value);
  // }

  return (
    <div className='section2-pagination'>
      <svg
        width={18}
        height={18}
        className='pagination-prev'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 320 512'
      >
        <path d='M224 480c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l169.4 169.4c12.5 12.5 12.5 32.75 0 45.25C240.4 476.9 232.2 480 224 480z' />
      </svg>
      <p className='pagination-number'>1</p>
      <p className='pagination-number current'>2</p>
      <p className='pagination-number'>3</p>
      <p className='pagination-number'>...</p>
      <p className='pagination-number'>7</p>
      <p className='pagination-number'>8</p>
      <svg
        width={18}
        height={18}
        className='pagination-right'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 320 512'
      >
        <path d='M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z' />
      </svg>
    </div>
  );
};

const NEWS_ARR = [
  {
    imgSrc: ImageStore.newsImage,
    time: 'August 05, 2021',
    title: 'How to build a brand for mobile apps',
  },
  {
    imgSrc: null,
    time: 'August 05, 2021',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    imgSrc: null,
    time: 'August 05, 2021',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    imgSrc: null,
    time: 'August 05, 2021',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    imgSrc: null,
    time: 'August 05, 2021',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    imgSrc: null,
    time: 'August 05, 2021',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
];
