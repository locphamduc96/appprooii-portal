import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  //
  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <div className='scroll-to-top-button cursor-pointer' onClick={scrollToTop}>
      <FontAwesomeIcon icon={faChevronUp as IconProp} size='lg' />
    </div>
  );
};

export default ScrollToTopButton;
