import React, { useCallback } from "react";
import {
  Avatar,
  Image,
  Img,
  Stack,
  Text,
  Link,
  Flex,
  Heading,
  Box,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  useMultiStyleConfig,
  useTab,
  Button,
  FormControl,
  FormLabel,
  VStack,
  RadioGroup,
  HStack,
  Radio,
  FormHelperText,
  Checkbox,
  Textarea,
} from "@chakra-ui/react";
import {
  FiActivity,
  FiInfo,
  FiClipboard,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";
import { TextInput } from "ui";

export default function Settings() {
  const CustomTab = React.forwardRef(function InnerComponent(props, ref) {
    // 1. Reuse the `useTab` hook
    const tabProps = useTab({ ...props, ref });
    const isSelected = !!tabProps["aria-selected"];

    // 2. Hook into the Tabs `size`, `variant`, props
    const styles = useMultiStyleConfig("Tabs", tabProps);

    return (
      <Button
        {...tabProps}
        size="sm"
        borderRadius="1rem"
        leftIcon={props.icon}
        bg={isSelected ? "brand.primary" : "brand.highlight1"}
        color={isSelected ? "brand.primaryText" : "brand.primaryText"}
        _hover={{
          bg: isSelected ? "brand.hovered" : "brand.highlight2",
        }}
      >
        {tabProps.children}
      </Button>
    );
  });

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

  }, []);

  return (
    <Stack width="100%">
      <Heading size="md">Settings</Heading>
      <Flex
        direction="column"
        color="brand.primaryText"
        alignItems="flex-start"
        width="100%"
      >
        <Tabs width="100%" defaultIndex={0} isLazy variant="solid-rounded">
          <TabList
            gap={4}
            bg="brand.highlight1"
            p="4"
            borderRadius="1rem"
            marginBottom={4}
          >
            <CustomTab icon={<FiUser />}>Profile</CustomTab>
            <CustomTab icon={<FiActivity />}>Notifications</CustomTab>
            <CustomTab icon={<FiInfo />}>Account</CustomTab>
            <CustomTab icon={<FiShoppingBag/>}>Integrations</CustomTab>
          </TabList>

          <TabPanels>
            <TabPanel p="none">
              <VStack alignItems="flex-start" width="100%" gap={2}>
                <FormControl>
                  <Flex alignItems="center">
                  <FormLabel width="30%">Display Name</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="John Doe"
                    type="text"
                    value={""}
                    name="name"
                  />
                  </Flex>
                </FormControl>
                <FormControl>
                <Flex>
                  <FormLabel width="30%">Username</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="Must be unique"
                    type="text"
                    value={""}
                    name="username"
                  />
                  </Flex>
                </FormControl>
                <FormControl>
                <Flex>
                  <FormLabel width="30%">Age</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="96"
                    type="number"
                    value={""}
                    name="age"
                  />
                  </Flex>
                </FormControl>
                <FormControl>
                <Flex>
                  <FormLabel width="30%">E-mail</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="johndoe@email.com"
                    type="text"
                    value={""}
                    name="email"
                  />
                  </Flex>
                </FormControl>
                <FormControl>
                <Flex>
                  <FormLabel width="22%">Gender</FormLabel>
                  <Stack>
                  <RadioGroup defaultValue='None'>
                    <HStack spacing='24px'>
                      <Radio value='Male'>Male</Radio>
                      <Radio value='Female'>Female</Radio>
                      <Radio value='None'>Rather not say</Radio>
                    </HStack>
                  </RadioGroup>
                  <FormHelperText>Select where you belong.</FormHelperText>
                  </Stack>
                </Flex>
                </FormControl>
                <FormControl>
                <Flex>
                  <FormLabel width="30%">Bio</FormLabel>
                  <Textarea
                    onChange={onChange}
                    variant="filled"
                    bg="brand.white"
                    p="4"
                    borderRadius="1rem"
                    placeholder="I am an executive producer at Good music, I like long walks on the beach on snowy days. Im part necrophiliac so if i like you i'll always try to make you drop dead from jokes literally."
                    type="text"
                    value={""}
                    name="bio"
                  />
                  </Flex>
                </FormControl>
                <FormControl>
                <Flex>
                  <FormLabel width="22%">Job Title</FormLabel>
                  <Stack>
                  <TextInput
                    onChange={onChange}
                    placeholder="Executive Producer"
                    type="text"
                    value={""}
                    name="jobtitle"
                  />
                  <FormHelperText><Checkbox>Show my job title on my profile.</Checkbox></FormHelperText>
                  </Stack>
                </Flex>
                </FormControl>
                <Button onClick={() => { }}>Save</Button>
              </VStack>
            </TabPanel>
            <TabPanel p="none">
              <VStack alignItems="flex-start" width="100%">
                <FormControl>
                  <FormLabel>Display Name</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="John Doe"
                    type="text"
                    value={""}
                    name="name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="Must be unique"
                    type="text"
                    value={""}
                    name="username"
                  />
                </FormControl>
                <Button onClick={() => { }}>Save</Button>
              </VStack>
            </TabPanel>
            <TabPanel p="none">
              <VStack alignItems="flex-start" width="100%">
                <FormControl>
                  <FormLabel>Display Name</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="John Doe"
                    type="text"
                    value={""}
                    name="name"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <TextInput
                    onChange={onChange}
                    placeholder="Must be unique"
                    type="text"
                    value={""}
                    name="username"
                  />
                </FormControl>
                <Button onClick={() => { }}>Save</Button>
              </VStack>
            </TabPanel>
            <TabPanel p="none">
              <VStack alignItems="flex-start" width="100%">
                <FormControl>
                  <Flex gap="20">
                  <FormLabel>Entertainment</FormLabel>
                  <Button onClick={() => { }}
                  colorScheme="brand"
                  boxShadow="none"
                  px={4}
                  width={"10%"}
                  size={"sm"}
                  border={"none"}
                  bg={"brand.primary"}
                  color={"brand.primaryText"}
                  cursor="pointer"
                  _focus={{
                    outline: "none",
                    boxShadow: "none",
                  }}
                  _hover={{
                    bg: "brand.hovered"
                  }}
                  >Click</Button>
                  </Flex>
                </FormControl>
                <FormControl>
                <Flex gap="20">
                  <FormLabel>Work</FormLabel>
                  <Button onClick={() => { }}
                  colorScheme="brand"
                  boxShadow="none"
                  px={4}
                  width={"10%"}
                  size={"sm"}
                  border={"none"}
                  bg={"brand.primary"}
                  color={"brand.primaryText"}
                  cursor="pointer"
                  _focus={{
                    outline: "none",
                    boxShadow: "none",
                  }}
                  _hover={{
                    bg: "brand.hovered"
                  }}
                  >Click</Button>
                </Flex>
                </FormControl>
                <FormControl>
                <Flex gap="20">
                  <FormLabel>Calendar</FormLabel>
                  <Button onClick={() => { }}
                  colorScheme="brand"
                  boxShadow="none"
                  px={4}
                  width={"10%"}
                  size={"sm"}
                  border={"none"}
                  bg={"brand.primary"}
                  color={"brand.primaryText"}
                  cursor="pointer"
                  _focus={{
                    outline: "none",
                    boxShadow: "none",
                  }}
                  _hover={{
                    bg: "brand.hovered"
                  }}
                  >Click</Button>
                   m,.</Flex>
                </FormControl>
                <Button onClick={() => { }}>Save</Button>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Stack>
  );
}
