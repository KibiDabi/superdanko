import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const range = 40;

const calcValue = (a: number, b: number): number => (a / b * range - range / 2);

const ThreeDParallax = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [0, window.innerHeight], [-range / 2, range / 2]);
  const rotateY = useTransform(x, [0, window.innerWidth], [-range / 2, range / 2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    x.set(mousePos.x);
    y.set(mousePos.y);
  }, [mousePos.x, mousePos.y, x, y]);

  return (
    <div className="flex items-center justify-center  h-screen overflow-hidden text-center">
      <motion.div
        ref={cardsRef}
        style={{
          perspective: 1800,
          rotateX,
          rotateY,
        }}
        className="cards bg-white rounded-3xl shadow-lg p-8"
      >
        <h3 className="text-pink-500 text-lg mb-1 transform translate-z-6">Movies</h3>
        <h1 className="text-gray-800 text-4xl font-extrabold mb-8 transform translate-z-9">Popular</h1>
        <div className="card card__one bg-cover bg-center relative rounded-3xl shadow-lg h-64 w-44 inline-block overflow-hidden perspective-1200 transform translate-z-9 transition-transform duration-200 ease-out">
          <div className="card__bg absolute inset-0 transform translate-z-[-50px]" style={{ backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_monobg.jpg')" }}></div>
          <motion.img
            className="card__img absolute inset-0 h-full w-full object-cover"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_mono.png"
            style={{
              x: useTransform(rotateY, (value) => -value),
              y: useTransform(rotateX, (value) => value),
            }}
          />
          <div className="card__text absolute bottom-0 w-full h-16 bg-linear-to-b from-transparent to-black flex items-center justify-center z-10">
            <p className="card__title text-white font-bold">Princess Mononoke</p>
          </div>
        </div>
        <div className="card card__two bg-cover bg-center relative rounded-3xl shadow-lg h-64 w-44 inline-block overflow-hidden perspective-1200 transform translate-z-9 transition-transform duration-200 ease-out mx-7">
          <div className="card__bg absolute inset-0 transform translate-z-[-50px]" style={{ backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_spirited.jpg')" }}></div>
          <motion.img
            className="card__img absolute inset-0 h-full w-full object-cover"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_chihiro.png"
            style={{
              x: useTransform(rotateY, (value) => -value),
              y: useTransform(rotateX, (value) => value),
            }}
          />
          <div className="card__text absolute bottom-0 w-full h-16 bg-linear-to-b from-transparent to-black flex items-center justify-center z-10">
            <p className="card__title text-white font-bold">Spirited Away</p>
          </div>
        </div>
        <div className="card card__three bg-cover bg-center relative rounded-3xl shadow-lg h-64 w-44 inline-block overflow-hidden perspective-1200 transform translate-z-9 transition-transform duration-200 ease-out">
          <div className="card__bg absolute inset-0 transform translate-z-[-50px]" style={{ backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlbg.jpg')" }}></div>
          <motion.img
            className="card__img absolute inset-0 h-full w-full object-cover"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlcastle.png"
            style={{
              x: useTransform(rotateY, (value) => -value),
              y: useTransform(rotateX, (value) => value),
            }}
          />
          <div className="card__text absolute bottom-0 w-full h-16 bg-linear-to-b from-transparent to-black flex items-center justify-center z-10">
            <p className="card__title text-white font-bold">Howl&apos;s Moving Castle</p>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
};

export default ThreeDParallax;
