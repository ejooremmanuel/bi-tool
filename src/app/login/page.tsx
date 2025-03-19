"use client";
import React from "react";
import Image from "next/image";
import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";

import { useController, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Navigation from "../components/Navigation";

const Login = () => {
  const { control, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  //controller for email
  const { field: emailField, fieldState: emailFieldState } = useController({
    control,

    name: "email",
    rules: {
      required: "Email is required",
    },
  });

  //controller for password
  const { field: passwordField, fieldState: passwordFieldState } =
    useController({
      control,
      name: "password",
      rules: {
        required: "Password is required",
      },
    });

  return (
    <div className="py-20">
      <Navigation />
      <section className="grid grid-cols-1 md:grid-cols-2 px-[10%] place-content-between my-[5%] items-center gap-[10%]">
        <Image
          src="/bg.jpg"
          alt=""
          width={574}
          height={374}
          className="md:block hidden"
        />
        <Box component={"section"} className="flex flex-col gap-6">
          <Box
            component={"h1"}
            color={"primary.main"}
            className="md:text-[40px] text-[24px] font-[600]"
          >
            <span>Welcome to</span>&nbsp;
            <Box component={"span"} className="italic">
              FlexStats
            </Box>
          </Box>
          <Box
            component={"form"}
            className="flex flex-col gap-8"
            onSubmit={handleSubmit(async (data) => {
              // mutate(data);
              await signIn("credentials", {
                email: data.email,
                password: data.password,
              });

              
            })}
          >
            <TextField
              {...emailField}
              fullWidth
              label="Email Address"
              placeholder="Enter your email address"
              name="email"
              helperText={emailFieldState.error?.message}
            />
            <TextField
              {...passwordField}
              fullWidth
              label="Password"
              placeholder="Enter your password"
              type="password"
              name="password"
              helperText={passwordFieldState.error?.message}
            />
            <Box className="w-full">
              <Button variant="contained" fullWidth type="submit">
                Login
              </Button>
              <Box className="text-center" color={"primary.main"} mt={1}>
                <Box component={"span"}>Don&#39;t have an account?</Box>&nbsp;
                <Box
                  component={Link}
                  href={"/registration"}
                  className="font-[600]"
                >
                  Register
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default Login;
