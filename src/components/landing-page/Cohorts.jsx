import { createStyles, Text, rem, Title, Box } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][7]
			} 100%)`,
		padding: `calc(${theme.spacing.xl} * 1.5)`,
		borderRadius: theme.radius.md,
	},
	
	statsContainer: {
		display: 'flex',
		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
		},
	},
	
	sectionTitle: {
		color: theme.white,
		textAlign: 'center',
		marginBottom: theme.spacing.xl,
		fontSize: rem(32),
		fontWeight: 700,
	},

	title: {
		color: theme.white,
		textTransform: 'uppercase',
		fontWeight: 700,
		fontSize: theme.fontSizes.sm,
	},

	count: {
		color: theme.white,
		fontSize: rem(32),
		lineHeight: 1,
		fontWeight: 700,
		marginBottom: theme.spacing.md,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
	},

	description: {
		color: theme.colors[theme.primaryColor][0],
		fontSize: theme.fontSizes.sm,
		marginTop: rem(5),
	},

	stat: {
		flex: 1,

		'& + &': {
			paddingLeft: theme.spacing.xl,
			marginLeft: theme.spacing.xl,
			borderLeft: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,

			[theme.fn.smallerThan('sm')]: {
				paddingLeft: 0,
				marginLeft: 0,
				borderLeft: 0,
				paddingTop: theme.spacing.xl,
				marginTop: theme.spacing.xl,
				borderTop: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
			},
		},
	},
}));

function Cohorts({ data }) {
	const { classes } = useStyles();
	data = [
        {
            "title": "2022",
            "stats": "Started Beginner in Research Group"
        },
        {
            "title": "2022-2023",
            "stats": "Lead Paper Implementation Sprints"
        },
		{
			"title": "2023",
			"stats": "Lead CUDA Programming Cohort"
		},
		{
			"title": "2023",
			"stats": "Co-Lead AI Alignment Cohort"
		},
		{
			"title": "2024",
			"stats": "Co-Lead NLP Reading Group"
		}
	]

	const stats = data.map((stat) => (
		<div key={stat.title} className={classes.stat}>
			<Text className={classes.count}>{stat.stats}</Text>
			<Text className={classes.title}>{stat.title}</Text>
		</div>
	));
	return (
		<Box className='my-24 mx-auto px-auto'>
			<div className={`mx-32 ${classes.root}`}>
				<Title order={2} className={classes.sectionTitle}>
					Talks @ Cohere Labs
				</Title>
				<div className={classes.statsContainer}>{stats}</div>
			</div>
		</Box>
	);
}

export default Cohorts;