import { Text, Stack, Box } from '@mantine/core';

function AboutMe() {
  return (
    <Box align="center" className="py-24 bg-sky-800">
      <Stack className="w-full md:w-3/5">
        <Text className="font-bold text-2xl md:text-3xl text-white mb-4">
          Hi, I’m Herumb. Thanks for dropping by.
        </Text>
        <Text className="font-regular text-lg md:text-xl text-white">
          I'm currently working as an{' '}
          <strong>NLP Engineer at Research Rabbit & Six Degrees AI</strong> where most of my task is
          currently revolving around training LLMs, deploying them and using them to power SixAI pipepline. 
          I'm a blog writer and researcher as well and am currently working on projects like ColBERT and DSPy
          at Stanford with Omar Khattab.
          <br />
          <br />
          In my free time, write posts on Twitter or
          LinkedIn trying to introduce topics less known to beginners. Solving
          doubts and teaching people is something I love a lot so if you have
          any questions feel free to DM, I'll try my very best to help you!
          <br />
          <br />
          I hate sports but I love sports anime and I love beatboxing as well.{' '}
          <strong>
            Ping me if you are looking for research collaborators, let's
            brainstorm together!
          </strong>
        </Text>
      </Stack>
    </Box>
  );
}

export default AboutMe;
