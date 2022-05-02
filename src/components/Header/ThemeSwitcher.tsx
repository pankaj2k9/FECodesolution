
import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { Flare, Bedtime } from '@mui/icons-material';

import { ActionItem } from './ActionItem';

import { ThemeModeContext } from '../../contexts';
import { LIGHT_MODE_THEME,  } from '../../utils/constants';

export const ThemeSwitcher = ({ disableTooltip = false }: { disableTooltip?: boolean }) => {
  const theme = useTheme();
  const { toggleThemeMode } = useContext(ThemeModeContext);

  return (
    <ActionItem
      title="Toggle Theme"
      icon={theme.palette.mode === LIGHT_MODE_THEME ? Flare : Bedtime}
      iconLabel ={theme.palette.mode === LIGHT_MODE_THEME ? "Light Mode" : "Dark Mode"}
      onClick={toggleThemeMode}
      disableTooltip={disableTooltip}
    />
  );
};