import { Link } from 'react-router-dom';
import ImageStorage from '../../Constant/ImageStorage';
import Path from '../../Constant/Path';
import BadgeItem from './BadgeItem';

const Section2 = () => {
  return (
    <div className='section2'>
      <div className='section2-left-image'></div>
      <div className='section2-right'>
        <div className='section2-right-title'>
          <img
            src={ImageStorage.headerBackground}
            loading='lazy'
            alt=''
            className='section2-right-title-background'
          />
          <p>
            <span className='black'>Strategy &</span> Consultancy
          </p>
        </div>
        <div className='section2-right-desc'>
          Everything starts with right questions. Let's with AppROI define the
          <br />
          concern that make you stay alert at night and get to the bottom of it.
        </div>
        <div className='section2-right-list-badge'>
          <Link to={Path.VALUE_PROPOSITION_DESIGN}>
            <BadgeItem title={['Value Proposition', <br />, 'Design']} />
          </Link>
          <Link to={Path.BRAND_COMMUNICATION}>
            <BadgeItem title={['Brand', <br />, 'Communication']} />
          </Link>
          <Link to={Path.GROWTH_HACKING_STRATEGY}>
            <BadgeItem title={['Growth Hacking', <br />, 'Strategy']} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section2;
