import { useState } from 'react';
// import * as Iconify from '@iconify/json';
const Home = () => {
  const [icon] = useState('icon-[mdi:all-inclusive-box]');
  console.log(icon, 'icon');
  return (
    <>
      {/* {Iconify} */}
      home
      <span className={icon}></span>
      <span className="icon-[carbon--close-filled]"></span>
      <span className="icon-[majesticons--t-shirt-line]"></span>
      <span className="icon-[mdi--arrow-left]"></span>
      <span className="icon-[ph--alarm-duotone]"></span>
      <span className="icon-[fluent-emoji-flat--alarm-clock]"></span>
      <span className="icon-[carbon--edit-off]"></span>
      <br />
      <span className="icon-[mdi--bell-outline] hover:icon-hover-[mdi--bell-off]"></span>
      <span className="icon-[carbon--user] hover:icon-hover-[mdi--bell-off]"></span>
    </>
  );
};
export default Home;
