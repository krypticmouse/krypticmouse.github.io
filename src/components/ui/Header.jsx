import Link from 'next/link'
import React, { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Box, Group, Menu, Image, Text, Paper, Collapse } from '@mantine/core';
import { IconBook, IconSearch, IconNotes, IconBulb, IconBeta, IconCodeDots, IconMenu2 } from '@tabler/icons-react';

function JournalMenu() {
  return (
    <Menu shadow="md" width={220} trigger="hover">
      <Menu.Target>
        <a href='#'><Text className='font-bold hover:text-sky-500'>Journal</Text></a>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label className='text-sky-900'>Research Journal</Menu.Label>
        <Menu.Item icon={<IconNotes size={14}/>} className='text-sky-600' href='/journal/papers-for-clout' component={Link}>Papers for Clout</Menu.Item>
        <Menu.Item icon={<IconBook size={14} />} className='text-sky-600' href='/journal/mini-journal' component={Link}>Mini Journal</Menu.Item>
        <Menu.Item icon={<IconSearch size={14} />} className='text-sky-600' href='/journal/200' component={Link}>200</Menu.Item>

        <Menu.Divider />

        <Menu.Label className='text-sky-900'>Micro Blogs</Menu.Label>
        <Menu.Item icon={<IconBeta size={14} /> } className='text-sky-600' href='/journal/the-mathematical-idiot' component={Link}>The Mathematical Idiot</Menu.Item>
        <Menu.Item icon={<IconBulb size={14} />} className='text-sky-600' href='/journal/this-is-all-we-know' component={Link}>This is all We Know</Menu.Item>
        <Menu.Item icon={<IconCodeDots size={14} />} className='text-sky-600' href='/journal/anybody-can-code' component={Link}>Anybody Can Code</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

function HeaderSimple() {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box className="my-4 mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:mx-64 text-sky-700">
      <Group className="w-full flex justify-between">
        <a href="/">
          <Image src="/Krypticmouse.jpeg" maw={64} radius="100%" alt="" />
        </a>
        {isSmallScreen ? (
          <IconMenu2
            size={32}
            className="font-bold hover:text-sky-500 cursor-pointer"
            onClick={toggleMenu}
          />
        ) : (
          <Group spacing={32} className="text-xl">
            <a href="/blogs">
                <Text className="font-bold hover:text-sky-500">Blogs</Text>
              </a>
              <a href="/projects">
                <Text className="font-bold hover:text-sky-500">Projects</Text>
              </a>
            <JournalMenu />
          </Group>
        )}
      </Group>
      {isSmallScreen && (
        <Collapse in={menuOpen}>
          <Paper padding="md" className="mt-4 text-sky-700">
            <Group spacing={32} className="text-xl">
              <a href="/blogs">
                <Text className="font-bold hover:text-sky-500">Blogs</Text>
              </a>
              <a href="/projects">
                <Text className="font-bold hover:text-sky-500">Projects</Text>
              </a>
              <JournalMenu />
            </Group>
          </Paper>
        </Collapse>
      )}
    </Box>
  );
}

export default HeaderSimple;