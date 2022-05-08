import ImageStorage from '../../Constant/ImageStorage';

const BadgeItem = ({ title }: any) => {
  return (
    <div className='services-item'>
      <img
        className='service-item-background'
        src={ImageStorage.serviceBadgeItemBackground}
        alt=''
      />
      <div className='services-item-title'>{title}</div>
      <img className='services-item-arrow' src={ImageStorage.arrow1} alt='' />
    </div>
  );
};

export default BadgeItem;
