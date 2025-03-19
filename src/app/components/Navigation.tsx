"use client";

import { Box, Button, Dialog } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import Link from "next/link";
import { CancelSharp } from "@mui/icons-material";
import { signOut, useSession } from "next-auth/react";

const Navigation = () => {
  const [onSearch, setOnSearch] = useState(false);
  const {  status } = useSession();
  return (
    <div>
      <Box
        component={"nav"}
        className="px-[5%] flex justify-between gap-3 items-center"
        sx={{
          background: onSearch ? "rgba(255,255,255,1)" : "none",
          pb: onSearch ? 3 : 0,
          pt: onSearch ? 5 : 0,
          border: onSearch ? "1px solid rgba(0,0,0,0.1)" : "none",
          position: onSearch ? "fixed" : "relative",
          width: onSearch ? "100%" : "100%",
          top: onSearch ? 0 : "unset",
          zIndex: onSearch ? 99999 : "unset",
        }}
      >
        

        <Box
          component={"ol"}
          color={"primary.main"}
          className="list-none gap-6 text-[14px] cursor-pointer hidden md:flex"
        >
          <Link href="/">
            <li>Home</li>
          </Link>
          <li>Market Values</li>
          <li>Blog</li>
        </Box>
        <div className="flex gap-3 items-center">
          {status === "authenticated" ? (
            <Button variant="outlined" onClick={() => {
                signOut({
                  callbackUrl: "/login",
                });
              }}>Logout</Button>
          ) : (
            <Link href="/login">
              <Button variant="outlined" className="px-3">
                Login
              </Button>
            </Link>
          )}

          <Button variant="contained" onClick={() => setOnSearch(true)}>
            <SearchIcon />
          </Button>
        </div>
      </Box>
      <div>
        {onSearch && <SearchModal onClose={() => setOnSearch(false)} />}
      </div>
    </div>
  );
};

export default Navigation;

const SearchModal: React.FC<{
  onClose: () => void;
}> = ({ onClose }) => {
  return (
    <Dialog
      open
      fullWidth
      maxWidth="md"
      onClose={() => {
        onClose();
      }}
      sx={{
        "& .MuiDialog-container": {
          alignItems: "flex-start", // Move modal to the top
        },
        "& .MuiPaper-root": {
          "@media (max-width: 600px)": {
            marginTop: "39%",
          },
          marginTop: "9%", // Adjust top margin for spacing
          borderRadius: "12px", // Optional: Smooth rounded edges
          width: "90%", // Optional: Adjust width
        },
      }}
    >
      <Box className="bg-white p-3 flex flex-col gap-3">
        <Box className="flex h-[50px] items-center gap-2 bg-gray-100 rounded-[6px] px-4 py-2 w-full">
          <SearchIcon className="text-gray-400" />
          <input
            type="text"
            placeholder="Search any player name, club, leagues......"
            className="bg-transparent w-full focus:outline-none text-gray-500"
          />
          <CancelSharp className="text-gray-500 cursor-pointer" />
        </Box>
        <Box className="flex justify-between items-center text-[rgba(155,155,155,1)]">
          <Box className="flex gap-2 items-center">
            <Box>Navigation</Box>
            <Box className="flex gap-2 items-center">
              <Box className="border border-[rgba(155,155,155,1)] rounded-sm py-2 px-1.5 cursor-pointer">
                {" "}
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.17578 4.58189L4.99995 0.768555L8.82411 4.58189"
                    stroke="#888888"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
              <Box className="border border-[rgba(155,155,155,1)] rounded-sm py-2 px-1.5 cursor-pointer">
                <svg
                  width="10"
                  height="7"
                  viewBox="0 0 10 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.17578 1.52686L4.99995 5.34019L8.82411 1.52686"
                    stroke="#888888"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Box>
            </Box>
          </Box>
          <Box className="flex gap-2 items-center cursor-pointer">
            <Box onClick={onClose}>Close</Box>
            <Box className="border border-[rgba(155,155,155,1)] rounded-sm px-1 py-[0.5px]">
              esc
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
};
