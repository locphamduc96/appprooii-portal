import { Link } from 'react-router-dom';
import ImageStorage from '../Constant/ImageStorage';
import Path from '../Constant/Path';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper'>
        {/* FOOTER SUBSCRIBE EMAIL */}
        <div className='footer-subscribe'>
          <div className='title-text'>
            <span className='green'>Do you want to receive</span>
          </div>
          <div className='title-text'>daily growth hacking tip?</div>
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
                <a href={Path.ZALO} target='_blank' rel='noopener noreferrer'>
                  <img
                    src={ImageStorage.zaloIcon}
                    alt=''
                    className='footer-info-channel-icon cursor-pointer'
                  />
                </a>
                <a href={Path.FACEBOOK} target='_blank' rel='noopener noreferrer'>
                  <img
                    src={ImageStorage.facebookIcon1}
                    alt=''
                    className='footer-info-channel-icon cursor-pointer'
                  />
                </a>
                <a
                  href={Path.LINKEDIN}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    src={ImageStorage.linkedInIcon}
                    alt=''
                    className='footer-info-channel-icon cursor-pointer'
                  />
                </a>
              </div>
            </div>
            <img
              className='footer-info-top-seperator'
              src={ImageStorage.footerVerticalLine}
              loading='lazy'
              alt=''
            />
            <div className='footer-info-top-right'>
              <div className='footer-info-detail'>
                <img
                  className='footer-address-icon'
                  src={ImageStorage.addressIconWhite}
                  alt=''
                />
                <p>info@approi.co</p>
              </div>
              <div className='footer-info-detail'>
                <img
                  className='footer-phone-icon'
                  src={ImageStorage.phoneIconWhite}
                  alt=''
                />
                <p>(+84) 789 996 688</p>
              </div>
              <div className='footer-info-detail'>
                <img
                  className='footer-address-icon'
                  src={ImageStorage.addressIconWhite}
                  alt=''
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
                <Link to={Path.VALUE_PROPOSITION_DESIGN}>
                  <li className='link-sub-footer'>Value Proposition Design</li>
                </Link>
                <Link to={Path.BRAND_COMMUNICATION}>
                  <li className='link-sub-footer'>Brand Communication</li>
                </Link>
                <Link to={Path.GROWTH_HACKING_STRATEGY}>
                  <li className='link-sub-footer'>Growth Hacking Strategy</li>
                </Link>

                <Link to={Path.APP_STORE_OPTIMISATION}>
                  <li className='link-sub-footer'>App Store Optimisation</li>
                </Link>
                <Link to={Path.PERFORMANCE_ADVERTISING}>
                  <li className='link-sub-footer'>Performance Advertising</li>
                </Link>
                <Link to={Path.AFFILIATE_MARKETING}>
                  <li className='link-sub-footer'>Affiliate Marketing</li>
                </Link>
                <Link to={Path.CONTENT_MARKETING}>
                  <li className='link-sub-footer'>Content Marketing</li>
                </Link>
                <Link to={Path.WEBSITE_AUDIT}>
                  <li className='link-sub-footer'>Website Audit</li>
                </Link>
                <Link to={Path.MARKETING_AUTOMATION}>
                  <li className='link-sub-footer'>Marketing automation</li>
                </Link>
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
              <Link to='/blog' className='footer-link'>
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
