import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageStorage from '../../Constant/ImageStorage';
import Path from '../../Constant/Path';

const Section2 = () => {
  const [isLeftBoardOpen, setLeftBoardOpen] = useState<boolean>(false);
  const [isRightBoardOpen, setRightBoardOpen] = useState<boolean>(false);

  const hanldeClickLeftBoardArrow = () => {
    setLeftBoardOpen(!isLeftBoardOpen);
  };

  const hanldeClickRightBoardArrow = () => {
    setRightBoardOpen(!isRightBoardOpen);
  };

  return (
    <div className='section2'>
      <div className='wrapper'>
        <div
          className='section2-title'
          // style={{ opacity: 0 }}
        >
          <img
            src={ImageStorage.headerBackground}
            loading='lazy'
            alt=''
            className='section2-title-background'
          />
          <div className='section2-title-text title-text'>
            <div className='section2-title-text-top green'>
              What can we do for
            </div>
            <div className='section2-title-text-bottom'>
              your business growth?
            </div>
          </div>
        </div>

        <div className='section2-marketing'>
          <div className='section2-marketing-board'>
            <img
              className={`section2-marketing-icon ${
                isLeftBoardOpen ? 'open' : ''
              }`}
              src={ImageStorage.iconMarketing}
              alt=''
              loading='lazy'
            />
            <div
              className={`section2-marketing-title-right ${
                isLeftBoardOpen ? 'show' : ''
              }`}
            >
              Digital
              <br />
              Marketing
            </div>
            <div
              className={`section2-marketing-title ${
                isLeftBoardOpen ? 'hide' : ''
              }`}
            >
              Digital Marketing
            </div>
            <div className='section2-marketing-desc'>
              When we think it rightly, let&#x27;s do it excellently. We bring
              the strategy into execution with a blend of data-driven mindset
              and understanding of consumer digital behavior
            </div>
            <LeftBoardOpenContent isOpen={isLeftBoardOpen} />
            <img
              className={`section2-marketing-arrow ${
                isLeftBoardOpen ? 'flip' : ''
              }`}
              onClick={hanldeClickLeftBoardArrow}
              src={ImageStorage.arrow}
              loading='lazy'
              alt=''
            />
          </div>

          {/* RIGHT BOARD */}
          <div
            // style={{ opacity: 0 }}
            className='section2-marketing-board'
          >
            <img
              className={`section2-marketing-icon ${
                isRightBoardOpen ? 'open' : ''
              }`}
              src={ImageStorage.iconChess}
              alt=''
              loading='lazy'
            />
            <div
              className={`section2-marketing-title-right ${
                isRightBoardOpen ? 'show' : ''
              }`}
            >
              Strategy
              <br />
              &amp; Consultancy
            </div>
            <div
              className={`section2-marketing-title ${
                isRightBoardOpen ? 'hide' : ''
              }`}
            >
              Strategy &amp; Consultancy
            </div>
            <div className='section2-marketing-desc'>
              Everything starts with right questions. Let&#x27;s with AppROI
              define the concern that make you stay alert at night and get to
              the bottom of it.
              <br />‍
            </div>
            <RightBoardOpenContent isOpen={isRightBoardOpen} />
            <img
              className={`section2-marketing-arrow ${
                isRightBoardOpen ? 'flip' : ''
              }`}
              onClick={hanldeClickRightBoardArrow}
              src={ImageStorage.arrow}
              loading='lazy'
              data-w-id='61ab8e0b-9cde-a26f-3b73-7717a364b9e1'
              alt=''
            />
          </div>
        </div>
        <div className='section2-bottom'>
          <Link to='/services' className='custom-button'>
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section2;

const LeftBoardOpenContent = ({ isOpen }: any) => {
  return (
    <div className={`section2-marketing-extend ${isOpen ? 'open' : ''}`}>
      <img
        className='section2-marketing-extent-img'
        src={ImageStorage.homeBannerBackground}
        alt=''
      />
      <div className='section2-marketing-extend-wrap'>
        <div className='section2-marketing-extend-content'>
          <BlockContent
            link={Path.APP_STORE_OPTIMISATION}
            content={['App Store', <br />, 'Optimisation']}
          />
          <BlockContent
            link={Path.PERFORMANCE_ADVERTISING}
            content={['Performance', <br />, 'Advertising']}
          />
          <BlockContent
            link={Path.AFFILIATE_MARKETING}
            content={['Affiliate', <br />, 'Marketing']}
          />
        </div>
        <div className='section2-marketing-extend-content'>
          <BlockContent
            link={Path.CONTENT_MARKETING}
            content={['Content', <br />, 'Marketing']}
          />
          <BlockContent
            link={Path.WEBSITE_AUDIT}
            content={['Website', <br />, 'Audit']}
          />
          <BlockContent
            link={Path.MARKETING_AUTOMATION}
            content={['Marketing', <br />, 'Automation']}
          />
        </div>
      </div>
    </div>
  );
};

const RightBoardOpenContent = ({ isOpen }: any) => {
  return (
    <div className={`section2-marketing-extend ${isOpen ? 'open' : ''}`}>
      <img
        className='section2-marketing-extend-img'
        src={ImageStorage.homeBannerBackground}
        alt=''
      />

      <div className='section2-marketing-extend-wrap'>
        <div className='section2-marketing-extend-content'>
          <BlockContent
            link={Path.VALUE_PROPOSITION_DESIGN}
            content={['Value', <br />, 'Proposition', <br />, 'Design']}
          />
          <BlockContent
            link={Path.BRAND_COMMUNICATION}
            content={['Brand', <br />, 'Communication']}
          />
        </div>
        <div className='section2-marketing-extend-content'>
          <BlockContent
            link={Path.GROWTH_HACKING_STRATEGY}
            content={['Growth Hacking', <br />, 'Strategy']}
          />
        </div>
      </div>
    </div>
  );
};

const BlockContent = ({ link, content }: any) => {
  return (
    <Link to={link}>
      <div className='section2-marketing-block'>
        <img
          src={ImageStorage.blockBackground}
          alt=''
          className='section2-marketing-block-background'
        />
        <p className='section2-marketing-block-title'>{content}</p>
        <img
          className='section2-marketing-block-arrow'
          src={ImageStorage.arrow1}
          loading='lazy'
          alt=''
        />
      </div>
    </Link>
  );
};
