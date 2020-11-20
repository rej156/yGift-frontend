import React, { useContext } from "react";
import { createDataTestId } from "../../lib/create-data-testid";
import { Flex, Text, Button, HStack, Heading, Link as CLink, Center } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import Web3Modal from "web3modal";
import { CurrentAddressContext } from "../../hardhat/HardhatContext";

const web3Modal = new Web3Modal({
  network: "mainnet", // optional
  cacheProvider: true, // optional
});

export const componentDataTestId = createDataTestId("Navbar");

export const dataTestIds = {};

interface IProps {}

const Logo = () => (
  <NavLink to="/">
    <Heading color={"#013A6D"} {...{ fontFamily: "Roboto", fontStyle: "normal", fontWeight: "900", fontSize: "40px" }}>
      yGift
    </Heading>
  </NavLink>
);

const OurLink = (props: any) => (
  <CLink
    as={NavLink}
    activeStyle={{
      color: "#013A6D",
      textDecoration: "underline",
    }}
    {...props}
    {...{
      fontFamily: "Roboto",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      color: "#809EBD",
    }}
  />
);

const Links = () => (
  <Center mx="auto">
    <HStack spacing={10}>
      <OurLink to="/create-gift">Create gift</OurLink>
      <OurLink to="/gifts">Gifts</OurLink>
      {/* <OurLink to="/about">About</OurLink> */}
    </HStack>
  </Center>
);

const formatAddress = (currentAddress: string) =>
  `${currentAddress.slice(0, 8)}...${currentAddress.slice(currentAddress.length - 7, currentAddress.length)}`;

const Navbar: React.FunctionComponent<IProps> = (props) => {
  const currentAddress = useContext(CurrentAddressContext);
  return (
    <Flex width="100%" px={[2, 10]} py={4}>
      <Logo></Logo>
      <Links></Links>
      <Center>
        {currentAddress?.[0] ? (
          <Text
            ml="auto"
            {...{
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              color: "#809EBD",
            }}
          >
            {formatAddress(currentAddress?.[0])}
          </Text>
        ) : (
          <Button
            ml="auto"
            background="#0065D0"
            borderRadius="32px"
            color="white"
            onClick={async () => {
              await web3Modal.connect();
            }}
          >
            Connect
          </Button>
        )}
      </Center>
    </Flex>
  );
};

export { Navbar };
