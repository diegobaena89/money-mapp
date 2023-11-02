import {
  Avatar,
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
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

export interface User {
  email: string;
  user: {
    email: string;
  };
}

export const SidebarComponent = ({ user }: User) => {
  const navigate = useNavigate();
  const { setIsAuthenticaded, userName, setUserName } =
    useContext(AuthContext)!;

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
        <Text
          className="title"
          textAlign={"center"}
          fontSize={"2xl"}
          fontWeight={"bold"}
        >
          MM.
        </Text>
        <Avatar
          className="sidebar-avatar"
          name="User"
          src="https://via.placeholder.com/150"
          marginY={5}
          size="xl"
          border="5px solid #fff"
        />
        <Text>Welcome Back!</Text>
        {user?.email && (
          <Editable
            defaultValue={userName ?? user.email}
            className="user-name"
            fontSize="lg"
            marginTop={1}
            onSubmit={(value) => setUserName?.(value)}
          >
            <EditablePreview />
            <EditableInput />
          </Editable>
        )}
        <HStack
          display={"flex"}
          flexDirection={"column"}
          marginTop={16}
          spacing={9}
          cursor={"pointer"}
          className="sidebar-icons"
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
