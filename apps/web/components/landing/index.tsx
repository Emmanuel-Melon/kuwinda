import { Stack, Container } from "@chakra-ui/react";
import { InterestForm } from "./InterestForm";
import { HeroSection } from "./HeroSection";
import { InspirationPane } from "./InspirationPane";
import { JourneyHighlights } from "./JourneyHighlights";
import { Differentiators } from "./Differentiators";
import { CompanionsHighlights } from "./CompanionsHighlights";
import { BackpackHighlights } from "./BackpackHighlights";
import { RoutinesSection } from "./RoutinesSection";
import { Header } from "./Header";

export const Landing = () => {
  return (
    <Stack as="main">
      <Header />
      <Container p={["2rem", "8rem", "12rem", "16rem"]}>
        <HeroSection />
      </Container>
    </Stack>
  );
};

/**
 *       <JourneyHighlights />
      <CompanionsHighlights />
      <BackpackHighlights />
      <RoutinesSection />
      <Differentiators />
      <InspirationPane />
      <InterestForm />

            px={customPadding}
 */
