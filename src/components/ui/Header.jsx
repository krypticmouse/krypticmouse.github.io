import { Box, Group, Menu, Image, Text } from '@mantine/core';
import { IconBook, IconSearch, IconNotes, IconBulb, IconBeta } from '@tabler/icons-react';

function JournalMenu() {
  return (
    <Menu shadow="md" width={220} trigger="hover">
      <Menu.Target>
        <a href='/journal'><Text className='font-bold hover:text-sky-500'>Journal</Text></a>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label className='text-sky-900'>Research Journal</Menu.Label>
        <Menu.Item icon={<IconNotes size={14} />} className='text-sky-600'>Papers for Clout</Menu.Item>
        <Menu.Item icon={<IconBook size={14} />} className='text-sky-600'>Mini Journal</Menu.Item>
        <Menu.Item icon={<IconSearch size={14} />} className='text-sky-600'>200</Menu.Item>

        <Menu.Divider />

        <Menu.Label className='text-sky-900'>Micro Blogs</Menu.Label>
        <Menu.Item icon={<IconBeta size={14} />} className='text-sky-600'>The Mathematical Idiot</Menu.Item>
        <Menu.Item icon={<IconBulb size={14} />} className='text-sky-600'>Concepts with Friends</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

function HeaderSimple() {
  return (
    <Box className='my-4 mx-64 text-sky-700'>
      <Group className='w-full flex justify-between'>
        <a href='/'>
          <Image src='/Krypticmouse.jpeg' maw={64} radius='100%' alt=''/>
        </a>
        <Group spacing={32} className='text-xl'>
          <a href='/blogs'>
            <Text className='font-bold hover:text-sky-500'>Blogs</Text>
          </a>
          <a href='/projects'>
            <Text className='font-bold hover:text-sky-500'>Projects</Text>
          </a>
          <JournalMenu />
        </Group>
      </Group>
    </Box>
  );
}

export default HeaderSimple;