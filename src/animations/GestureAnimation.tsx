import * as motion from 'motion/react-client';

export default function GestureCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-xl shadow-lg cursor-pointer"
    >
      {children}
    </motion.div>
  );
}
