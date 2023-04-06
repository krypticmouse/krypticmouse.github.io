import {
  Card,
  Avatar,
  Text,
  Group,
  Badge,
  createStyles,
  rem,
} from '@mantine/core';
import PropTypes from 'prop-types';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

const propsType = ProjectCard.propTypes = {
  tags: PropTypes.array,
	stack: PropTypes.array,
  title: PropTypes.string,
	desc: PropTypes.string,
}

function ProjectCard(props) {
  const { classes, theme } = useStyles();

  const tags = props.tags.map((label) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={label}
    >
      {label}
    </Badge>
  ));

	const stack = props.stack.split(", ").map((label) => (
    <Badge
      color={theme.colorScheme === 'dark' ? 'dark' : 'gray'}
      key={label}
    >
      {label}
    </Badge>
  ));

  return (
    <Card withBorder miw={256} radius="md" p="md" className={classes.card}>
      <Card.Section className={classes.section} mt="md">
        <Group position="apart" mt="md">
          <Text fz="lg" fw={500} className='text-xl font-extrabold text-sky-700'>
            {props.title}
          </Text>
        </Group>
        <Text fz="sm" mt="xs" className='text-lg text-gray-500'>
          {props.desc}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Domain
        </Text>
        <Group spacing={7} mt={5}>
          {tags}
        </Group>
      </Card.Section>

			<Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Teck Stack
        </Text>
        <Group spacing={7} mt={5}>
          {stack}
        </Group>
      </Card.Section>
    </Card>
  );
}

export default ProjectCard;