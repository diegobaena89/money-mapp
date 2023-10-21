import { MainContainer } from "./styles";
import { SidebarComponent } from "./components/sidebar";
import { DashboardContentSection } from "./components/dashboardContent";
import { Box } from "@chakra-ui/react";

export const DashboardPage = () => {
  return (
    <div>
      <MainContainer>
        <SidebarComponent />
        <DashboardContentSection />
        <Box className="fill" />
      </MainContainer>
    </div>
  );
};
