/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';

export default function ScrollOverlay() {
  const { scrollYProgress } = useScroll();

  // Opacity: starts at 0, peaks at 0.15 in the middle, fades back to 0 at the end
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 0.15, 0.15, 0]
  );

  // Subtle center vertical movement to add life to the glow
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    ['-10%', '10%']
  );

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{
        opacity,
        translateY,
      }}
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(255, 77, 41, 0.4) 0%, transparent 60%)',
          filter: 'blur(120px)',
        }}
      />
    </motion.div>
  );
}
