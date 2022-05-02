import './App.css'
import H1 from './components/atoms/H1'
import Columns from './components/templates/Columns'
import Calendar from './components/organisms/Calendar'
import Schedule from './components/organisms/Schedule'
import Confirmation from './components/organisms/Confirmation'
import { useContext } from 'react'
import AppContext from './context/AppContext'
import Resume from './components/organisms/Resume'

const App = (): JSX.Element => {
  const { open } = useContext(AppContext)

  return (
    <main>
      <H1>Dancing with Death</H1>
      {open && <Resume />}
      <Columns>
        <Calendar />
        <Schedule />
        <Confirmation />
      </Columns>
    </main>
  )
}

export default App