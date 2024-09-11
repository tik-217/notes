// react
import { useContext } from "react";

// react-router-dom
import { useLocation, useNavigate } from "react-router-dom";

// context
import { AuthContext } from "@context/Auth";

// mantine
import { Paper, Title, Text, Container, Button, Input } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";

// styles
import classes from "./Authentication.module.css";

export function Authentication() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();
  const locations = useLocation();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      name: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: isNotEmpty("Name is required"),
    },
  });

  function onSubmit(values: typeof form.values) {
    login(values, () => navigate(locations.state?.from ?? "/"));
  }

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Just enter your email
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <Input.Wrapper withAsterisk label="Your name" id="userName" mb="sm">
            <Input
              type="text"
              placeholder="Alex"
              autoComplete="name webauthn"
              id="userName"
              key={form.key("name")}
              {...form.getInputProps("name")}
            />
          </Input.Wrapper>
          <Input.Wrapper withAsterisk label="Email" id="userEmail">
            <Input
              type="email"
              placeholder="your@email.com"
              id="userEmail"
              autoComplete="email webauthn"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
          </Input.Wrapper>
          <Button fullWidth mt="lg" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
