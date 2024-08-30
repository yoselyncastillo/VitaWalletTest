import styled from "styled-components";
import { Text } from "../Text/Text";
import { ContainerFlex } from "../../../styles/globalStyledcomponents";
import { Icon } from "../Icon/Icon";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import { COLORS } from "../../../styles/themes";
import { useState } from "react";
import { Controller } from "react-hook-form";

interface Props {
  type: string;
  name: string;
  placeholder: string;
  label?: string;
  helperText?: string;
  align_self_helper?: string;
  control: any;
  setFocusedInput?: React.Dispatch<React.SetStateAction<string>>;
}

const InputMaterial = styled(OutlinedInput)`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #010e11;
  .MuiInputBase-input {
    padding: 16px;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: #b9c1c2;
  }

  &.Mui-focused {
    & .MuiOutlinedInput-notchedOutline {
      border-color: ${COLORS.blue_1} !important; /* Color del borde al enfocar */
    }
  }
`;

export const PasswordField = ({
  placeholder,
  name,
  label,
  helperText,
  align_self_helper,
  control,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <ContainerFlex direction="column" gap="4px">
      {label && <Text fontSize="xs" fontWeight="regular" text={label} />}
      <Controller
        render={({ field }) => (
          <InputMaterial
            placeholder={placeholder}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <Icon name="visibilityOff" />
                  ) : (
                    <Icon name="visibility" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            {...field}
          />
        )}
        name={name}
        control={control}
      />

      {helperText && (
        <Text
          fontSize="xxs"
          fontWeight="regular"
          text={helperText}
          align_self={align_self_helper}
        />
      )}
    </ContainerFlex>
  );
};
