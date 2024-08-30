import styled from "styled-components";
import { Controller, FieldValues, UseFormRegister } from "react-hook-form";
import { Text } from "../Text/Text";
import { ContainerFlex } from "../../../styles/globalStyledcomponents";
import { Icon } from "../Icon/Icon";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { COLORS } from "../../../styles/themes";
import { IconNames } from "../../../interfaces/Icon";

interface Props {
  type: string;
  name: string;
  placeholder: string;
  label?: string;
  helperText?: string;
  align_self_helper?: string;
  endAdornment?: IconNames;
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

  .MuiOutlinedInput-root {
    .Mui-focused fieldset {
      border-color: #b9c1c2;
    }
  }

  &.Mui-focused {
    & .MuiOutlinedInput-notchedOutline {
      border-color: ${COLORS.blue_1} !important; /* Color del borde al enfocar */
    }
  }
`;

export const InputField = ({
  type,
  placeholder,
  name,
  label,
  helperText,
  align_self_helper,
  endAdornment,
  control,
  setFocusedInput,
}: Props) => {
  const fn = () => setFocusedInput && setFocusedInput(name);
  return (
    <ContainerFlex direction="column" gap="4px">
      {label && <Text fontSize="xs" fontWeight="regular" text={label} />}

      <Controller
        render={({ field }) => (
          <InputMaterial
          onFocus={fn}
            placeholder={placeholder}
            type={type}
            endAdornment={
              endAdornment && (
                <InputAdornment position="end">
                  <Icon name={endAdornment} />
                </InputAdornment>
              )
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
