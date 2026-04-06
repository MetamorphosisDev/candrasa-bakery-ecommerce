import * as motion from 'motion/react-client';

export default function RightAnimation({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 80,
        damping: 18,
      }}
      style={{ opacity: 0, transform: 'translateX(40px)' }}
    >
      {children}
    </motion.div>
  );
}
