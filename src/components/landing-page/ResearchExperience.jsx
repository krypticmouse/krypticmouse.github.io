import { Group, Image, SimpleGrid, Text, Box, Title, Stack, Divider, List } from '@mantine/core';
import researchExperienceData from '../../content/website-copy/researchExperience.json';

function ResearchExperience() {
	const renderRole = (role, institutionDisplayName, institutionUrl) => {
		const advisorsText = role.advisors ? ` under ${role.advisors.join(' and ')}` : '';
		const labText = role.lab ? ` at ${role.lab}` : '';
		
		return (
			<>
				<Title className='text-sky-800 text-2xl title-font font-medium'>
					{role.position}
				</Title>
				<Text className='text-sky-600 mb-2 text-xl'>
					{role.period} · {role.duration}
				</Text>
				{role.lab && role.advisors && (
					<Text className='text-sky-800 text-lg mb-2'>
						{role.description}{labText}{advisorsText}
					</Text>
				)}
				{role.projects && (
					<List listStyleType='disc' className='text-sky-800 text-lg'>
						{role.projects.map((project, idx) => {
							const projectAdvisorsText = project.advisors ? ` under ${project.advisors.join(' and ')}` : '';
							const projectLabText = project.lab ? ` at ${project.lab}` : '';
							return (
								<List.Item key={idx}>
									{project.description}{projectLabText}{projectAdvisorsText}
								</List.Item>
							);
						})}
					</List>
				)}
			</>
		);
	};

	return (
		<Box className='w-3/4 sm:w-1/2 my-24 mx-auto px-auto'>
			<Title order={2} className='title-font text-5xl font-bold text-sky-700 mb-12' ta="center" mt="sm">
				Research Experience
			</Title>
			<SimpleGrid cols={1} spacing="xs">
				<Divider />
				{researchExperienceData.map((experience, index) => (
					<div key={index}>
						<div className='py-10'>
							<Group>
								<Image 
									src={experience.image} 
									maw={88} 
									radius={experience.imageRadius || 0}
									className='mr-8' 
									alt=''
								/>
								<Stack spacing={0}>
									{experience.roles.map((role, roleIdx) => (
										<div key={roleIdx} className={roleIdx > 0 ? 'mt-8' : ''}>
											{renderRole(role, experience.displayName || experience.institution, experience.institutionUrl)}
										</div>
									))}
								</Stack>
							</Group>
						</div>
						<Divider />
					</div>
				))}
			</SimpleGrid>
		</Box>
	);
}

export default ResearchExperience;

