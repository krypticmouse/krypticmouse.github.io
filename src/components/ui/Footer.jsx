import { Box, Group, Image, Text } from '@mantine/core';
import { 
  IconBrandTwitter, 
  IconBrandLinkedin, 
  IconBrandGithub, 
  IconBrandStackoverflow,
  IconBrandMedium,
  IconDiamondsFilled,
  IconLetterG
} from '@tabler/icons-react';


function FooterSocial() {
  var twitterLink = 'https://twitter.com/krypticmouse/';
  var linkedinLink = 'https://www.linkedin.com/in/herumb-s-740163131/';
  var githubLink = 'https://github.com/krypticmouse';
  var stackoverflowLink = 'https://stackoverflow.com/users/12089982/krypticmouse';
  var hashnodeLink = 'https://krypticmouse.hashnode.dev/';
  var mediumLink = 'https://theaveragecoder.medium.com/';
  var gfgLink = 'https://auth.geeksforgeeks.org/user/herumbshandilya/articles';
  
  return (
    <Box className='py-3 px-64 text-white bg-sky-900'>
      <Group className='w-full flex justify-between'>
        <Group>
          <a href='/blogs'>
            <Image src='/Krypticmouse.jpeg' maw={64} radius='100%'/>
          </a>
          <Text>Herumb Shandilya <span>|</span> Made with Mantine — <a target='_blank' href={twitterLink} className='text-cyan-300 hover:text-cyan-600'>@krypticmouse</a></Text>
        </Group>
        <Group spacing={32} className='text-xl'>
          <a target='_blank' href={twitterLink}>
            <IconBrandTwitter size={28} className='hover:text-blue-500'/>
          </a>
          <a target='_blank' href={linkedinLink}>
            <IconBrandLinkedin size={28} className='hover:text-blue-700'/>
          </a>
          <a target='_blank' href={githubLink}>
            <IconBrandGithub size={28} className='hover:text-gray-400'/>
          </a>
          <a target='_blank' href={stackoverflowLink}>
            <IconBrandStackoverflow size={28} className='hover:text-orange-600'/>
          </a>
          <a target='_blank' href={mediumLink}>
            <IconBrandMedium size={28} className='hover:text-gray-400'/>
          </a>
          <a target='_blank' href={hashnodeLink}>
            <IconDiamondsFilled size={28} className='hover:text-blue-700'/>
          </a>
          <a target='_blank' href={gfgLink}>
            <IconLetterG size={28} className='hover:text-green-500'/>
          </a>
        </Group>
      </Group>
    </Box>
  );
}

export default FooterSocial;