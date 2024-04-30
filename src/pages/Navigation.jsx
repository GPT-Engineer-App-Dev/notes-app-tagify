import { Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" p={3} bg="gray.100" justifyContent="space-between">
      <Link as={RouterLink} to="/">Home</Link>
      <Link as={RouterLink} to="/notes">Notes</Link>
    </Flex>
  );
};

export default Navigation;