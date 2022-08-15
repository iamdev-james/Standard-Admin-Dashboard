import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// Pages to be rendered
import { Ecommerce, Kanban, Orders, Employees, Editor, Customers, ColorPicker, Calendar, Area, Bar, ColorMapping, Financial, Line, Pie, Pyramid, Stacked, Login  } from './pages'

// Components to be used
import { ThemeSettings } from './components'

// Layouts to be used
import { Sidebar, Navbar } from './layout'

// Importing context
import { useStateContext } from './contexts/ContextProvider';

// Protect routes
import Protected from './pages/Auth/Protected';


import './App.css';

function App() {
  const { menuActive, setCustomersData, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext()

  // Fetching users data from an Api
    useEffect(() => {
      fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setCustomersData(data.users))
    }, [setCustomersData])

  return (
    <div className={`overflow-x-hidden ${currentMode === 'Dark' ? 'dark' : ''}`}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position="Top">
              <button
              type='button'
              className='text-3xl p-3 hover:drop-shadow-xl hover-bg-light-gray text-white'
              style={{
                backgroundColor: currentColor,
                borderRadius: '50%'
              }}
              onClick={() => setThemeSettings(true)}
              >
                <FiSettings className="cursor-pointer" />
              </button>
            </TooltipComponent>
          </div>
          {/* Menu section */}
          { menuActive? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ): (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div
          className={
            `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${menuActive? 'md:ml-72' : 'flex-2'}`
          }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

          {/* Main Page */}
          <div className="md:mt-0 mt-24">
            {themeSettings && <ThemeSettings />}

            <Routes>
              <Route path="/login" element={ <Login />} />
                <Route path="/" element={ <Protected><Ecommerce /></Protected>} />
                <Route path="/ecommerce" element={ <Protected><Ecommerce /></Protected>} />

                {/* Pages */}
                <Route path="/orders" element={ <Protected><Orders /></Protected>} />
                <Route path="/employees" element={ <Protected><Employees /></Protected>} />
                <Route path="/customers" element={ <Protected><Customers /></Protected>} />

                {/* Apps */}
                <Route path="/kanban" element={ <Protected><Kanban /></Protected>} />
                <Route path="/editor" element={ <Protected><Editor /></Protected>} />
                <Route path="/calendar" element={ <Protected><Calendar /></Protected>} />
                <Route path="/color-picker" element={ <Protected><ColorPicker /></Protected>} />

                {/* Charts */}
                <Route path="/line" element={ <Protected><Line /></Protected>} />
                <Route path="/area" element={ <Protected><Area /></Protected>} />
                <Route path="/bar" element={ <Protected><Bar /></Protected>} />
                <Route path="/pie" element={ <Protected><Pie /></Protected>} />
                <Route path="/financial" element={ <Protected><Financial /></Protected>} />
                <Route path="/color-mapping" element={ <Protected><ColorMapping /></Protected>} />
                <Route path="/pyramid" element={ <Protected><Pyramid /></Protected>} />
                <Route path="/stacked" element={ <Protected><Stacked /></Protected>} />
            </Routes>
          </div>
        </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
