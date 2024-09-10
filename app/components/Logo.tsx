import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode;
    image: StaticImageData;
    duration: number;
  }

const Logo = ({image, duration}: Props) => {
  return (
    <motion.div
    initial={{ y: -10 }}
    animate={{
      y: [10, -12],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    }}
    className="rounded-2xl border-4 border-neutral-800 p-4 mb-3"
  >
    <Image src={image} width={90} height={90} alt="logo" />
  </motion.div>
  )
}

export default Logo