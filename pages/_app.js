import { useEffect, useState, useRef } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,

          color: 0x7f0931,
          backgroundColor: 0x211e2a,
          // color: 0x3fe8ff,
          // backgroundColor: 0xf2a52,
          scale: 1.0,
          scaleMobile: 1.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    const threeScript = document.createElement('script');
    threeScript.setAttribute('id', 'threeScript');
    threeScript.setAttribute(
      'src',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
    );
    document.getElementsByTagName('head')[0].appendChild(threeScript);
    return () => {
      if (threeScript) {
        threeScript.remove();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'rgba(33,30,42)',
      }}>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </div>
  );
}

export default MyApp;
