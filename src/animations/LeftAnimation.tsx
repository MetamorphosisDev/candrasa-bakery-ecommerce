import * as motion from "motion/react-client"

export default function LeftAnimation({
    children,
    delay = 0
}: {
    children: React.ReactNode
    delay?: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px", amount: 0.2 }}
            transition={{
                duration: 0.7,
                delay,
                type: "spring",
                stiffness: 80,
                damping: 18
            }}
        >
            {children}
        </motion.div>
    )
}