const ContactUsPage = () => {
  return (
    <div className='contact-us'>
      <div className='section1'></div>
      <div className='section2'>
        <div className='wrapper'>
          <div className='section2-title'>
            <img
              className='section2-title-img'
              src='../images/Layer-36.png'
              alt=''
            />
            <p className='title'>Get in touch</p>
            <p className='desc'>
              Growth hacking with us,
              <br />
              NOW!
            </p>
          </div>
          <div className='section2-content'>
            <div className='section2-form'>
              <form>
                <div className='section2-form-element'>
                  <p className='section2-form-label'>Your name *</p>
                  <input className='section2-form-input' type='text' name='' />
                </div>
                <div className='section2-form-element'>
                  <p className='section2-form-label'>Your e-mail address *</p>
                  <input className='section2-form-input' type='text' name='' />
                </div>
                <div className='section2-form-element'>
                  <p className='section2-form-label'>Your phone</p>
                  <input className='section2-form-input' type='text' name='' />
                </div>
                <div className='section2-form-element'>
                  <p className='section2-form-label'>
                    What are you looking for *
                  </p>
                  <textarea
                    className='section2-form-textarea'
                    name=''
                    id=''
                    cols={30}
                    rows={10}
                  ></textarea>
                </div>
                <button className='section2-form-submit custom-button'>
                  Send
                </button>
              </form>
            </div>
            <div className='section2-info'>
              <div className='section2-info-element'>
                <img
                  className='section2-info-element-icon'
                  src='images/mail-contact.png'
                  alt=''
                />
                <p className='section2-info-element-text'>infor@approi.co</p>
              </div>
              <div className='section2-info-element'>
                <img
                  className='section2-info-element-icon'
                  src='images/phonecontact.png'
                  alt=''
                />
                <p className='section2-info-element-text'>(+84) 789 996 688</p>
              </div>
              <div className='section2-info-element'>
                <img
                  className='section2-info-element-icon'
                  src='images/add-contact.png'
                  alt=''
                />
                <p className='section2-info-element-text'>
                  No.28, B2 Street, Sala Urban,
                  <br />
                  An Loi Dong Ward, District 2,
                  <br />
                  HCMC, Vietnam
                </p>
              </div>
              {/* <div className='section2-info-channel'>
                <img
                  className='section2-info-channel-icon'
                  src='images/zalo-footer.png'
                  alt=''
                />
                <img
                  className='section2-info-channel-icon'
                  src='images/in-footer.png'
                  alt=''
                />
                <img
                  className='section2-info-channel-icon'
                  src='images/fb-footer.png'
                  alt=''
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUsPage;
