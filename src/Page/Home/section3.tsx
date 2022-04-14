import { Link } from 'react-router-dom';
import ImageStore from '../../Store/ImageStore';

const Section3 = () => {
  return (
    <div className='section3'>
      <div className='wrapper'>
        <div
          className='section3-title'
          // style={{ opacity: 0 }}
        >
          <img
            src={ImageStore.headerBackground}
            loading='lazy'
            alt=''
            className='section3-title-background'
          />
          <div className='section3-title-text'>
            Some of <span className='black'>our clients</span>
          </div>
        </div>
        <div className='section3-client'>
          <ClientImage src={ImageStore.wetvImg} />
          <ClientImage src={ImageStore.mbImg} />
          <ClientImage src={ImageStore.tpImg} />
          <ClientImage src={ImageStore.baeminImg} />
          <ClientImage src={ImageStore.shopeeImg} />
          <ClientImage src={ImageStore.travelImg} />
          <ClientImage src={ImageStore.funImg} />
          <ClientImage src={ImageStore.eduImg} />
          <ClientImage src={ImageStore.megImg} />
          <ClientImage src={ImageStore.spoImg} />
          <ClientImage src={ImageStore.galImg} />
          <ClientImage src={ImageStore.vtcImg} />
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
            src={ImageStore.headerBackground}
            loading='lazy'
            alt=''
            className='section3-title-background'
          />
          <div className='section3-title-text'>
            Some of <span className='black'>our partner</span>
          </div>
        </div>
        <div className='section3-partner'>
          <PartnerImage src={ImageStore.fbPartner} />
          <PartnerImage src={ImageStore.ggPartner} />
          <PartnerImage src={ImageStore.tikPartner} />
          <PartnerImage src={ImageStore.appPartner} />
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
