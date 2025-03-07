import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub, AiFillGitlab } from "react-icons/ai";
import { DiCss3, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaWordpressSimple, FaFigma, FaTrello } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";
import { SiSolidity, SiWeb3Dotjs, SiEthereum } from "react-icons/si"; // Added icons for blockchain tools
import AdobeXDIcon from "public/assets/svg/adobexd.svg";
import ZeplinIcon from "public/assets/svg/zeplin.svg";
import WebstormIcon from "public/assets/svg/webstorm.svg";
import JiraIcon from "public/assets/svg/jira.svg";
import HeadlessUiIcon from "public/assets/svg/headlessui.svg";
import MuiIcon from "public/assets/svg/mui.svg";
import ChakraIcon from "public/assets/svg/chakraui.svg";
import StyledIcon from "public/assets/svg/styledcomponents.svg";

export const TECHNOLOGIES = [
	{
		category: "Mobile",
		items: [{ name: "React Native", icon: <FaReact size={32} /> }] // Updated Flutter to React Native
	},
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "Chakra", icon: <ChakraIcon width={32} /> },
			{ name: "styled components", icon: <StyledIcon width={32} /> },
			{ name: "HeadlessUI", icon: <HeadlessUiIcon width={32} /> }
		]
	},
	{
		category: "Blockchain",
		items: [
			{ name: "Solidity", icon: <SiSolidity size={32} /> },  // Solidity icon
			{ name: "Web3.js", icon: <SiWeb3Dotjs size={32} /> }, // Web3.js icon
			{ name: "Ethereum", icon: <SiEthereum size={32} /> }, // Ethereum icon
			{ name: "Truffle", icon: <AiOutlineAntDesign size={32} /> }, // Truffle icon (using a close alternative)
			{ name: "Hardhat", icon: <AiOutlineAntDesign size={32} /> }  // Hardhat icon (using a close alternative)
		]
	},
	{
		category: "UI tools",
		items: [
			{ name: "Figma", icon: <FaFigma size={32} /> },
			// { name: "Zeplin", icon: <ZeplinIcon width={36} /> },
			{ name: "XD", icon: <AdobeXDIcon width={32} /> }
		]
	},
	{
		category: "Other tools",
		items: [
			{ name: "Github", icon: <AiFillGithub size={32} /> },
			{ name: "Gitlab", icon: <AiFillGitlab size={32} /> },
			{ name: "VsCode", icon: <DiVisualstudio size={32} /> },
			// { name: "WebStorm", icon: <WebstormIcon width={32} /> }
		]
	}
];
