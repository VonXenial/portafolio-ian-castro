import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    href?: string;
    className?: string;
    target?: string;
}

export default function MagneticButton({ children, href, className = '', target }: Props) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const scale = useMotionValue(1);
    const scaleSpring = useSpring(scale, { damping: 20, stiffness: 300 });

    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        x.set(distanceX * 0.3);
        y.set(distanceY * 0.3);
    };

    const handleMouseEnter = () => {
        scale.set(1.05);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        scale.set(1);
    };

    const buttonStyles = `
    inline-flex items-center gap-3 px-8 py-4 
    bg-cream text-stone font-sans font-medium text-sm uppercase tracking-widest
    rounded-none border-2 border-cream
    hover:bg-transparent hover:text-cream
    transition-colors duration-300
    cursor-pointer
    ${className}
  `;

    const content = (
        <motion.div
            ref={ref}
            style={{ x: xSpring, y: ySpring, scale: scaleSpring }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={buttonStyles}
        >
            {children}
            <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
            </svg>
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} className="group inline-block" target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
                {content}
            </a>
        );
    }

    return <div className="group inline-block">{content}</div>;
}
