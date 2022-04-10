import { Link } from 'react-router-dom';

const Section3 = () => {
  return (
    <div className='section3'>
      <div className='wrapper'>
        <div
          className='section3-title'
          // style={{ opacity: 0 }}
        >
          <img
            src='images/Layer-36.png'
            loading='lazy'
            alt=''
            className='section3-title-background'
          />
          <div className='section3-title-text'>
            Some of <span className='black'>our clients</span>
          </div>
        </div>
        <div className='section3-client'>
          <ClientImage src='images/wetv.jpg' />
          <ClientImage src='images/mb.jpg' />
          <ClientImage src='images/tp.jpg' />
          <ClientImage src='images/baemin.jpg' />
          <ClientImage src='images/shopee.jpg' />
          <ClientImage src='images/travel.jpg' />
          <ClientImage src='images/fun.jpg' />
          <ClientImage src='images/edu.jpg' />
          <ClientImage src='images/meg.jpg' />
          <ClientImage src='images/spo.jpg' />
          <ClientImage src='images/gal.jpg' />
          <ClientImage src='images/vtc.jpg' />
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
            src='images/Layer-36.png'
            loading='lazy'
            alt=''
            className='section3-title-background'
          />
          <div className='section3-title-text'>
            Some of <span className='black'>our partner</span>
          </div>
        </div>
        <div className='section3-partner'>
          <PartnerImage src='images/fb.jpg' />
          <PartnerImage src='images/gg.jpg' />
          <PartnerImage src='images/tik.jpg' />
          <PartnerImage src='images/app.jpg' />
        </div>
      </div>
    </div>
  );
};

export default Section3;

const ClientImage = ({ src }: any) => {
  return (
    <img src={src} loading='lazy' alt='' className='section3-client-image' />
  );
};

const PartnerImage = ({ src }: any) => {
  return (
    <img src={src} loading='lazy' alt='' className='section3-partner-image' />
  );
};
