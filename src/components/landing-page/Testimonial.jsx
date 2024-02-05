import {
	Text,
	Title,
	Stack,
	Box
} from '@mantine/core';
import { IconQuote } from '@tabler/icons-react';

function Testimonials() {
	return (
		<Box align="center" className='py-24 bg-sky-800'>
			<Stack className='w-3/5' align='center' spacing={0}>
				<Title order={2} className='title-font text-5xl font-bold text-white' ta="center" mt="sm">
					Testimonial
				</Title>
				<Text c="dimmed" className="text-lg text-sky-200" ta="center" mt={0}>
					What people I worked with say about me...
				</Text>
				<IconQuote size={64} className='text-sky-200 my-6' />
				<Text className='font-regular text-lg text-white w-3/5' ta="center">Recently I worked with Herumb on Omdena's Faromatics Project to build ML models. Herumb completed the assigned tasks with perfection and proactively took the challenging work during data preparation. Being a great team player, he would always come up with creative ideas for the problems at hand. His contribution to the project is highly invaluable. I would strongly recommend Herumb.</Text>
				<span className="inline-block h-1 w-10 rounded bg-sky-500 mt-8 mb-6"></span>
				<Text className='font-bold text-3xl text-sky-200 w-3/5' ta="center">Team Lead</Text>
				<Text className='font-regular text-lg text-sky-200 w-3/5' ta="center">Faromatics Project</Text>

			</Stack>
		</Box>
	);
}

export default Testimonials;