import { IconHeart } from '@tabler/icons-react';
import {
  Card,
  Avatar,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
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

const propsType = BlogCard.propTypes = {
  tags: PropTypes.array,
  title: PropTypes.string,
	desc: PropTypes.string,
	date: PropTypes.string,
	img: PropTypes.string,
	href: PropTypes.string,
}

function BlogCard(props) {
  const { classes, theme } = useStyles();

  const features = props.tags.map((label) => (
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
          <Text fz="lg" fw={500} className='text-xl font-extrabold text-sky-700' maw="90%">
            {props.title}
          </Text>
          <Avatar size="xs" src={props.img}/>
        </Group>
        <Text fz="sm" mt="xs" className='text-lg text-gray-500'>
          {props.desc}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Related Topics
        </Text>
        <Group spacing={7} mt={5}>
          {features}
        </Group>
      </Card.Section>

      <Group mt="xs">
					<Button radius="md" href={props.href} className='bg-blue-500' style={{ flex: 1 }} component="a" target="_blank" rel="noopener noreferrer">
						Read More
					</Button>
        <ActionIcon variant="default" radius="md" size={36} miw="40%" className='text-gray-400'>
          {props.date}
        </ActionIcon>
      </Group>
    </Card>
  );
}

export default BlogCard;