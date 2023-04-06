import { Group, Image, SimpleGrid, Text, Box, Title, Stack, Divider, List } from '@mantine/core';
import { IconSun, IconVideo } from '@tabler/icons-react';

function WorkExperience() {
	return (
		<Box className='w-1/2 my-24' px="auto" mx="auto">
			<Title order={2} className='title-font text-5xl font-bold text-sky-700 mb-12' ta="center" mt="sm">
				Work Experience
			</Title>
			<SimpleGrid cols={1} spacing="xs">
				<Divider />
				<div className='py-10'>
					<Group>
						<Image src='/work/educative.png' maw={88} className='mr-8' alt=''/>
						<Stack spacing={0}>
							<Title className='text-sky-800 text-2xl title-font font-medium'>Course Author <span className='font-extrabold hover:text-sky-500'><a href='https://www.educative.io/' target='_blank'>@Educative</a></span></Title>
							<Text className='text-sky-600 mb-4 text-xl'>October, 2022 - Present</Text>
							<List listStyleType='disc' className='text-sky-800 text-lg'>
								<List.Item>Curate a curritculum and topic for the course.</List.Item>
								<List.Item>Writing a course on PyTorch exploring and explaining each module in-depth.</List.Item>
								<List.Item>Explaining added optimization in networks for training, inference and deployment.</List.Item>
							</List>
						</Stack>
					</Group>
				</div>
				<Divider />
				<div className='py-10'>
					<Group>
						<Image src='/work/simplified.png' maw={88} className='mr-8' alt=''/>
						<Stack spacing={0}>
							<Title className='text-sky-800 text-2xl title-font font-medium'>Machine Learning Engineer <span className='font-extrabold hover:text-sky-500'><a href='https://www.simplified.com/' target='_blank'>@Simplified</a></span></Title>
							<Text className='text-sky-600 mb-4 text-xl'>June, 2022 - Present</Text>
							<List listStyleType='disc' className='text-sky-800 text-lg'>
								<List.Item>Simplified is an AI-powered content creation platform for creators backed by tier 1 investors.</List.Item>
								<List.Item>Research, implement and improve generative models to incorporate into the product.</List.Item>
								<List.Item>Train and deploy models for image editing models for the Design Platform.</List.Item>
								<List.Item>Setting up infrastructure and deployment strategies to deploy and scale models.</List.Item>
							</List>

							<Title className='text-sky-800 text-2xl mt-12 title-font font-medium'>Data Science Intern <span className='font-extrabold hover:text-sky-500'><a href='https://www.simplified.com/' target='_blank'>@Simplified</a></span></Title>
							<Text className='text-sky-600 mb-4 text-xl'>January, 2022 - June, 2022</Text>
							<List listStyleType='disc' className='text-sky-800 text-lg'>
								<List.Item>Creating and Optimizing GPT-3 prompts and finding new usecases for the same.</List.Item>
								<List.Item>Train and deploy models for image editing models for the Design Platform.</List.Item>
								<List.Item>Working with SEO team for trend analysis and data scraping for landing pages creation.</List.Item>
							</List>
						</Stack>
					</Group>
				</div>
				<Divider />
				<div className='py-10'>
					<Group>
						<Image src='/work/crowdanalytix.png' maw={88} className='mr-8' alt=''/>
						<Stack spacing={0}>
							<Title className='text-sky-800 text-2xl title-font font-medium'>Data Science Intern <span className='font-extrabold hover:text-sky-500'><a href='https://www.crowdanalytix.com/' target='_blank'>@CrowdANALYTIX</a></span></Title>
							<Text className='text-sky-600 mb-4 text-xl'>July, 2021 - January, 2022</Text>
							<List listStyleType='disc' className='text-sky-800 text-lg'>
								<List.Item>Researching and fine-tuning models for given task.</List.Item>
								<List.Item>Supporting model deployment team in model code analysis and optimizations for DeployX.</List.Item>
								<List.Item>Part of Platform Data Team.</List.Item>
								<List.Item>Experimentation with deep learning models & architecture for DeployX.</List.Item>
								<List.Item>Any other assignment communicated by team lead over email as needed.</List.Item>
							</List>
						</Stack>
					</Group>
				</div>
				<Divider />
				<div className='py-10'>
					<Group>
						<Image src='/work/drdo.png' maw={88} className='mr-8' alt=''/>
						<Stack spacing={0}>
							<Title className='text-sky-800 text-2xl title-font font-medium'>NLP Research Intern <span className='font-extrabold hover:text-sky-500'><a href='https://www.drdo.gov.in/labs-and-establishments/centre-artificial-intelligence-robotics-cair' target='_blank'>@CAIR, DRDO</a></span></Title>
							<Text className='text-sky-600 mb-4 text-xl'>April, 2021 - August, 2021</Text>
							<List listStyleType='disc' className='text-sky-800 text-lg'>
								<List.Item>Building and Training Language Models for the provided task.</List.Item>
								<List.Item>Deploying model as an API via Django and a GUI interface to interact.</List.Item>
								<List.Item>Tasks belonged to Audio and NLP Domain.</List.Item>
								<List.Item>Task information confidential.</List.Item>
							</List>
						</Stack>
					</Group>
				</div>
				<Divider />
				<div className='py-10'>
					<Group>
						<Image src='/work/omdena.png' maw={88} className='mr-8' alt=''/>
						<Stack spacing={0}>
							<Title className='text-sky-800 text-2xl title-font font-medium'>Jr. ML Engineer <span className='font-extrabold hover:text-sky-500'><a href='https://omdena.com/' target='_blank'>@Omdena</a></span></Title>
							<Text className='text-sky-600 mb-4 text-xl'>March, 2021 - May, 2021</Text>
							<List listStyleType='disc' className='text-sky-800 text-lg'>
								<List.Item>Building Sustainable Livestock Farming Computer Vision Models on Edge Device.</List.Item>
								<List.Item>Implemented and Experimented chicken detector based on YOLO, Mask-RCNN, etc.</List.Item>
								<List.Item>Also Implemented object tracking of the movement of each chicken frame by frame.</List.Item>
								<List.Item>The model runs on the hardware Raspberry Pi 4 with a Google Coral Edge-TPU.</List.Item>
							</List>
						</Stack>
					</Group>
				</div>
				<Divider />
				<div className='py-10'>
					<Group>
						<Image src='/work/gfg.png' maw={88} radius={100} className='mr-8' alt=''/>
						<Stack spacing={0}>
							<Title className='text-sky-800 text-2xl title-font font-medium'>Technical Content Intern <span className='font-extrabold hover:text-sky-500'><a href='https://auth.geeksforgeeks.org/user/herumbshandilya/articles' target='_blank'>@GeeksforGeeks</a></span></Title>
							<Text className='text-sky-600 mb-4 text-xl'>Dec, 2020 - July, 2021</Text>
							<List listStyleType='disc' className='text-sky-800 text-lg'>
								<List.Item>Writing articles related to Machine Learning explaining the process.</List.Item>
								<List.Item>Writing code related to the topic on which the blog was written.</List.Item>
								<List.Item>Topics Included: PyTorch Lightning, Model Evaluation, Deep Learning, R Lang, etc.</List.Item>
							</List>
						</Stack>
					</Group>
				</div>
				<Divider />
				<div className='py-10'>
					<Group>
						<Image src='/work/cn.jpeg' maw={88} className='mr-8' alt=''/>
						<Stack spacing={0}>
							<Title className='text-sky-800 text-2xl title-font font-medium'>Data Science and Machine Learning Teaching Assistant <span className='font-extrabold hover:text-sky-500'><a href='https://www.codingninjas.com/' target='_blank'>@Coding Ninjas</a></span></Title>
							<Text className='text-sky-600 mb-4 text-xl'>May, 2020 - September, 2020</Text>
							<List listStyleType='disc' className='text-sky-800 text-lg'>
								<List.Item>Mentored a group of students in their course Data Science and Machine Learning.</List.Item>
								<List.Item>Evaluated and improved the projects developed by students as a part of the course.</List.Item>
							</List>

							<Title className='text-sky-800 text-2xl mt-12 title-font font-medium'>Data Science Intern <span className='font-extrabold hover:text-sky-500'><a href='https://www.codingninjas.com/' target='_blank'>@Coding Ninjas</a></span></Title>
							<Text className='text-sky-600 mb-4 text-xl'>December, 2019 - April, 2020</Text>
							<List listStyleType='disc' className='text-sky-800 text-lg'>
								<List.Item>Mentored a group of students in their course Data Structure and Algorithm using C++.</List.Item>
								<List.Item>Served as an influential contributor to projects developed by the students.</List.Item>
							</List>
						</Stack>
					</Group>
				</div>
				<Divider />
			</SimpleGrid>
		</Box>
	);
}

export default WorkExperience;