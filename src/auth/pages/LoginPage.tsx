import styled from "styled-components";
import { InputField, Text } from "../../components/common";
import { Button } from "../../components/common/Button/Button";
import { useNavigate } from "react-router-dom";
import { LoginImg } from "../../assets/login";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context";
import { ContainerFlex } from "../../styles/globalStyledcomponents";
import { PasswordField } from "../../components/common/InputField/PasswordField";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  padding: 120px;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
`;
const Content = styled.div`
  grid-column-start: 1;
  grid-column-end: 5;
  display: flex;
  flex-direction: column;
  row-gap: 130px;
  form {
  }
`;
const ImgContainer = styled.div`
  position: absolute;
  right: 62px;
  bottom: 110px;
  max-width: 46%;
  /* padding-top: 274px; */
  /* max-width: 662px;
  max-height: 640px; */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

const FormInputs = styled(ContainerFlex)``;

export const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, watch } = useForm();
  const formValues = watch();
  const email = watch("email");

  const { login, logged } = useContext(AuthContext);

  const onSubmit = handleSubmit((data) => {
    login(data.email, data.password);
  });
  useEffect(() => {
    if (logged) navigate("/dashboard/inicio", { replace: true });
  }, [logged]);

  return (
    <Container>
      <Content>
        <Text fontSize="xl" fontWeight="semiBold" text="Iniciar sesión" />
        <Form onSubmit={onSubmit}>
          <FormInputs direction="column" gap="37px">
            <InputField
              label="Correo electrónico"
              type="text"
              name="email"
              placeholder="juan@gmail.com"
              endAdornment={email && email.length > 0 && "check"}
              control={control}
            />
            <PasswordField
              label="Contraseña"
              type="text"
              name="password"
              placeholder="Escribe tu contraseña"
              helperText="¿Olvidaste tu contaseña?"
              align_self_helper="flex-end"
              control={control}
            />
          </FormInputs>

          <Button
            type="submit"
            size="full"
            text="Iniciar sesión"
            variant="primary"
            disabled={!formValues.email && !formValues.password}
          />
        </Form>
      </Content>
      <ImgContainer>
        <LoginImg />
      </ImgContainer>
    </Container>
  );
};
