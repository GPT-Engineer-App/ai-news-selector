import React, { useState, useEffect } from "react";
import { Container, VStack, Text, Heading, Box, Spinner, Image, IconButton } from "@chakra-ui/react";
import { FaSync } from "react-icons/fa";

const Index = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching news data
    setTimeout(() => {
      setNews([
        { id: 1, title: "Breaking News: Market Hits All-Time High", genre: "Finance", image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldHxlbnwwfHx8fDE3MTczMTMzMzV8MA&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 2, title: "Tech Giants Release New Gadgets", genre: "Technology", image: "https://images.unsplash.com/photo-1515940175183-6798529cb860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwZ2FkZ2V0c3xlbnwwfHx8fDE3MTczMTMzMzV8MA&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 3, title: "Health Tips for a Better Life", genre: "Health", image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB0aXBzfGVufDB8fHx8MTcxNzMxMzMzNXww&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 4, title: "Top Travel Destinations in 2023", genre: "Travel", image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbnN8ZW58MHx8fHwxNzE3MzEzMzM2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  const refreshNews = () => {
    setLoading(true);
    // Simulate fetching new news data
    setTimeout(() => {
      setNews([
        { id: 1, title: "Breaking News: Market Hits All-Time High", genre: "Finance", image: "https://images.unsplash.com/photo-1612010167102-d1e8f83833e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxzdG9jayUyMG1hcmtldHxlbnwwfHx8fDE3MTczMTMzMzV8MA&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 2, title: "Tech Giants Release New Gadgets", genre: "Technology", image: "https://images.unsplash.com/photo-1519335553051-96f1218cd5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx0ZWNoJTIwZ2FkZ2V0c3xlbnwwfHx8fDE3MTczMTMzMzV8MA&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 3, title: "Health Tips for a Better Life", genre: "Health", image: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxoZWFsdGglMjB0aXBzfGVufDB8fHx8MTcxNzMxMzMzNXww&ixlib=rb-4.0.3&q=80&w=1080" },
        { id: 4, title: "Top Travel Destinations in 2023", genre: "Travel", image: "https://images.unsplash.com/photo-1507062147571-a3612422cd91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHx0cmF2ZWwlMjBkZXN0aW5hdGlvbnN8ZW58MHx8fHwxNzE3MzEzMzM2fDA&ixlib=rb-4.0.3&q=80&w=1080" },
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="xl">
          Daily News Highlights
        </Heading>
        <IconButton aria-label="Refresh News" icon={<FaSync />} size="lg" onClick={refreshNews} />
        {loading ? (
          <Spinner size="xl" />
        ) : (
          news.map((item) => (
            <Box key={item.id} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
              <Heading fontSize="xl">{item.title}</Heading>
              <Text mt={4}>{item.genre}</Text>
              <Image src={item.image} alt={item.title} mt={4} />
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Index;
