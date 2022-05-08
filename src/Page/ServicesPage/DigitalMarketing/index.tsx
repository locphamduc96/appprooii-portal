import { Link } from 'react-router-dom';
import ImageStorage from '../../../Constant/ImageStorage';

interface Props {
  title: string;
  description: string;
  description2?: string;
  features: { title: string; description: string }[];
}

const DigitalMarketing = ({
  title,
  description,
  description2,
  features,
}: Props) => {
  return (
    <div className='digital-marketing'>
      <div className='section1 section1-default'>
        <div className='section1-wrapper'>
          <h1 className='section1-title color-white'>
            <p>{title}</p>
          </h1>
          <p className='section1-desc'>{description}</p>
        </div>
      </div>
      <div className='section2'>
        <div className='wrapper'>
          <div className='section2-title'>
            <img
              className='title-text-background'
              src={ImageStorage.headerBackground}
              alt=''
            />
            <div className='title-text'>
              What can we <span className='green'>do for you?</span>
            </div>
          </div>
          {description2 ? (
            <p className='section2-desc'>{description2}</p>
          ) : null}
          <FeaturesContaineer features={features} />
        </div>
      </div>
      <div className='section3'>
        <div className='wrapper'>
          <div className='section3-title'>
            <img
              src={ImageStorage.headerBackground}
              alt=''
              className='title-text-background'
            />
            <div className='title-text'>
              Our<span className='green'> Works</span>
            </div>
          </div>
          <div className='section3-list-work'>
            <Work imgSrc={ImageStorage.panelHocMai} />
            <Work />
            <Work />
            <Work imgSrc={ImageStorage.panelTraveloka} />
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

export default DigitalMarketing;

const FeaturesContaineer = ({ features }: any) => {
  //  Thêm 1 bubble rỗng và ẩn đi nếu có 4 feature.
  const _features = [...features];
  if (_features.length === 4) {
    _features.splice(2, 0, { title: null, description: null });
  }

  return (
    <div className='section2-bubble-container'>
      {_features.map((feature: any, index: number) => (
        <Bubble
          index={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
};

const Bubble = ({ index, title, description }: any) => {
  return (
    <div key={index} className={`marketing-bubble ${title ? '' : 'hidden'}`}>
      {title ? <div className='title'>{title}</div> : null}
      {description ? <div className='description'>{description}</div> : null}
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
