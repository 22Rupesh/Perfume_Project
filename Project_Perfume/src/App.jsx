import { useState } from 'react';
import Routes from './Routes';
import AllFragrancesSection from './pages/AllFregrances';

function App() {

  const [darkMode, setDarkMode] = useState(false); 
  return (
    <div>
      <Routes />

      {/* <div className={darkMode ? "dark" : ""}>
        <AllFragrancesSection darkMode={darkMode} setDarkMode={setDarkMode} />
      </div> */}
    </div>


  );
}

export default App;