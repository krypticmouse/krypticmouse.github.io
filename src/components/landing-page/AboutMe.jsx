import { Text, Stack, Box } from '@mantine/core';

function AboutMe() {
  return (
    <Box align="center" className="py-24 bg-sky-800">
      <Stack className="w-full md:w-3/5">
        <Text className="font-bold text-2xl md:text-3xl text-white mb-4">
          Hi, I’m Herumb. Thanks for dropping by.
        </Text>
        <Text className="font-regular text-lg md:text-xl text-white">
          I'm currently working as a{' '}
          <strong>Research Assistant at CRFM (Centre for Research in Foundation Models) Lab at Stanford University</strong> where most of my task is
          currently revolving around building infrastructure for evaluating and post-training LLMs. 
          I'm working in other labs including Hazy Research and Scaling Intelligence Lab with Jon Saad Falcon on various projects ranging from multi model inference, LLM routing, Agent Evaluations, etc.
          <br />
          <br />
          In my free time, I (try to) write posts on Twitter or
          LinkedIn trying to introduce topics less known to beginners. Teaching people is something I love a lot so if you have
          any questions feel free to DM, I'll try my very best to help you out!
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
