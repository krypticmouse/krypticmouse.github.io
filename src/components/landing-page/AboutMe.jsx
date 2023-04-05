import {
	Text,
	Stack,
	Box
} from '@mantine/core';

function AboutMe() {
	return (
		<Box align="center" className='py-24 bg-sky-800'>
			<Stack className='w-3/5'>
				<Text className='font-bold text-2xl text-white mb-4'>Hi, I’m Herumb. Thanks for dropping by.</Text>
				<Text className='font-regular text-lg text-white'>I'm currently working as an <strong>ML Engineer at Simplified</strong> where most of my task is currently revolving around playing with Generative Models and helping setup deployment pipelines for DL models. I'm a blog writer as well and currently building a course on explaining inner workings of PyTorch.<br /><br />In my free time, I do freelancing or write posts on Twitter or LinkedIn trying to introduce topics less known to beginners. Solving doubts and teaching people is something I love a lot so if you have any questions feel free to DM, I'll try my very best to help you!<br/><br />I hate sports but I love sports anime and I love beatboxing as well. <strong>Ping me if you are looking for research collaborators, let's brainstorm together!</strong></Text>
			</Stack>
		</Box>
	);
}

export default AboutMe;