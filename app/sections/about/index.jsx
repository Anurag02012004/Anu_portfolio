"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { HeadingDivider } from "components";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>
							Hi, I'm Anurag Kushwaha, a 3rd-year student at IIIT Kalyani with a passion for Competitive Programming and Web Development. I have experience in various technologies including C/C++, Python, JavaScript, React, and Solidity.
						</p>
						<p className="my-3.5">
							My programming journey began when I started solving problems on LeetCode, and eventually, I transitioned into Codeforces. This helped me sharpen my problem-solving skills and learn new algorithms.
						</p>
						<p className="my-3.5">
							I have also worked on several full-stack projects including a disease symptom checker app and a blockchain-based deepfake detection project. My curiosity about emerging technologies led me to explore AI, blockchain, and their potential in the real world.
						</p>
						<p>
							In addition to my technical knowledge, I enjoy working on design aspects and have contributed to projects such as the RecyClique App during hackathons where I focused on UI/UX design using Figma.
						</p>
						<p className="my-3.5">
							I am always excited about learning new technologies, and I have recently dived into blockchain development, machine learning, and signature verification using CNNs.
						</p>
						<p>
							My portfolio is a reflection of my journey and growth in the tech world. I look forward to collaborating on impactful projects and expanding my skills across different domains.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
