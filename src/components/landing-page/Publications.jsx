import { Text, Box, Stack, createStyles, rem, Title, Group, Anchor } from '@mantine/core';
import publicationsData from '../../content/website-copy/publications.json';

const useStyles = createStyles((theme) => ({
	item: {
		display: 'flex',
		alignItems: 'flex-start',
		borderRadius: theme.radius.md,
		border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
		padding: theme.spacing.md,
		marginBottom: theme.spacing.xs,
		cursor: 'default',
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
		gap: rem(16),
	},

	year: {
		fontSize: rem(16),
		fontWeight: 600,
		width: rem(50),
		textAlign: 'left',
		flexShrink: 0,
		color: theme.colorScheme === 'dark' ? theme.colors.gray[5] : theme.colors.gray[6],
	},

	content: {
		flex: 1,
	},

	title: {
		fontSize: rem(16),
		fontWeight: 500,
		marginBottom: rem(4),
		color: theme.colorScheme === 'dark' ? theme.white : theme.colors.gray[9],
		lineHeight: 1.4,
	},

	lab: {
		fontSize: rem(13),
		fontWeight: 700,
		marginBottom: rem(4),
		color: theme.colorScheme === 'dark' ? theme.colors.gray[4] : theme.colors.gray[6],
		lineHeight: 1.4,
	},

	links: {
		display: 'inline-flex',
		gap: rem(8),
		marginTop: rem(4),
	},
}));

function PublicationItem({ publication, index }) {
	const { classes } = useStyles();

	return (
		<div className={classes.item}>
			<Text className={classes.year}>{publication.year}</Text>
			<div className={classes.content}>
				<Text className={classes.title}>{publication.title}</Text>
				{publication.lab && (
					<Text className={classes.lab}>{publication.lab}</Text>
				)}
				{publication.links && (publication.links.arxiv || publication.links.paper || publication.links.code) && (
					<div className={classes.links}>
						{publication.links.arxiv && (
							<Anchor href={publication.links.arxiv} target="_blank" rel="noopener noreferrer" size="xs" className="text-sky-600 hover:text-sky-500">
								arXiv
							</Anchor>
						)}
						{publication.links.paper && (
							<Anchor href={publication.links.paper} target="_blank" rel="noopener noreferrer" size="xs" className="text-sky-600 hover:text-sky-500">
								Paper
							</Anchor>
						)}
						{publication.links.code && (
							<Anchor href={publication.links.code} target="_blank" rel="noopener noreferrer" size="xs" className="text-sky-600 hover:text-sky-500">
								Code
							</Anchor>
						)}
					</div>
				)}
			</div>
		</div>
	);
}

export default function Publications() {
	// Sort by year descending (newest first)
	const sortedPublications = [...publicationsData].sort((a, b) => {
		return parseInt(b.year) - parseInt(a.year);
	});

	return (
		<Box className="py-24 bg-sky-800">
			<Box className='w-3/4 sm:w-1/2 mx-auto'>
				<Title order={2} className='title-font text-5xl font-bold text-white mb-12' ta="center">
					Publications
				</Title>
				<Stack spacing={0}>
					{sortedPublications.map((publication, index) => (
						<PublicationItem key={index} publication={publication} index={index} />
					))}
				</Stack>
			</Box>
		</Box>
	);
}

