const author = "Anurag Kushwaha";
const description =
	"A versatile developer skilled in React Native, blockchain, and front-end technologies.";
const url = "https://anurag-portfolio.netlify.app";  // Updated URL for uniqueness

export const AppMetadata = {
	metadataBase: new URL("https://anurag-portfolio.netlify.app/"),
	title: {
		default: `Innovative Development | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"React Native developer",
		"Blockchain Developer",
		"Front-End Developer",
		"Full Stack Developer",
		"Portfolio website",
		"Innovative Web Design",
		"Anurag's Development Journey"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Innovative Developer Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Developer Portfolio`,
		images: [
			{
				url: "https://anurag-portfolio.netlify.app/unique-design.webp",
				width: 800,
				height: 600,
				alt: "Unique portfolio homepage design"
			},
			{
				url: "https://anurag-portfolio.netlify.app/unique-design.webp",
				width: 1800,
				height: 1600,
				alt: "Innovative design showcasing projects"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
