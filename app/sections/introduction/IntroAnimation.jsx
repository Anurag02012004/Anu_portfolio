import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useTheme } from "next-themes";

export function WelcomeAnimation() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const { theme, systemTheme } = useTheme();
    const colorMode = theme === "system" ? systemTheme : theme;
    const darkThemeColor = colorMode === "dark";

    useEffect(() => {
        if (isInView) {
            const svg = ref.current.querySelector('svg');
            svg.classList.add('animate');
        }
    }, [isInView]);

    return (
        <div
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
        >
            <svg
                className="BgAnimation__svg"
                viewBox="0 0 600 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff00ff">
                            <animate attributeName="stop-color" values="#ff00ff;#00ffff;#ffff00;#ff00ff" dur="10s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#00ffff">
                            <animate attributeName="stop-color" values="#00ffff;#ffff00;#ff00ff;#00ffff" dur="10s" repeatCount="indefinite" />
                        </stop>
                    </linearGradient>
                    <linearGradient id="gradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ff8c00">
                            <animate attributeName="stop-color" values="#ff8c00;#ff1493;#1e90ff;#ff8c00" dur="8s" repeatCount="indefinite" />
                        </stop>
                        <stop offset="100%" stopColor="#ff1493">
                            <animate attributeName="stop-color" values="#ff1493;#1e90ff;#ff8c00;#ff1493" dur="8s" repeatCount="indefinite" />
                        </stop>
                    </linearGradient>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                
                {/* Background spiral */}
                <path d="M300,300 Q450,150 300,0 T300,300 T300,0 T300,300" fill="none" stroke="url(#gradient2)" strokeWidth="2" opacity="0.5">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 300 300"
                        to="-360 300 300"
                        dur="20s"
                        repeatCount="indefinite"
                    />
                </path>
                
                {/* Main trefoil knot */}
                <path d="M300,150 Q450,150 450,300 T300,450 T150,300 T300,150" fill="none" stroke="url(#gradient1)" strokeWidth="10" filter="url(#glow)">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 300 300"
                        to="360 300 300"
                        dur="15s"
                        repeatCount="indefinite"
                    />
                </path>
                
                {/* Orbiting elements */}
                <g>
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                        <g key={i}>
                            <circle cx="300" cy="300" r="15" fill={darkThemeColor ? "#fff" : "#000"}>
                                <animateMotion
                                    path="M0,0 Q150,150 0,300 T0,0"
                                    dur="10s"
                                    begin={`${i * 1.6}s`}
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="r"
                                    values="15;20;15"
                                    dur="2s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="fill"
                                    values="#ff00ff;#00ffff;#ffff00;#ff00ff"
                                    dur="8s"
                                    begin={`${i * 1.3}s`}
                                    repeatCount="indefinite"
                                />
                            </circle>
                            <path d={`M${290 + i * 20},300 L${310 + i * 20},300`} stroke={darkThemeColor ? "#fff" : "#000"} strokeWidth="2">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    from={`0 ${300 + i * 20} 300`}
                                    to={`360 ${300 + i * 20} 300`}
                                    dur={`${5 + i}s`}
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="stroke"
                                    values="#ff00ff;#00ffff;#ffff00;#ff00ff"
                                    dur="8s"
                                    begin={`${i * 1.3}s`}
                                    repeatCount="indefinite"
                                />
                            </path>
                        </g>
                    ))}
                </g>
            </svg>
        </div>
    );
}
