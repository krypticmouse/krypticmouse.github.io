import { Group, Image, SimpleGrid, Text, Box, Title, Stack, Divider, List } from '@mantine/core';
import workExperienceData from '../../content/website-copy/workExperience.json';

function WorkExperience() {
	const renderRole = (role, companyDisplayName, companyUrl, isAdditional = false) => (
		<>
			{isAdditional && <Title className='text-sky-800 text-2xl mt-12 title-font font-medium'>
				{role.position} <span className='font-extrabold hover:text-sky-500'>
					<a href={companyUrl} target='_blank' rel='noopener noreferrer'>{companyDisplayName}</a>
				</span>
			</Title>}
			{!isAdditional && <Title className='text-sky-800 text-2xl title-font font-medium'>
				{role.position} <span className='font-extrabold hover:text-sky-500'>
					<a href={companyUrl} target='_blank' rel='noopener noreferrer'>{companyDisplayName}</a>
				</span>
			</Title>}
			<Text className='text-sky-600 mb-4 text-xl'>{role.period}</Text>
			<List listStyleType='disc' className='text-sky-800 text-lg'>
				{role.responsibilities.map((responsibility, idx) => (
					<List.Item key={idx}>{responsibility}</List.Item>
				))}
			</List>
		</>
	);

	return (
		<Box className='w-3/4 sm:w-1/2 my-24 mx-auto px-auto'>
			<Title order={2} className='title-font text-5xl font-bold text-sky-700 mb-12' ta="center" mt="sm">
				Work Experience
			</Title>
			<SimpleGrid cols={1} spacing="xs">
				<Divider />
				{workExperienceData.map((experience, index) => (
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
									{renderRole(
										{
											position: experience.position,
											period: experience.period,
											responsibilities: experience.responsibilities
										},
										experience.displayName || experience.company,
										experience.companyUrl
									)}
									{experience.additionalRoles && experience.additionalRoles.map((additionalRole, roleIdx) => (
										<div key={roleIdx}>
											{renderRole(
												additionalRole,
												experience.displayName || experience.company,
												experience.companyUrl,
												true
											)}
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

export default WorkExperience;