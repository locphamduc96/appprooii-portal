import ImageStorage from "../../Constant/ImageStorage";

const Section3 = () => {
  return (
    <div className="section3">
      <img
        className="section3-triangle-image"
        src={ImageStorage.aboutUsTriange}
        loading="lazy"
        id="w-node-_53599fae-66c4-6470-6ca0-42e481fa0c05-7cf94638"
        // sizes='(max-width: 991px) 100vw, 532px'
        // srcSet='images/tamgiac-p-500.png 500w, images/tamgiac.png 532w'
        alt=""
      ></img>
      <div className="section3-content section3-product-market">
        <div className="section3-content-title">
          Product-market Fit Approach
        </div>
        <div className="section3-content-title-quote">
          (over company-centric or consumer-centric one)
        </div>
        <div className="section3-content-desc">
          There's no need to choose black or white while grey option always
          exists. Our strategic approach is finding the common area of consumer
          needs / wants / demands and product / service offerings.
        </div>
      </div>
      <div className="section3-content section3-evidence-base">
        <div className="section3-content-title">Evidence-based decision</div>
        <div className="section3-content-title-quote">
          (over assumption-based one)
        </div>
        <div className="section3-content-desc">
          We monitors every next action not by somebody's opinions but by data,
          especially the data closer to the business results, such as
          acquisition cost on customer lifetime value as well as the data from
          qualitative customer interviews and surveys.
        </div>
      </div>
      <div className="section3-content section3-agile">
        <div className="section3-content-title">Agile marketing operation</div>
        <div className="section3-content-title-quote">
          (over annual planning)
        </div>
        <div className="section3-content-desc">
          Given that market conditions are evolving so quickly that marketing
          needs a more reactive planning cycle, our growth marketing service
          needs to follow suit in that hypotheses are formed quarterly, new
          tactics and experiments are prioritized and executed on a monthly
          basis, and tracking & adjustment have to be realtime.
        </div>
      </div>
    </div>
  );
};

export default Section3;
