import React from "react";
import {
  BitcoinIcon,
  ChileIcon,
  TetherIcon,
  UsdcIcon,
  UsdIcon,
} from "../../../assets/icons";
import { IconNames } from "../../../interfaces/Icon";
import { CoinIcon } from "../../../assets/icons/CoinIcon";
import { ChevronIcon } from "../../../assets/icons/ChevronIcon";
import { VisibilityOff } from '../../../assets/icons/VisibilityOff';
import { Visibility } from "../../../assets/icons/Visibility";
import { CheckIcon } from "../../../assets/icons/Check";

interface IconProps {
  name: IconNames;
}

export const Icon: React.FC<IconProps> = ({ name }) => {
  const iconsMap: Record<IconProps["name"], React.FC> = {
    btc: BitcoinIcon,
    usdt: TetherIcon,
    usdc: UsdcIcon,
    clp: ChileIcon,
    coin: CoinIcon,
    usd: UsdIcon,
    chevron: ChevronIcon,
    visibilityOff: VisibilityOff,
    visibility: Visibility,
    check: CheckIcon
  };

  const IconComponent = iconsMap[name];

  return <IconComponent />;
};
