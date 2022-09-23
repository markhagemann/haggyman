import Image from 'next/future/image';
import React from 'react';

import profilePic from '../../../../public/images/myself-and-taito.jpg';

const Profile: React.FC = () => (
  <div className="mx-auto">
    <Image
      alt="Site author holding his shiba"
      style={{ maxWidth: '175px', maxHeight: '175px' }}
      className="border-2 border-blue-transparent border-gradient-t-blue-dark"
      src={profilePic}
    />
  </div>
);

export default Profile;
