// import { Navbar } from "../components";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navbar } from "../components";

const AppShellLayout = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 0 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="md"
    >
      {/* <AppShell.Header>
      </AppShell.Header> */}
      <AppShell.Navbar p="md">
        <Navbar />
      </AppShell.Navbar>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
};

export default AppShellLayout;
