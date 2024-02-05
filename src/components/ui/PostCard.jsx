import { createStyles, Card, Image, Avatar, Text, Group } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  title: {
    fontWeight: 700,
    fontFamily: `Open Sans, sans-serif`,
    lineHeight: 1.2,
  },

  body: {
    padding: theme.spacing.md,
  },
}));

function PostCard({
  category,
  title,
  date,
  author,
  description,
}) {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group noWrap spacing={0}>
        <div className={classes.body}>
          <Text transform="uppercase" color="dimmed" weight={700} size="xs">
            {category}
          </Text>
          <Text className={`text-sky-600 ${classes.title}`} mt="xs" mb="md">
            {title}
          </Text>
          <Text size="sm" color="dimmed">
            {description}
          </Text>
          <Group noWrap spacing="xs">
            <Group spacing="xs" noWrap>
              <Text className="text-sky-900" size="xs">{author}</Text>
            </Group>
            <Text size="xs" color="dimmed">
              •
            </Text>
            <Text className="text-sky-900" size="xs" color="dimmed">
              {date}
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}

export default PostCard;