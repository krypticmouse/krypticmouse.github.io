import Link from 'next/link'
import React, { useState } from 'react';
import { useMediaQuery } from '@mantine/hooks';
import { Box, Group, Menu, Image, Text, Paper, Collapse } from '@mantine/core';
import { IconBook, IconSearch, IconNotes, IconBulb, IconBeta, IconCodeDots, IconMenu2 } from '@tabler/icons-react';

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
              <a href="/journal">
                <Text className="font-bold hover:text-sky-500">Journal</Text>
              </a>
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
              <a href="/journal">
                <Text className="font-bold hover:text-sky-500">Journal</Text>
              </a>
            </Group>
          </Paper>
        </Collapse>
      )}
    </Box>
  );
}

export default HeaderSimple;