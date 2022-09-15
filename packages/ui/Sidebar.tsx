import React, { ReactChild, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box, Flex, Heading, Text, Stack, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Navbar, Spinner } from "ui";
import Head from "next/head";
import Link from "next/link";
import {
    FiHome,
    FiSettings,
    FiUser,
    FiBell,
    FiCheckCircle,
    FiRotateCw,
    FiTrendingUp,
    FiMap,
    FiMonitor,
    FiClipboard
} from "react-icons/fi";
import { VStack } from "@chakra-ui/react";
import { Button, UnAuthorized } from "ui";

const SidebarLink = ({ link }) => {
    return (
        <LinkBox                     _hover={{
            bg: "brand.highlight",
        }}>
            <LinkOverlay href={link.url}>
                <Flex
                    alignItems="center"
                    justifyContent="flex-start"
                    gap={4}
                >
                    {link.icon}
                    <Text>{link.name}</Text>
                </Flex>
            </LinkOverlay></LinkBox>
    )
}

export const Sidebar = () => {
    const [labels, _setLabels] = useState<boolean>(true);
    const links = [
        {
            id: 1,
            name: "Home",
            url: "/",
            icon: <FiHome size="1rem" />
        },
        {
            id: 1,
            name: "Profile",
            url: "/",
            icon: <FiUser size="1rem" />
        },
        {
            id: 1,
            name: "Journeys",
            url: "/journeys",
            icon: <FiMap size="1rem" />
        },
        {
            id: 1,
            name: "Routines",
            url: "/routines",
            icon: <FiRotateCw size="1rem" />
        },
        {
            id: 1,
            name: "Tasks",
            url: "/tasks",
            icon: <FiClipboard size="1rem" />
        },
        {
            id: 1,
            name: "Notifications",
            url: "/notifications",
            icon: <FiBell size="1rem" />
        },
        {
            id: 1,
            name: "Settings",
            url: "/settings",
            icon: <FiSettings size="1rem" />
        }
    ]
    return (
        <Stack gap={4} p={8} bg="brand.highlight1">
            {
                links.map(link => <SidebarLink key={link.id} link={link} />)
            }
        </Stack>
    )
}

/**
 *             <Link href="/journeys">
                <Flex
                    direction="column"
                    alignItems="center"
                    _hover={{
                        color: "brand.accent",
                    }}
                >
                    <Flex
                        bg="brand.white"
                        color="brand.primaryText"
                        borderRadius="1rem"
                        alignItems="center"
                        p="2"
                        justifyContent="center"
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                        cursor="pointer"
                        _hover={{
                            color: "brand.accent",
                        }}
                    >
                        <FiMap size="1rem" />
                    </Flex>

                    {labels ? <Link href="/journeys">Journeys</Link> : null}
                </Flex>
            </Link>
            <Link href="/reflections">
                <Flex
                    direction="column"
                    alignItems="center"
                    _hover={{
                        color: "brand.accent",
                    }}
                >
                    <Flex
                        bg="brand.white"
                        color="brand.primaryText"
                        borderRadius="1rem"
                        alignItems="center"
                        p="2"
                        justifyContent="center"
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                        cursor="pointer"
                        _hover={{
                            color: "brand.accent",
                        }}
                    >
                        <FiMonitor size="1rem" />
                    </Flex>

                    {labels ? <Link href="/reflections">Reflections</Link> : null}
                </Flex>
            </Link>

            <Link href="/routines">
                <Flex
                    direction="column"
                    alignItems="center"
                    _hover={{
                        color: "brand.accent",
                    }}
                >
                    <Flex
                        bg="brand.white"
                        color="brand.primaryText"
                        borderRadius="1rem"
                        alignItems="center"
                        p="2"
                        justifyContent="center"
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                        cursor="pointer"
                        _hover={{
                            color: "brand.accent",
                        }}
                    >
                        <FiRotateCw size="1rem" />
                    </Flex>

                    {labels ? <Link href="/routines">Routines</Link> : null}
                </Flex>
            </Link>
            <Link href="/notifications">
                <Flex
                    direction="column"
                    alignItems="center"
                    _hover={{
                        color: "brand.accent",
                    }}
                >
                    <Flex
                        bg="brand.white"
                        color="brand.primaryText"
                        borderRadius="1rem"
                        alignItems="center"
                        p="2"
                        justifyContent="center"
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                        cursor="pointer"
                    >
                        <FiBell size="1rem" />
                    </Flex>
                    {labels ? (
                        <Link href="/notifications">Notifications</Link>
                    ) : null}
                </Flex>
            </Link>
            <Link href="/tasks">
                <Flex
                    direction="column"
                    alignItems="center"
                    _hover={{
                        color: "brand.accent",
                    }}
                >
                    <Flex
                        bg="brand.white"
                        color="brand.primaryText"
                        borderRadius="1rem"
                        alignItems="center"
                        p="2"
                        justifyContent="center"
                        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
                        cursor="pointer"
                    >
                        <FiCheckCircle size="1rem" />
                    </Flex>
                    {labels ? <Link href="/tasks">Tasks</Link> : null}
                </Flex>
            </Link>
 */