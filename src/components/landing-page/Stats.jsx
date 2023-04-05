import { createStyles, Text, rem } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	root: {
		display: 'flex',
		backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][7]
			} 100%)`,
		padding: `calc(${theme.spacing.xl} * 1.5)`,
		borderRadius: theme.radius.md,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
		},
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

function Stats({ data }) {
	const { classes } = useStyles();
	data = [
		{
			"title": "Blogs",
			"stats": "30+"
		},
		{
			"title": "Projects",
			"stats": "20+"
		},
		{
			"title": "Talks & Sessions",
			"stats": "10+"
		},
		{
			"title": "Doubts Solved",
			"stats": "1000+"
		},
		{
			"title": "Python Libraries",
			"stats": "2"
		}
	]

	const stats = data.map((stat) => (
		<div key={stat.title} className={classes.stat}>
			<Text className={classes.count}>{stat.stats}</Text>
			<Text className={classes.title}>{stat.title}</Text>
		</div>
	));
	return <div className={`mx-32 ${classes.root}`}>{stats}</div>;
}

export default Stats;