import { useState } from "react";
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
    LinkBox,
    LinkOverlay,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react";
import { Routine } from "@prisma/client";
import { FiRotateCw } from "react-icons/fi";
import { Button } from "ui";
import { Input } from "ui";
import { client } from "utils/client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export const AddRoutine = ({ cancel }) => {
    const [name, setName] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { data: session, status } = useSession();

    const router = useRouter();
    const handleClick = () => {
        setIsLoading(true);
        client.post(`/routines`, {
            title: name,
            userId: session?.user?.id
        }).then(res => {
            console.log(res);
            setIsLoading(false);
            cancel();
            router.push(`/routines/${res.data.data.id}`)
        })
        .catch(err => {
            console.log(err);
            setIsLoading(false);
        })
    }
    return (
        <Stack p="8" width="420px" gap={4} color="brand.primaryText">
            <Heading size="sm" color="brand.secondary">Add a new Routine</Heading>
            <Stack gap={2}>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Morning Routine"
                        type="text"
                        value={name}
                        name="name"
                    />
                </FormControl>
                <Flex gap={4}>
                    <Button size="sm" bg="brand.white" onClick={cancel}>Cancel</Button>
                    <Button size="sm" onClick={handleClick} isLoading={isLoading}>Continue</Button>
                </Flex>
            </Stack>
        </Stack>
    )
}