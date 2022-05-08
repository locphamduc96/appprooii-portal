const CaseStudyItem = ({ imgSrc }: any) => {
  return (<div className="case-study-item">
     { imgSrc ? (
        <img className='case-study-item-img' src={imgSrc} alt='' />
      ) : null}
  </div>)
}

export default CaseStudyItem;