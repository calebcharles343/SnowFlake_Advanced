import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/sidebar/Logo";

const LoginContainer = styled.div`
  display: flex;
  background-color: var(--color-brand-0);
  min-height: 100vh;
`;
const LoginLayout = styled.main`
  display: grid;
  grid-template-columns: 54rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  border: 1px solid var(--color-grey-300);
  padding: 0 5% 0 5%;
  margin-top: 0;
`;
function Login() {
  return (
    <LoginContainer>
      <LoginLayout>
        <Logo />
        <Heading as="h2">Log in to your account</Heading>
        <LoginForm />
      </LoginLayout>
    </LoginContainer>
  );
}

export default Login;
