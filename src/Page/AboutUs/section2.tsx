import ImageStore from "../../Store/ImageStore";

const Section2 = () => {
  return (
    <div className="section2">
      <div className="section2-text">
        Our name speaks for our mission: <br />
        <strong>Boost up your Return On Investment (ROI).</strong> <br />
        No other than Growth Marketing service can do that job. We, in AppROI,
        defines Growth Marketing as the scope of not only acquiring your new
        customers but also activating, retaining and growing the share of wallet
        of existing customers.
      </div>
      <div className="section2-our-genes">
        <div className="section2-our-genes-title">
          <span className="black">Our</span> Genes
        </div>
        <div className="section2-our-genes-desc">
          <img
            src={ImageStore.aboutUsBanner}
            loading="lazy"
            width={588}
            height={192}
            alt=""
            className="section2-our-genes-img"
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
