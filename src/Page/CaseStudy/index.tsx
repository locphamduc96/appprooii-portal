import { useState } from 'react';
import CaseStudyItem from '../../Component/CaseStudyItem';
import ImageStore from '../../Store/ImageStore';

const INDEX_DEFAULT = -1;

const CaseStudyPage = () => {
  const [indexActive, setIndexActive] = useState<number>(INDEX_DEFAULT);

  const handleClickCaseStudy = (index: number) => {
    if (index === indexActive) {
      setIndexActive(INDEX_DEFAULT);
    } else {
      setIndexActive(index);
    }
  };

  return (
    <div className='case-study'>
      <div className='section1'></div>
      <div className='section2'>
        <div className='wrapper'>
          {CASE_STUDY_ARR.map((caseStudy, index) => {
            return (
              <Category
                content={caseStudy.content}
                clazzActive={index === indexActive ? 'active' : ''}
                onClick={() => {
                  handleClickCaseStudy(index);
                }}
              />
            );
          })}
        </div>
      </div>

      <div className='section3'>
        <div className='wrapper'>
          <CaseStudyItem imgSrc={ImageStore.caseStudyHocMai} />
          <CaseStudyItem />
          <CaseStudyItem />
          <CaseStudyItem imgSrc={ImageStore.caseStudyTraveloka} />
          <CaseStudyItem />
          <CaseStudyItem />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;

const Category = ({ content, clazzActive, onClick }: any) => {
  return (
    <div className={`section2-case-study ${clazzActive}`} onClick={onClick}>
      <p className='section2-case-study-content'>{content}</p>
      <img
        className='section2-case-study-img'
        src={ImageStore.caseStudyIconOptimise}
        alt=''
      />
    </div>
  );
};

const CASE_STUDY_ARR = [
  { content: ['App Store', <br />, 'Optimisation'], index: 0 },
  { content: ['Performance', <br />, 'Advertising'], index: 1 },
  { content: ['Affiliate', <br />, 'Marketing'], index: 2 },
  { content: ['Content', <br />, 'Marketing'], index: 3 },
  { content: ['Not-yet-', <br />, 'Publishing'], index: 4 },
];
