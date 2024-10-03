import { useState } from "react";
import {
  Container,
  Title,
  Text,
  Paper,
  TextInput,
  PasswordInput,
  Button,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconPassword, IconUser } from "@tabler/icons-react";
import { ToastNotification } from "../../components";
import useAuthStore from "../../store/authStore";
import { login } from "../../service/auth.services";

const sampleAuthToken = {
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ1MTRkYWFiLWY3MTktNDgwMy1hYjA4LTFlOTkxM2JmY2I3ZCIsImlhdCI6MTcyNzg2Mjk3MSwiZXhwIjoxNzI3OTQ5MzcxfQ.9eB66oJ-WWDA9fkvLBlbvzPj_CK2KMPzx_YJtPVS3N8",
  "user": {
    "id": "4514daab-f719-4803-ab08-1e9913bfcb7d",
    "name": "shidiq ahmed",
    "email": "shidiqadm@gmail.com"
  }
}

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const saveAuth = useAuthStore((state) => state.saveAuth);
  const auth = useAuthStore((state) => state.auth);

  const { errors, onSubmit, getInputProps } = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value ? null : "Enter password"),
    },
  });

  const handleLogin = (values) => {
    setIsLoading(true);
    saveAuth(sampleAuthToken);
    setIsLoading(false);

    // uncomment and use the below code for login
    // login(values.email, values.password)
    //   .then((data) => {
    //     setIsLoading(false);
    //     saveAuth(data);
    //     console.log("Login Response >> ", data);
    //   })
    //   .catch((e) => {
    //     setIsLoading(false);
    //     ToastNotification({
    //       type: "error",
    //       message: e?.message,
    //     });
    //   });
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center">Welcome!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Please Login to your account
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={onSubmit(handleLogin)}>
          <TextInput
            id="email"
            label="Username"
            error={errors?.email?.message}
            leftSection={<IconUser size={16} />}
            {...getInputProps("email", { required: true })}
            style={{ marginBottom: "10px" }}
          />
          <PasswordInput
            id="password"
            label="Password"
            error={errors?.password?.message}
            leftSection={<IconPassword size={16} />}
            {...getInputProps("password", { required: true })}
          />
          <Button
            fullWidth
            mt="xl"
            type="submit"
            loading={isLoading}
            color="primaryBrand.9"
          >
            Login
          </Button>
        </form>
      </Paper>

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
          position: "absolute",
          bottom: 40,
          left: 40,
        }}
      >
        <Title order={1} style={{ color: "#ff1a1a" }}>
          Pentafox Starter Login
        </Title>
      </Box>
    </Container>
  );
}

export default Login;
