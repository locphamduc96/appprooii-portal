import ImageStorage from '../../Constant/ImageStorage';

const TEAM_INFO = [
  { imgUrl: ImageStorage.aboutUsMember1, name: 'Mr. Binh', role: 'Chair man' },
  { imgUrl: ImageStorage.aboutUsMember1, name: 'Mr. Duong', role: 'C.E.O' },
  {
    imgUrl: ImageStorage.aboutUsMember1,
    name: 'Mr. Hien',
    role: 'Chief of Finance',
  },

  {
    imgUrl: ImageStorage.aboutUsMember1,
    name: 'Mr. Vinh',
    role: 'Head of Growth',
  },
  { imgUrl: ImageStorage.aboutUsMember1, name: 'Mr. Tuan', role: 'B.D. Manager' },
  {
    imgUrl: ImageStorage.aboutUsMember1,
    name: 'Mr. Duong',
    role: 'Creative Manager',
  },
];

const Section4 = () => {
  return (
    <div className='section4'>
      <div className='section4-content'>
        <div className='section4-title'>
          <span className='black'>Our</span> Team
        </div>
        <div className='section4-team-container'>
          {TEAM_INFO.map((info, index) => {
            return (
              <TeamInfo
                id={index}
                imgUrl={info.imgUrl}
                name={info.name}
                role={info.role}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Section4;

const TeamInfo = ({ id, imgUrl, name, role }: any) => {
  return (
    <div className='section4-team-member'>
      <img src={imgUrl} alt='' className='section4-team-member-avatar' />
      <div className='section4-team-member-name'>{name}</div>
      <div className='section4-team-member-role'>{role}</div>
    </div>
  );
};
