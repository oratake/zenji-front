import {
  Navbar,
  Group,
  Code,
  Box,
  NavLink,
} from '@mantine/core';
import {
  RiAncientGateFill,
} from 'react-icons/ri'

export default function Home() {
  return (
    <Navbar p="md" sx={{ width: 240, borderRight: "1px solid #DDD" }}>
      <Box sx={{}}>
        <Group position="apart">
          <h1>禅師 Zenji</h1>
          <Code style={{ fontWeight: 700 }}>v0.0.1</Code>
        </Group>
        <NavLink
          label="first link group"
          icon={<RiAncientGateFill />}
          childrenOffset={28}
        >
          <NavLink label="link 1" />
          <NavLink label="link 2" />
          <NavLink label="Nested 1">
            <NavLink label="nested link 1" />
            <NavLink label="nested link 2" />
            <NavLink label="nested link 3" />
          </NavLink>
        </NavLink>
      </Box>
    </Navbar>
  );
}
