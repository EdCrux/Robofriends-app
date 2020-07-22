import React from 'react';

const Card = ({name, username, email}) => {
  const robo_avatar = `https://robohash.org/${name}`
  return (  
    <div className="bg-light-green dib br3 pa3 ma3 grow shadow-5">
      <h3>Robo Friend</h3>
      <img src={robo_avatar} alt="avatar" />
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
}
 
export default Card;