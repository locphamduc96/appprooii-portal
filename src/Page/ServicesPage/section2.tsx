import { Link } from 'react-router-dom';
import ImageStore from '../../Store/ImageStore';
import BadgeItem from './BadgeItem';

const Section2 = () => {
  return (
    <div className='section2'>
      <div className='section2-left-image'></div>
      {/* <img
        className='section2-left-image'
        src={ImageStore.serviceSection2Image}
        alt=''
        loading='lazy'
      /> */}
      <div className='section2-right'>
        <div className='section2-right-title'>
          <img
            src={ImageStore.headerBackground}
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
          <Link to='/services/value-propotion-design'>
            <BadgeItem title={['Value Proposition', <br />, 'Design']} />
          </Link>
          <BadgeItem title={['Brand', <br />, 'Communication']} />
          <BadgeItem title={['Growth Hacking', <br />, 'Strategy']} />
        </div>
      </div>
    </div>
  );
};

export default Section2;
