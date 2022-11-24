import style from './banner.module.scss';
// import Image from 'next/image';
import tilt from 'vanilla-tilt';
import { useEffect } from 'react';

export default function Banner() {
  useEffect(() => {
    tilt.init(document.querySelector('.tilt'), {
      max: 25,
      speed: 400,
    });
  }, []);

  return (
    <>
      <div className={style.banner_container}>
        <h1 className={style.banner_h1}>El Blog De Nelson</h1>
        <div className={`${style.banner_image} tilt`}>
          <img
            src='/images/sonic.png'
            alt='sonic'
          />
          {/* <Image
            src='/images/sonic.png'
            alt='sonic'
            objectFit='cover'
            layout='fill'
            priority='false'
          /> */}
        </div>
      </div>
    </>
  );
}
