import { Flex, Heading, Text, Box, Avatar } from "@chakra-ui/react";
import { Button } from "ui";
import {
  FiEye,
  FiShare,
  FiPackage,
  FiCreditCard,
  FiSettings,
  FiTruck,
  FiEdit,
} from "react-icons/fi";
import { UserObject } from "types/User";
import { FC } from "react";
import { useRouter } from "next/router";
import { NewJourney } from "../Onboarding/NewJourney";
import { client } from "utils/client";

type JourneyOverviewCard = UserObject & {
  // rest of the props
};

const Companion = ({ companion }) => {
  return <Avatar src={companion.avatar} />;
};

export const JourneyOverviewCard: FC<JourneyOverviewCard> = ({
  journey,
  user,
}) => {
  const router = useRouter();

  function inviteFriends() { }
  function getStarted() {
    router.push("/journeys/new");
  }

  console.log(journey?.data);
  console.log(user);

  const deleteJourney = () => {
    client
      .delete(`/journeys/${journey?.id}`)
      .then((res) => {
        router.push("/");
      })
      .catch((err) => {
        alert("failed to delete");
      });
  };
  return (
    <>
      <Flex
        direction="column"
        borderRadius="0rem 0.1rem 0.1rem 0rem"
        width="100%"
      >
        {
          true ? <Flex justifyContent="space-between">
            <Box>
              <Flex gap={2} alignItems="center">
                <Avatar src={user?.image} />
                <Heading color="brand.primaryText" size="lg" as="h1">
                  Hi, {journey?.data?.user?.name || "Guest"}{" "}
                </Heading>
              </Flex>
              <Text my="4">
                It's time for you to take the leap. What is your ultimate goal?
              </Text>
            </Box>
            <Flex gap={4}>
              {journey?.data?.userId === user?.id ? (
                <Button
                  onClick={deleteJourney}
                  icon={<FiEdit />}
                >
                  Edit Journey
                </Button>
              ) : (
                <Button onClick={getStarted} icon={<FiTruck />}>
                  Get Started
                </Button>
              )}
            </Flex>
          </Flex> : null
        }
        <Flex
          justifyContent="space-between"
          p="8"
          color="brand.primaryText"
          bg="brand.white"
          borderRadius="1rem"
        >
          <Flex alignItems="center" gap={8}>
            <Flex alignItems="center" gap={4}>
              <Text fontWeight={"700"}>Companions</Text>
            </Flex>
            <Button
              onClick={inviteFriends}
              variant="outline"
              bg="#fff"
              color="brand.primary"
              icon={<FiShare />}
            >
              Invite Friends
            </Button>
          </Flex>
          <Flex gap={8} alignItems="center">
            <Flex alignItems="center" gap={1}>
              <FiEye color="#116979" />
              <Text>Public</Text>
            </Flex>
            <Flex alignItems="center" gap={1}>
              <FiPackage color="#116979" />
              <Text>Integrations</Text>
            </Flex>
            <Flex alignItems="center" gap={1}>
              <FiCreditCard color="#116979" />
              <Text>Plan</Text>
            </Flex>
            <Flex alignItems="center" gap={1}>
              <FiSettings color="#116979" />
              <Text>Settings</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
