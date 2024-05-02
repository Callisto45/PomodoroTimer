import logo from './logo.svg';
import './App.css';
import Timer from "./Timer";
import Settings2 from "./Settings2";
import {useState} from "react";
import SettingsContext from "./SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
      {showSettings ? <Settings2/> : <Timer/>}
      </SettingsContext.Provider>
        
      
      
    </main>
  );
}

export default App;
