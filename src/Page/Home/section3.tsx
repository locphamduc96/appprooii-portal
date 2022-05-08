import { Link } from 'react-router-dom';
import ImageStorage from '../../Constant/ImageStorage';

const Section3 = () => {
  return (
    <div className='section3'>
      <div className='wrapper'>
        <div
          className='section3-title'
          // style={{ opacity: 0 }}
        >
          <img
            src={ImageStorage.headerBackground}
            loading='lazy'
            alt=''
            className='section3-title-background'
          />
          <div className='title-text'>
            <span className="green">Some of </span>
            our clients
          </div>
        </div>
        <div className='section3-client'>
          <ClientImage src={ImageStorage.wetvImg} />
          <ClientImage src={ImageStorage.mbImg} />
          <ClientImage src={ImageStorage.tpImg} />
          <ClientImage src={ImageStorage.baeminImg} />
          <ClientImage src={ImageStorage.shopeeImg} />
          <ClientImage src={ImageStorage.travelImg} />
          <ClientImage src={ImageStorage.funImg} />
          <ClientImage src={ImageStorage.eduImg} />
          <ClientImage src={ImageStorage.megImg} />
          <ClientImage src={ImageStorage.spoImg} />
          <ClientImage src={ImageStorage.galImg} />
          <ClientImage src={ImageStorage.vtcImg} />
        </div>
        <div className='section3-bottom'>
          <Link to='/case-study' className='custom-button'>
            Our Case Study
          </Link>
        </div>

        <div
          className='section3-title partner'
          // style={{ opacity: 0 }}
        >
          <img
            src={ImageStorage.headerBackground}
            loading='lazy'
            alt=''
            className='section3-title-background'
          />
          <div className='title-text'>
            <span className="green">Some of </span>
            our partner
          </div>
        </div>
        <div className='section3-partner'>
          <PartnerImage src={ImageStorage.fbPartner} />
          <PartnerImage src={ImageStorage.ggPartner} />
          <PartnerImage src={ImageStorage.tikPartner} />
          <PartnerImage src={ImageStorage.appPartner} />
        </div>
      </div>
    </div>
  );
};

export default Section3;

const ClientImage = ({ src: imgSrc }: any) => {
  return (
    <img src={imgSrc} loading='lazy' alt='' className='section3-client-image' />
  );
};

const PartnerImage = ({ src: imgSrc }: any) => {
  return (
    <img
      src={imgSrc}
      loading='lazy'
      alt=''
      className='section3-partner-image'
    />
  );
};
