"use client";

import { motion, useReducedMotion } from "framer-motion";
import PropTypes from "prop-types";

const viewport = { once: true, amount: 0.18 };

const revealVariants = {
    hidden: { opacity: 0, y: 34, filter: "blur(8px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
};

const staggerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.11,
            delayChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
    },
};

export const PageReveal = ({ children, className = "", delay = 0, ...props }) => {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <div className={className} {...props}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ delay }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const StaggerGroup = ({ children, className = "", as = "div", ...props }) => {
    const prefersReducedMotion = useReducedMotion();
    const Component = motion[as] || motion.div;

    if (prefersReducedMotion) {
        const StaticComponent = as;
        return <StaticComponent className={className} {...props}>{children}</StaticComponent>;
    }

    return (
        <Component className={className} variants={staggerVariants} initial="hidden" whileInView="visible" viewport={viewport} {...props}>
            {children}
        </Component>
    );
};

export const MotionItem = ({ children, className = "", as = "div", ...props }) => {
    const prefersReducedMotion = useReducedMotion();
    const Component = motion[as] || motion.div;

    if (prefersReducedMotion) {
        const StaticComponent = as;
        return <StaticComponent className={className} {...props}>{children}</StaticComponent>;
    }

    return (
        <Component className={className} variants={itemVariants} {...props}>
            {children}
        </Component>
    );
};

export const MotionCard = ({ children, className = "", as = "div", ...props }) => {
    const prefersReducedMotion = useReducedMotion();
    const Component = motion[as] || motion.div;

    if (prefersReducedMotion) {
        const StaticComponent = as;
        return <StaticComponent className={className} {...props}>{children}</StaticComponent>;
    }

    return (
        <Component
            className={className}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            {...props}
        >
            {children}
        </Component>
    );
};

PageReveal.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    delay: PropTypes.number,
};

StaggerGroup.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    as: PropTypes.string,
};

MotionItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    as: PropTypes.string,
};

MotionCard.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    as: PropTypes.string,
};
