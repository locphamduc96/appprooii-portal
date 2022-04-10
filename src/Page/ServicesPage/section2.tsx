import { Link } from 'react-router-dom';
import BadgeItem from './BadgeItem';

const Section2 = () => {
  return (
    <div className='section2'>
      <img
        className='section2-left-image'
        src='images/iconstr2x.png'
        alt=''
        loading='lazy'
      />
      <div className='section2-right'>
        <div className='section2-right-title'>
          <img
            src='images/Layer-36.png'
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
