import ImageStorage from '../../../Store/ImageStorage';

const ValuePropotionDesign = () => {
  return (
    <div className='value-propotion-design'>
      <div className='section1'>
        <div className='section1-wrapper'>
          <div className='section1-title'>
            VALUE PROPOSITION
            <br />
            DESIGN
          </div>
          <p className='section1-desc'>
            At any stage of product/service, value proposition should be bared
            in
            <br />
            mind as a root strength of every business. Designing value
            proposition is
            <br />
            about building a potential list of features, benefits, and
            experience that
            <br />
            meet consumers' needs, want and desire, or simply about achieving
            <br />
            product-market fit.
          </p>
        </div>
      </div>
      {/*  */}
      <div className='section2'>
        <div className='wrapper'>
          <div className='section2-title'>
            <img
              className='title-text-background'
              src={ImageStorage.headerBackground}
              alt=''
            />
            <div className='title-text'>
              Are you struggling
              <br />‍<span className='green'>with the following?</span>
            </div>
          </div>
          <Bubble
            clazzName='section2-bubble-1'
            content={[
              'Confused about wide-range',
              <br />,
              'of features and benefits',
              <br />,
              'without knowing what the',
              <br />,
              'best ones to bring into the',
              <br />,
              'market at a certain stage!',
            ]}
          />
          <Bubble
            clazzName='section2-bubble-2'
            content={[
              'Cannot build strong linkages',
              <br />,
              'between what consumer',
              <br />,
              'need, want or desire with',
              <br />,
              'and what the business can',
              <br />,
              'offer!',
            ]}
          />
          <Bubble
            clazzName='section2-bubble-3'
            content={[
              'What to be unmet needs',
              <br />,
              'that can be a base for your',
              <br />,
              'potential and winning',
              <br />,
              'features or experience?',
            ]}
          />
        </div>
      </div>
      {/*  */}
      <div className='section3'>
        <div className='wrapper'>
          <div className='section3-title'>
            <img
              className='title-text-background'
              src={ImageStorage.headerBackground}
              alt=''
            />
            <div className="title-text">
            Our
              <br />
              strategy
              <br />
              <span className="green">approach</span>
            </div>
          </div>
          <div className='section3-content'>
            <img
              className='section3-background'
              src={ImageStorage.puzzle}
              alt=''
            />
            <p className='section3-content-1'>
              Step out of office
              <br />
              to catch up with
              <br />
              your customers or
              <br />
              your potential
              <br />
              ones
            </p>
            <p className='section3-content-2'>
              Structure your
              <br />
              current and even
              <br />
              potential list of
              <br />
              features and
              <br />
              benefits to meet
              <br />
              with specific
              <br />
              needs of each
              <br />
              specific segment.
            </p>
            <p className='section3-content-3'>
              Choose MVP ones
              <br />
              by a process of
              <br />
              priotisation for a
              <br />
              specific stage of
              <br />
              business
            </p>
            <p className='section3-content-4'>
              Build a strategic
              <br />
              plan to bring out
              <br />
              value proposition
              <br />
              into the market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuePropotionDesign;

const Bubble = ({ content, clazzName }: any) => {
  return (
    <div className={`section2-bubble ${clazzName}`}>
      <div className='section2-bubble-content'>{content}</div>
    </div>
  );
};
