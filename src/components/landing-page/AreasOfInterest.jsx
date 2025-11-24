import {
	createStyles,
	Badge,
	Group,
	Title,
	Text,
	Card,
	SimpleGrid,
	Container,
	rem,
} from '@mantine/core';
import { 
	IconLanguage, 
	IconEye, 
	IconArrowsLeftRight, 
	IconDeviceDesktop, 
	IconZoomExclamation, 
	IconRobot, 
	IconSearch
} from '@tabler/icons-react';

const mockdata = [
	{
		title: 'ML Systems',
		description:
			"Systems became an area of major interest for me this year. I've worked on project in Rust, CUDA and Triton to name a few. I'm currently working building DSRs which is a Rust port of DSPy and building SparkPuppies which is a collection of performance optimal kernels for Sparse Matrix Operations.",
		icon: IconEye,
	},
	{
		title: 'LLM Post-Training',
		description:
			"The fun is after pretraining ends! In my current and past works, I've worked on post-training techniques and building infrastructure for various downstream tasks like Tool Use, etc. I'm currently working on finding techniques to improve output format adaptation in LLMs.",
		icon: IconLanguage,
	},
	{
		title: 'Information Retrieval',
		description:
			"Information Retrieval is something I've been working on for a while now. I've seen the power of it and how it can be used to solve real world problems. I've worked on traditional IR models and also on modern ones. I've researched deeply on training retrieval models for LLM routing. I love it!",
		icon: IconSearch,
	},
	{
		title: 'Performance Optimization',
		description:
			"Performance is as important as model itself. The limitations of research should be around the ideas and not the infrastructure. Building fast and efficient research infrastructure is something I'm passionate about and have been doing in labs for the past few years.", 
		icon: IconDeviceDesktop,
	},
	{
		title: 'Deep Learning Research',
		description:
			"I've implemented papers for personal learning, for work and as freelancer for student researchers and worked with them to improve them. Up for hearing your ideas in mind and help you brainstorm how to can go about the task!",
		icon: IconZoomExclamation,
	},
	{
		title: 'Reinforcement Learning',
		description:
			"Reinforcement Learning was my gateway to ML, so it has always been something I wanted to try. After reading AlphaTensor I got more fascinated with it. Currently, I'm working with RL for LLM post-training team at Stanford.",
		icon: IconRobot,
	},
];

const useStyles = createStyles((theme) => ({
	description: {
		maxWidth: 600,
		margin: 'auto',

		'&::after': {
			content: '""',
			display: 'block',
			backgroundColor: theme.fn.primaryColor(),
			width: rem(45),
			height: rem(2),
			marginTop: theme.spacing.sm,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},

	card: {
		border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
			}`,
	},

	cardTitle: {
		'&::after': {
			content: '""',
			display: 'block',
			backgroundColor: theme.fn.primaryColor(),
			width: rem(45),
			height: rem(2),
			marginTop: theme.spacing.sm,
		},
	},
}));

function AreasOfInterest() {
	const { classes, theme } = useStyles();
	const features = mockdata.map((feature) => (
		<Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
			<feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
			<Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
				{feature.title}
			</Text>
			<Text fz="sm" c="dimmed" mt="sm">
				{feature.description}
			</Text>
		</Card>
	));

	return (
		<Container size="lg" className='py-24'>
			<Title order={2} className='title-font text-5xl font-bold text-sky-700' ta="center" mt="sm">
				Areas of Interest
			</Title>

			<Text c="dimmed" className={classes.description} ta="center" mt="md">
				Here are a few domains that I've explored and what I'm upto...
			</Text>

			<SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
				{features}
			</SimpleGrid>
		</Container>
	);
}

export default AreasOfInterest;