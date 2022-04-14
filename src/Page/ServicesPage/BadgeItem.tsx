import ImageStore from '../../Store/ImageStore';

const BadgeItem = ({ title }: any) => {
  return (
    <div className='services-item'>
      <img
        className='service-item-background'
        src={ImageStore.serviceBadgeItemBackground}
        alt=''
      />
      <div className='services-item-title'>{title}</div>
      <img className='services-item-arrow' src={ImageStore.arrow1} alt='' />
    </div>
  );
};

export default BadgeItem;
