import { MainContainer } from "./styles";
import { SidebarComponent } from "./components/sidebar/SidebarComponent";
import { DashboardContentSection } from "./components/dashboardContent";
import { Box } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../data/firebase";
import { AuthContext } from "../../context/authenticationContext";
import { Route, Routes } from "react-router-dom";
import { Transactions } from "../Transactions";
import { Graphs } from "../Graphs";

export const DashboardPage = () => {
  const { setAuthUser, authUser } = useContext(AuthContext) ?? {};

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      console.log("USER", user);
      if (user) {
        if (setAuthUser) {
          setAuthUser(user);
        }
      } else {
        if (setAuthUser) {
          setAuthUser(null);
        }
      }
    });

    return () => {
      listen();
    };
  }, []);

  return (
    <div>
      <MainContainer>
        <SidebarComponent user={authUser} />
        <Routes>
          <Route path="/dashboard" element={<DashboardContentSection />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="graph" element={<Graphs />} />
        </Routes>
        <Box className="fill" />
      </MainContainer>
    </div>
  );
};
