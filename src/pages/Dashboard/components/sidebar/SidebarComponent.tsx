import { Avatar, Box, HStack, Text, Tooltip } from "@chakra-ui/react";
import {
  ChartBar,
  ChartLineUp,
  HouseLine,
  SignOut,
} from "@phosphor-icons/react";
import { Sidebar } from "./styles";
import { handleSignOut } from "../../../../utils/handleFirebaseAuth";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../context/authenticationContext";

export const SidebarComponent = ({ user }: any) => {
  const navigate = useNavigate();
  const { setIsAuthenticaded } = useContext(AuthContext)!;

  const handleSIgnOutAndNavigate = () => {
    handleSignOut();
    if (setIsAuthenticaded) {
      setIsAuthenticaded(false);
    }
    navigate("/");
  };

  return (
    <Sidebar>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"bold"}>
          moneymap.
        </Text>
        <Avatar
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
          marginY={5}
          size="2xl"
          border="5px solid #fff"
        />
        <Text>Welcome Back!</Text>
        <Text fontSize="lg" marginTop={1}>
          {user.email}
        </Text>
        <HStack
          display={"flex"}
          flexDirection={"column"}
          marginTop={16}
          spacing={9}
          cursor={"pointer"}
        >
          <Link to="/dashboard">
            <Tooltip label="Home" placement="bottom">
              <HouseLine size={32} weight="fill" />
            </Tooltip>
          </Link>
          <Link to="/transactions">
            <Tooltip label="Transactions" placement="bottom">
              <ChartLineUp size={32} weight="fill" />
            </Tooltip>
          </Link>
          <Link to="/graph">
            <Tooltip label="Graphs" placement="bottom">
              <ChartBar size={32} weight="fill" />
            </Tooltip>
          </Link>
        </HStack>
      </Box>
      <Tooltip label="Log Out" placement="top">
        <SignOut
          onClick={() => handleSIgnOutAndNavigate()}
          size={32}
          weight="fill"
          cursor={"pointer"}
        />
      </Tooltip>
    </Sidebar>
  );
};
