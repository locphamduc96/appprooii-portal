import { Link } from 'react-router-dom';
import ImageStore from '../../Store/ImageStore';
import BadgeItem from './BadgeItem';

const Section3 = () => {
  return (
    <div className='section3'>
      <div className='section3-left'>
        <div className='section3-left-title'>
          <img
            src={ImageStore.headerBackground}
            loading='lazy'
            alt=''
            className='section3-left-title-background'
          />
          <p>
            <span className='black'>Digital</span> Marketing
          </p>
        </div>
        <div className='section3-left-desc'>
          When we think it rightly, let's do it excellently. We bring the <br />
          strategy into execution with a blend of data-driven mindset <br />
          and understanding of consumer digital behavior.
        </div>
        <div className='section3-left-list-badge'>
          <Link to='/services/app-store-optimisation'>
            <BadgeItem title={['App Store', <br />, 'Optimisation']} />
          </Link>
          <BadgeItem title={['Performance', <br />, 'Advertising']} />
          <BadgeItem title={['Affiliate', <br />, 'Marketing']} />
          <BadgeItem title={['Content', <br />, 'Marketing']} />
          <BadgeItem title={['Website', <br />, 'Audit']} />
          <BadgeItem title={['Marketing', <br />, 'Automation']} />
        </div>
      </div>
      <img
        className='section3-right-image'
        src={ImageStore.serviceSection3Image}
        alt=''
        loading='lazy'
      />
    </div>
  );
};

export default Section3;
