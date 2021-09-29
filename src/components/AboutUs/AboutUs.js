import React from 'react';
import Card from '../Card';
import { Mission, Users, Vision } from '../Icons';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

function AboutUs() {
  const { inView, entry, ref } = useInView();
  const animationControl = useAnimation();
  if (inView) {
    animationControl.start({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.7,
        damping: 20,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    });
  }
  return (
    <div ref={ref} className="relative h-screen mx-[56px] m-auto py-[10%]">
      <motion.div
        initial={{
          y: '100vh',
          opacity: 0,
        }}
        animate={animationControl}
        className="absolute z-10 flex space-x-3"
      >
        <Card icon={<Users />} text={community} title="Our community" />
        <Card icon={<Mission />} text={mission} title="Our mission" />
        <Card icon={<Vision />} text={vision} title="Our vision" />
      </motion.div>
    </div>
  );
}

export default AboutUs;

const community =
  'The Cryptvise ecosystem is powered by its steadfast network of HNIs, VCs, corporations, family offices, fund managers, traders, brokers and individuals.';
const mission =
  'We diligently aim to converge every trade and transaction in fiat and cryptocurrency on one global platform.';
const vision =
  'Cryptvise has envisioned consistent innovations in the crypto industry ensuring a worthwhile experience for the users.';
