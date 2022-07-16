import React, { ReactChild, useState } from "react";
import { Flex, Box } from "@chakra-ui/react";
import { Navbar } from "ui";
import Head from "next/head";
import Link from "next/link";
import { FiHome, FiSettings, FiUser, FiBell, FiCheckCircle, FiUsers, FiStar, FiMap } from "react-icons/fi";
import { VStack } from "@chakra-ui/react";


type LayoutProps = {
  children: ReactChild | ReactChild[];
};

export default function Layout({ children }: LayoutProps) {
  const [labels, _setLabels] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Inspirers</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.png" />
      </Head>
      <Flex height="100vh">
        <Flex
          bg="brand.highlight2"
          px={labels ? "2" : "4"}
          height="100%"
          color="brand.primaryText"
          borderRadius="0rem"
          alignItems="center"
          justifyContent="center"
          overflowY="scroll"
        >
          <VStack gap={6}>
            <Flex
              direction="column"
              alignItems="center"
              _hover={{
                color: "brand.accent",
              }}
            >
              <Flex
                bg="brand.accent"
                color="brand.primary"
                borderRadius="1rem"
                alignItems="center"
                p="2"
                justifyContent="center"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                cursor="pointer"
              >
                <FiHome size="1.2rem" />
              </Flex>
              {labels ? <Link href="/">Home</Link> : null}
            </Flex>
            <Flex direction="column" alignItems="center"
              _hover={{
                color: "brand.accent",
              }}
            >
              <Flex
                bg="brand.primary"
                color="brand.white"
                borderRadius="1rem"
                alignItems="center"
                p="2"
                justifyContent="center"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                cursor="pointer"
              >
                <FiMap size="1.2rem" />
              </Flex>

              {labels ? <Link href="/journeys">Journeys</Link> : null}
            </Flex>
            <Flex direction="column" alignItems="center"
              _hover={{
                color: "brand.accent",
              }}
            >
              <Flex
                bg="brand.primary"
                color="brand.white"
                borderRadius="1rem"
                alignItems="center"
                p="2"
                justifyContent="center"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                cursor="pointer"
              >
                <FiBell size="1.2rem" />
              </Flex>
              {labels ? <Link href="/notifications">Notifications</Link> : null}
            </Flex>
            <Flex direction="column" alignItems="center"
              _hover={{
                color: "brand.accent",
              }}
            >
              <Flex
                bg="brand.primary"
                color="brand.white"
                borderRadius="1rem"
                alignItems="center"
                p="2"
                justifyContent="center"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                cursor="pointer"
              >
                <FiCheckCircle size="1.2rem" />
              </Flex>
              {labels ? <Link href="/tasks">Tasks</Link> : null}

            </Flex>
            <Flex direction="column" alignItems="center"
              _hover={{
                color: "brand.accent",
              }}
            >
              <Flex
                bg="brand.primary"
                color="brand.white"
                borderRadius="1rem"
                alignItems="center"
                p="2"
                justifyContent="center"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                cursor="pointer"
              >
                <FiUsers size="1.2rem" />
              </Flex>
              {labels ? <Link href="/communities">Communities</Link> : null}

            </Flex>
            <Flex direction="column" alignItems="center"
              _hover={{
                color: "brand.accent",
              }}
            >
              <Flex
                bg="brand.primary"
                color="brand.white"
                borderRadius="1rem"
                alignItems="center"
                p="2"
                justifyContent="center"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                cursor="pointer"
              >
                <FiStar size="1.2rem" />
              </Flex>
              {labels ? <Link href="/discover">Discover</Link> : null}
            </Flex>
            <Flex direction="column" alignItems="center"
              _hover={{
                color: "brand.accent",
              }}
            >
              <Flex
                bg="brand.primary"
                color="brand.white"
                borderRadius="1rem"
                alignItems="center"
                p="2"
                justifyContent="center"
                boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                cursor="pointer"
              >
                <FiSettings size="1.2rem" />
              </Flex>
              {labels ? <Link href="/settings">Settings</Link> : null}
            </Flex>
          </VStack>
        </Flex>
        <Box width="90%">
          <Navbar />
          <Box as="section" px="8">
            {children}
          </Box>
        </Box>
      </Flex>
    </>
  );
}
