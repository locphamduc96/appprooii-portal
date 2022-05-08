import ImageStorage from '../../../Constant/ImageStorage';

interface Props {
  title: string;
  description: string;
  problems: any[3];
  solutions: any[4];
}

const StrategyConsultancy = ({
  title,
  description,
  problems,
  solutions,
}: Props) => {
  return (
    <div className='strategy-consultancy'>
      <div className='section1 section1-default'>
        <div className='section1-wrapper'>
          <div className='section1-title color-white'>
            <p>{title}</p>
          </div>
          <div className='section1-desc'>{description}</div>
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
          <Bubble clazzName='section2-bubble-1' content={problems[0]} />
          <Bubble clazzName='section2-bubble-2' content={problems[1]} />
          <Bubble clazzName='section2-bubble-3' content={problems[2]} />
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
            <div className='title-text'>
              Our
              <br />
              strategy
              <br />
              <span className='green'>approach</span>
            </div>
          </div>
          <div className='section3-content'>
            <img
              className='section3-background'
              src={ImageStorage.puzzle}
              alt=''
            />
            <p className='section3-content-1'>{solutions[0]}</p>
            <p className='section3-content-2'>{solutions[1]}</p>
            <p className='section3-content-3'>{solutions[2]}</p>
            <p className='section3-content-4'>{solutions[3]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyConsultancy;

const Bubble = ({ content, clazzName }: any) => {
  return (
    <div className={`section2-bubble ${clazzName}`}>
      <div className='section2-bubble-content'>{content}</div>
    </div>
  );
};
