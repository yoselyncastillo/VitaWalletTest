import { Controller } from "react-hook-form";
import { IconNames } from "../../../interfaces/Icon";
import { Icon } from "../Icon/Icon";
import { MenuItem, Select } from "@mui/material";
import { ContainerFlex } from "../../../styles/globalStyledcomponents";
import styled from "styled-components";
import { COLORS } from "../../../styles/themes";

interface Props {
  name: string;
  options: IconNames[];
  control: any;
}

const InicioContainer = styled(ContainerFlex)`
  .MuiInputBase-input {
    padding-top: 15.5px;
    padding-bottom: 15.5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .MuiMenu-list {
    border: 1px solid ${COLORS.gray_1};
  }
`;

export const CustomSelect = ({ options, name, control }: Props) => {
  return (
    <InicioContainer direction="column" gap="4px">
      <Controller
        render={({ field }) => (
          <Select {...field}>
            {options.map((option) => (
              <MenuItem value={option} key={option}>
                <Icon name={option} />
              </MenuItem>
            ))}
          </Select>
        )}
        name={name}
        control={control}
      />
    </InicioContainer>
  );
};
