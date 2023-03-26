import {
  Box,
  Flex,
  IconButton,
  Button,
  Stack,
  Collapse,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link, useLocation } from 'react-router-dom';

function NavLinks() {
  const { pathname } = useLocation();

  const NAV_SCREENS = [
    {
      label: 'Home',
      to: '/home',
    },
    {
      label: 'Prompts',
      to: '/prompts',
    },
    {
      label: 'Settings',
      to: '/settings',
    },
  ];

  return NAV_SCREENS.map(({ label, to, disabled = false }) => (
    <Box>
      <Button colorScheme={pathname === to ? 'blue' : 'black'} as={Link} to={to} variant="link" p={2} isDisabled={disabled}>
        {label}
      </Button>
    </Box>
  ));
}

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle="solid"
        borderColor="gray.300"
        align="center"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Button
            as={Link}
            to="/"
            variant="link"
            p={2}
          >
            <Image
              src="/logo.png"
              boxSize="38px"
              objectFit="cover"
            />
          </Button>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <Stack direction="row" spacing={4} alignItems="center">
              <NavLinks />
            </Stack>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          {/*
            <Button fontSize="sm" fontWeight={400} variant="link">
              Sign In
            </Button>
            <Button
              fontSize="sm"
              fontWeight={600}
              color="white"
              bg="green.400"
              _hover={{ bg: 'green.300' }}
            >
              Sign Up
            </Button>
          */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack py={4} display={{ md: 'none' }}>
          <NavLinks />
        </Stack>
      </Collapse>
    </Box>
  );
}

export default Navbar;
