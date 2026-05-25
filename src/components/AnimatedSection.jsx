import { motion } from "framer-motion";

export default function AnimatedSection({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
}