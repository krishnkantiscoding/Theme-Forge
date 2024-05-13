import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
  } from '@mantine/core';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
  import classes from './FeaturesCards.module.css';

  
  const mockdata = [
    {
      title: 'Customization',
      description:
        'Enable users to tailor their coding experience according to their preferences, allowing them to create themes that reflect their unique style, workflow, and personality.',
      icon: IconGauge,
    },
    {
      title: 'User-Friendly Experience',
      description:
        'Offer an intuitive and user-friendly interface that makes it easy for users regardless of their level of expertise, to design and customize themes effortlessly.',
      icon: IconUser,
    },
    {
      title: 'Enhance Coding Experience',
      description:
        'Enhance the overall coding experience by enabling Users to create Themes that improve Readability, reduce Eye Strain and increase Productivity.',
      icon: IconCookie,
    },
  ];
  
  export function FeaturesCards() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon
          style={{ width: rem(50), height: rem(50) }}
          stroke={2}
          color={theme.colors.blue[6]}
        />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container size="lg" py="xl">
        <Group justify="center">
          <Badge variant="filled" size="lg">
            Best Customization Tool
          </Badge>
        </Group>
  
        <Title order={2} className={classes.title} ta="center" mt="sm">
          Customize your VsCode Completely with Our Exclusive Customization Tools
        </Title>
  
        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
          hunger drives it to try biting a Steel-type Pokémon.
        </Text>
  
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
          {features}
        </SimpleGrid>
      </Container>
    );
  }