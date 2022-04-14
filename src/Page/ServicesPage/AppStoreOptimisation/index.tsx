import { Link } from 'react-router-dom';
import ImageStore from '../../../Store/ImageStore';

const AppStoreOptimisation = () => {
  return (
    <div className='app-store-optimisation'>
      <div className='section1'>
        <div className='section1-wrapper'>
          <h1 className='section1-title'>
            App Store
            <br />
            Optimisation
          </h1>
          <p className='section1-desc'>
            At any stage of product/service, value proposition should be bared
            in
            <br />
            mind as a root strength of every business. Designing value
            proposition
            <br />
            is about building a potential list of features, benefits, and
            experience
            <br />
            that meet consumers' needs, want and desire, or simply about
            <br />
            achieving product-market fit.
          </p>
        </div>
      </div>
      <div className='section2'>
        <div className='wrapper'>
          <div className='section2-title'>
            <img
              className='section2-title-img'
              src={ImageStore.headerBackground}
              alt=''
            />
            <p>
              What can we <span className='green'>do for you?</span>
            </p>
          </div>
          <p className='section2-desc'>
            Spending time weekly on optimizing ASO including:
          </p>
          <div className='section2-bubble-container'>
            <Bubble
              clazzColumn='column-1'
              content={['App name, title, subtitle,', <br />, 'keywords']}
            />
            <Bubble clazzColumn='column-2' content={['Number of downloads']} />
            <Bubble clazzColumn='column-3' content={['App ratings']} />
            <Bubble
              clazzColumn='column-4'
              content={[
                'Review will improve',
                <br />,
                "significantly app's ranking",
                <br />,
                'and overall success',
              ]}
            />
          </div>
          <img className='section2-arrow' src={ImageStore.arrow10} alt='' />
        </div>
      </div>
      <div className='section3'>
        <div className='wrapper'>
          <div className='section3-title'>
            <img
              src={ImageStore.headerBackground}
              alt=''
              className='section3-title-img'
            />
            <p>
              Our<span className='green'> Works</span>
            </p>
          </div>
          <div className='section3-list-work'>
            <Work imgSrc={ImageStore.panelHocMai} />
            <Work />
            <Work />
            <Work imgSrc={ImageStore.panelTraveloka} />
            <Link className='section3-btn-see-more' to='/case-study'>
              <div className='custom-button'>See more</div>
            </Link>
            <Work />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStoreOptimisation;

const Bubble = ({ content, clazzColumn }: any) => {
  return (
    <div className={`section2-bubble`}>
      <div className='section2-bubble-content'>{content}</div>
      <div className={`section2-bubble-column ${clazzColumn}`}></div>
    </div>
  );
};

const Work = ({ imgSrc }: any) => {
  return (
    <div className='section3-card'>
      {imgSrc ? (
        <img className='section3-card-img' src={imgSrc} alt='' />
      ) : null}
    </div>
  );
};
