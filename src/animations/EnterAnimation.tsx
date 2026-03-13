import * as motion from "motion/react-client"

export default function EnterAnimation({
    children,
    delay = 0
}: {
    children: React.ReactNode
    delay?: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px", amount: 0.2 }}
            transition={{
                duration: 0.6,
                delay,
                type: "spring",
                stiffness: 90,
                damping: 15
            }}
        >
            {children}
        </motion.div>
    )
}