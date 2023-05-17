import {
	createStyles,
	Text,
	Title,
	SimpleGrid,
	TextInput,
	Textarea,
	Button,
	Group,
	ActionIcon,
	rem,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandLinkedin } from '@tabler/icons-react';
import ContactIconsList from './ContactIcons';

const useStyles = createStyles((theme) => ({
	wrapper: {
		minHeight: 400,
		boxSizing: 'border-box',
		backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][7]
			} 100%)`,
		borderRadius: theme.radius.md,
		padding: `calc(${theme.spacing.xl} * 2.5)`,

		[theme.fn.smallerThan('sm')]: {
			padding: `calc(${theme.spacing.xl} * 1.5)`,
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		color: theme.white,
		lineHeight: 1,
	},

	description: {
		color: theme.colors[theme.primaryColor][0],
		maxWidth: rem(300),

		[theme.fn.smallerThan('sm')]: {
			maxWidth: '100%',
		},
	},

	form: {
		backgroundColor: theme.white,
		padding: theme.spacing.xl,
		borderRadius: theme.radius.md,
		boxShadow: theme.shadows.lg,
	},

	social: {
		color: theme.white,

		'&:hover': {
			color: theme.colors[theme.primaryColor][1],
		},
	},

	input: {
		backgroundColor: theme.white,
		borderColor: theme.colors.gray[4],
		color: theme.black,

		'&::placeholder': {
			color: theme.colors.gray[5],
		},
	},

	inputLabel: {
		color: theme.black,
	},

	control: {
		backgroundColor: theme.colors[theme.primaryColor][2],
	},
}));

function ContactMe() {
	const { classes } = useStyles();
  
	return (
	  <div className={`mx-auto my-24 sm:mx-10 md:mx-10 lg:mx-72 ${classes.wrapper}`}>
		<SimpleGrid
		  cols={2}
		  spacing={50}
		  breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 20 }]}
		>
		  <div>
			<Title className={classes.title}>Contact Me</Title>
			<Text className={classes.description} mt="sm" mb={30}>
			  If you are a <strong>Researcher, Founder or Student</strong>. Let's
			  have a chat, you can drop a DM here...
			</Text>
  
			<ContactIconsList />
  
			<Group mt="xl">
			  <a href="https://twitter.com/krypticmouse/">
				<ActionIcon
				  key={0}
				  size={28}
				  className={classes.social}
				  variant="transparent"
				>
				  <IconBrandTwitter size="1.4rem" stroke={1.5} />
				</ActionIcon>
			  </a>
			  <a href="https://www.linkedin.com/in/herumb-s-740163131/">
				<ActionIcon
				  key={0}
				  size={28}
				  className={classes.social}
				  variant="transparent"
				>
				  <IconBrandLinkedin size="1.4rem" stroke={1.5} />
				</ActionIcon>
			  </a>
			</Group>
		  </div>
		  <div className={classes.form}>
			<TextInput
			  label="Email"
			  placeholder="your@email.com"
			  required
			  classNames={{ input: classes.input, label: classes.inputLabel }}
			/>
			<TextInput
			  label="Name"
			  placeholder="John Doe"
			  mt="md"
			  classNames={{ input: classes.input, label: classes.inputLabel }}
			/>
			<Textarea
			  required
			  label="Your message"
			  placeholder="Wanna collaborate over a project on..."
			  minRows={4}
			  mt="md"
			  classNames={{ input: classes.input, label: classes.inputLabel }}
			/>
  
			<Group position="right" mt="md">
			  <Button className={`bg-blue-400 ${classes.control}`}>
				Send message
			  </Button>
			</Group>
		  </div>
		</SimpleGrid>
	  </div>
	);
  }
  

export default ContactMe;