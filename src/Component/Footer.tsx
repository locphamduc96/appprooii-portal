import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        {/* FOOTER SUBSCRIBE EMAIL */}
        <div className='footer-subscribe'>
          <div className='footer-subscribe-text'>Do you want to receive</div>
          <div className='footer-subscribe-text black'>
            daily growth hacking tip?
          </div>
          <div className='footer-subscribe-form'>
            <form
              id='email-form'
              name='email-form'
              data-name='Email Form'
              method='get'
              className='form'
            >
              <input
                className='footer-subscribe-email-input'
                type='email'
                maxLength={256}
                name='email-2'
                data-name='Email 2'
                placeholder='Enter your email'
                id='email-2'
                required
              />
              <input
                className='footer-subscribe-button'
                type='submit'
                value='Submit'
                data-wait='Please wait...'
              />
            </form>
          </div>
        </div>

        {/* FOOTER INFO */}
        <div className='footer-info'>
          <div className='footer-info-top'>
            <div className='footer-info-top-left'>
              <div className='footer-info-text-seeking'>
                Seeking a <span className='highlight'>Growth Hacking</span>
                <br />
                Agency to work with?
              </div>
              <div className='footer-info-text-contact'>CONTACT US</div>
              <div className='footer-info-channel'>
                <img
                  src='images/zalo-footer.png'
                  alt=''
                  className='footer-info-channel-icon'
                />
                <img
                  src='images/in-footer.png'
                  alt=''
                  className='footer-info-channel-icon'
                />
                <img
                  src='images/fb-footer.png'
                  alt=''
                  className='footer-info-channel-icon'
                />
              </div>
            </div>
            <img
              className='footer-info-top-seperator'
              src='images/footer-line.png'
              loading='lazy'
              alt=''
            />
            <div className='footer-info-top-right'>
              <div className='footer-info-detail'>
                <img
                  src='images/address.png'
                  alt=''
                  className='footer-address-icon'
                />
                <p>infor@approi.co</p>
              </div>
              <div className='footer-info-detail'>
                <img
                  src='images/phone.png'
                  alt=''
                  className='footer-phone-icon'
                />
                <p>(+84) 789 996 688</p>
              </div>
              <div className='footer-info-detail'>
                <img
                  src='images/address.png'
                  alt=''
                  className='footer-address-icon'
                />
                <p>
                  No.28, B2 Street, Sala Urban, An Loi Dong Ward, District 2,
                  HCMC, Vietnam
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='footer-info-link'>
            <div className='footer-info-link-element'>
              <Link to='/' className='footer-link'>
                Homepage
              </Link>
            </div>
            <div className='footer-info-link-element'>
              <Link to='/services' className='footer-link'>
                Services
              </Link>
              <ul className='list w-list-unstyled'>
                <li className='link-sub-footer'>Value Proposition Design</li>
                <li className='link-sub-footer'>Communication</li>
                <li className='link-sub-footer'>Growth Hacking Strategy</li>
                <li className='link-sub-footer'>App Store Optimisation</li>
                <li className='link-sub-footer'>Performance Advertising</li>
                <li className='link-sub-footer'>Affiliate Marketing</li>
                <li className='link-sub-footer'>Content Marketing</li>
                <li className='link-sub-footer'>Website Audit</li>
                <li className='link-sub-footer'>Marketing automation</li>
              </ul>
            </div>
            <div className='footer-info-link-element'>
              <Link to='/case-study' className='footer-link'>
                Case Study
              </Link>
              <ul className='list w-list-unstyled'>
                <li className='link-sub-footer'>App Store Optimisation</li>
                <li className='link-sub-footer'>Performance Advertising</li>
                <li className='link-sub-footer'>Affiliate Marketing</li>
                <li className='link-sub-footer'>Content Marketing</li>
                <li className='link-sub-footer'>Not-yet-publish</li>
              </ul>
            </div>
            <div className='footer-info-link-element'>
              <Link to='/news' className='footer-link'>
                News
              </Link>
            </div>
            <div className='footer-info-link-element'>
              <Link to='/contact' className='footer-link'>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
