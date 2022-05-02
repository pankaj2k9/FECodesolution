import { useMemo, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import themes utils
import { ThemeModeContext } from "./contexts";
import { getAppTheme } from "./styles/theme";
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from "./utils/constants";
// import pages
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";

function App() {
  const [mode, setMode] = useState<
    typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME
  >(DARK_MODE_THEME);

  const themeMode = useMemo(
    () => ({
      toggleThemeMode: () => {
        setMode((prevMode: any) =>
          prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME
        );
      },
    }),
    []
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  return (
    <ThemeModeContext.Provider value={themeMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
              <Route  path="/" element={<HomePage/>} />
              <Route  path="/:country" element={<CountryPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
