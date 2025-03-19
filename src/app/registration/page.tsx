"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Image from "next/image";
import { Box, Button, TextField } from "@mui/material";
import Link from "next/link";
import { useForm, useController } from "react-hook-form";

interface FormValues {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

const Register = () => {
  const { control, handleSubmit } = useForm<FormValues>();

  //controller for email
  const { field: emailField, fieldState: emailFieldState } = useController({
    control,

    name: "email",
    rules: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email format",
      },
    },
  });

  //controller for password
  const { field: passwordField, fieldState: passwordFieldState } =
    useController({
      control,
      name: "password",
      rules: {
        required: "Password is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters long",
        },
        pattern: {
          value:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message:
            "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
        },
      },
    });

  //controller for confirm password
  const { field: confirmPasswordField, fieldState: confirmPasswordFieldState } =
    useController({
      control,
      name: "confirmPassword",
      rules: {
        required: "Confirm Password is required",
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters long",
        },
        pattern: {
          value:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message:
            "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character",
        },
        validate: (value: string, item) => {
          return value === item.password || "Passwords do not match";
        },
      },
    });

  //controller for first name
  const { field: firstNameField, fieldState: firstNameFieldState } =
    useController({
      control,
      name: "firstName",
      rules: {
        required: "First Name is required",
      },
    });

  //controller for last name
  const { field: lastNameField, fieldState: lastNameFieldState } =
    useController({
      control,
      name: "lastName",
      defaultValue: "",
      rules: {
        required: "Last Name is required",
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
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <TextField
              fullWidth
              label="First Name"
              placeholder="Enter your first name"
              {...firstNameField}
              helperText={firstNameFieldState.error?.message}
            />
            <TextField
              {...lastNameField}
              fullWidth
              label="Last Name"
              placeholder="Enter your last name"
              helperText={lastNameFieldState.error?.message}
            />
            <TextField
              {...emailField}
              fullWidth
              label="Email Address"
              placeholder="Enter your email address"
              helperText={emailFieldState.error?.message}
            />
            <TextField
              {...passwordField}
              fullWidth
              label="Password"
              placeholder="Enter your password"
              type="password"
              helperText={passwordFieldState.error?.message}
            />
            <TextField
              {...confirmPasswordField}
              fullWidth
              label="Confirm Password"
              placeholder="Confirm password"
              type="password"
              helperText={confirmPasswordFieldState.error?.message}
            />
            <Box className="w-full">
              <Button variant="contained" fullWidth type="submit">
                Register
              </Button>
              <Box className="text-center" color={"primary.main"} mt={1}>
                <Box component={"span"}>Already have an account?</Box>&nbsp;
                <Box component={Link} href={"/login"} className="font-[600]">
                  Login
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </div>
  );
};

export default Register;
