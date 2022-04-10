const BadgeItem = ({ title }: any) => {
  return (
    <div className='services-item'>
      <img
        className='service-item-background'
        src='images/Rounded-Rectangle--6.png'
        alt=''
      />
      <div className='services-item-title'>{title}</div>
      <img className='services-item-arrow' src='images/arrow_1.png' alt='' />
    </div>
  );
};

export default BadgeItem;
