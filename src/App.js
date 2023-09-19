import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Portfolio from "components/portfolio/Portfolio";
import Timeline from "components/portfolio/Timeline/Timeline";
import TestTimeline from "components/portfolio/Timeline/TestTimeline";
function App() {
  /*
  - via useSelector, you can grab values from the store. Here, the values set are from the initial state
  - With useMemo, only runs when dependency changes. useMemo returns a memoized value. Like caching a value
  - useCallback returns memoized function rather thena value
  - CssBaseline resets our css to basic css. This is esentially css reset
  */
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); //rerun app component when mode changed

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/" element={<Portfolio />} />
            <Route path="/test" element={<Timeline/>} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
