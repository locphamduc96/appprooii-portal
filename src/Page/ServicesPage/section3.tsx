import { Link } from 'react-router-dom';
import ImageStorage from '../../Constant/ImageStorage';
import Path from '../../Constant/Path';
import BadgeItem from './BadgeItem';

const Section3 = () => {
  return (
    <div className='section3'>
      <div className='section3-left'>
        <div className='section3-left-title'>
          <img
            src={ImageStorage.headerBackground}
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
          <Link to={Path.APP_STORE_OPTIMISATION}>
            <BadgeItem title={['App Store', <br />, 'Optimisation']} />
          </Link>
          <Link to={Path.PERFORMANCE_ADVERTISING}>
            <BadgeItem title={['Performance', <br />, 'Advertising']} />
          </Link>
          <Link to={Path.AFFILIATE_MARKETING}>
            <BadgeItem title={['Affiliate', <br />, 'Marketing']} />
          </Link>
          <Link to={Path.CONTENT_MARKETING}>
            <BadgeItem title={['Content', <br />, 'Marketing']} />
          </Link>
          <Link to={Path.WEBSITE_AUDIT}>
            <BadgeItem title={['Website', <br />, 'Audit']} />
          </Link>
          <Link to={Path.MARKETING_AUTOMATION}>
            <BadgeItem title={['Marketing', <br />, 'Automation']} />
          </Link>
        </div>
      </div>
      <div className='section3-right-image'></div>
    </div>
  );
};

export default Section3;
