import React, { ComponentType } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { ActionIcon } from "./ActionIcon";
import { Typography } from "@mui/material";

interface ActionItemProps {
  title: string;
  icon: ComponentType;
  iconLabel: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  badgeContent?: number;
  disableTooltip?: boolean;
}

export const ActionItem = ({
  title,
  icon,
  iconLabel,
  onClick,
  badgeContent,
  disableTooltip = false,
}: ActionItemProps) => {
  const buttonIcon = (
    <IconButton size="small" color="inherit" onClick={onClick} disableFocusRipple disableRipple>
      <ActionIcon badgeContent={badgeContent} icon={icon} />{" "}
      <Typography variant="subtitle2" component="div">
        {iconLabel}
      </Typography>
    </IconButton>
  );

  return disableTooltip ? (
    buttonIcon
  ) : (
    <Tooltip title={title} placement="bottom" arrow>
      {buttonIcon}
    </Tooltip>
  );
};
