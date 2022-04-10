const Section2 = () => {
  return (
    <div className='section2'>
      <div className='section2-text'>
        Our name speaks for our mission: <br />
        <strong>Boost up your Return On Investment (ROI).</strong> <br />
        No other than Growth Marketing service can do that job. We, in <br />
        AppROI, defines Growth Marketing as the scope of not only <br />
        acquiring your new customers but also activating, retaining and <br />
        growing the share of wallet of existing customers.
      </div>
      <div className='section2-our-genes'>
        <div className='section2-our-genes-title'>
          <span className='black'>Our</span> Genes
        </div>
        <div className='section2-our-genes-desc'>
          <img
            src='images/aboutus-page.png'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 83vw, 588px'
            srcSet='images/aboutus-page-p-500.png 500w, images/aboutus-page-p-800.png 800w, images/aboutus-page-p-1080.png 1080w, images/aboutus-page.png 1557w'
            alt=''
            className='section2-our-genes-img'
          ></img>
          <p>
            Our dinstingtive tripod for Growth Marketing <br />
            service is product-market fit approach, evidence- <br />
            based decision and agile marketing operation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
