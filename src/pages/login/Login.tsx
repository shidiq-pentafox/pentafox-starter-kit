// import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Image,
  TextInput,
  Box,
  PasswordInput,
  Button,
  Card,
} from "@mantine/core";
import dashboard_main_logo from "../../assets/belstar-logo.svg";
import Spline from '@splinetool/react-spline';
import { IconUser, IconPassword, IconArrowRight } from '@tabler/icons-react';
// import { useForm } from "@mantine/form";
// import useAuthStore from "../../store/authStore";
// import { login } from "../../service/auth.services";

// const sampleAuthToken = {
//   "message": "Login successful",
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ1MTRkYWFiLWY3MTktNDgwMy1hYjA4LTFlOTkxM2JmY2I3ZCIsImlhdCI6MTcyNzg2Mjk3MSwiZXhwIjoxNzI3OTQ5MzcxfQ.9eB66oJ-WWDA9fkvLBlbvzPj_CK2KMPzx_YJtPVS3N8",
//   "user": {
//     "id": "4514daab-f719-4803-ab08-1e9913bfcb7d",
//     "name": "shidiq ahmed",
//     "email": "shidiqadm@gmail.com"
//   }
// }

function Login() {
  // const [isLoading, setIsLoading] = useState(false);
  // const saveAuth = useAuthStore((state) => state.saveAuth);
  // const auth = useAuthStore((state) => state.auth);

  // const { errors, onSubmit, getInputProps } = useForm({
  //   mode: "uncontrolled",
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   validate: {
  //     email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  //     password: (value) => (value ? null : "Enter password"),
  //   },
  // });

  // const handleLogin = (values) => {
  //   setIsLoading(true);
  //   saveAuth(sampleAuthToken);
  //   setIsLoading(false);

  //   // uncomment and use the below code for login
  //   // login(values.email, values.password)
  //   //   .then((data) => {
  //   //     setIsLoading(false);
  //   //     saveAuth(data);
  //   //     console.log("Login Response >> ", data);
  //   //   })
  //   //   .catch((e) => {
  //   //     setIsLoading(false);
  //   //     ToastNotification({
  //   //       type: "error",
  //   //       message: e?.message,
  //   //     });
  //   //   });
  // };

  return (
    <Container size={420} my={40} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Card p={40} mt={30} radius="lg" style={{
        zIndex: 3,
        background: 'rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}>
        <Box style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Image src={dashboard_main_logo} w={80} />
          <Title ta="center" mt={40}>Sign In</Title>
          <Text ta="center" mt={8}>to continue to your Belstar Authentication Portal.</Text>
        </Box>

        <Box mt={30} w={450} style={{zIndex: 4}}>
          <form>
            <TextInput
              id='email'
              size="md"
              placeholder="Enter username or email"
              leftSection={<IconUser size={16} />}
              // {...getInputProps('email', { required: true })}
              style={{ marginBottom: "10px" }}
            />
            <PasswordInput
              id='password'
              placeholder="Password"
              size="md"
              mt={20}
              // error={errors?.password?.message}
              leftSection={<IconPassword size={16} />}
              // {...getInputProps('password', { required: true })}
            />
            <Button fullWidth mt="xl" rightSection={<IconArrowRight size={16} />} type="submit" size="md" color='rgb(0,105,182)'>
              Continue
            </Button>
          </form>
        </Box>
      </Card>

      {/* <Spline
        scene="https://prod.spline.design/tdhXwEiGdVOpphnf/scene.splinecode"
        style={{ width: '100%', position: 'absolute', left: '-65%', top: 0, height: '100vh', opacity: 0.9}}
      /> */}
      <Spline
        scene="https://prod.spline.design/j0ebUSsMZWCb6Puu/scene.splinecode"
        style={{ width: '120%', position: 'absolute', right: '-40%', top: 0, height: '120vh', opacity: 0.9}}
      />
      {/* <Spline
        scene="https://prod.spline.design/m-yGqHC6kZctJ3UB/scene.splinecode"
        style={{ width: '120%', position: 'absolute', right: '-40%', top: 0, height: '120vh', opacity: 0.9}}
      /> */}
    </Container>
  );
}

export default Login;
