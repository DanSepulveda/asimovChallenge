import './App.css'
import Title from './components/Title'
import Columns from './components/Columns'
import Calendar from './components/Calendar'
import Schedule from './components/Schedule'

const App = (): JSX.Element => {
  return (
    <main>
      <Title>Dancing with Death</Title>
      <Columns>
        <Calendar />
        <Schedule />
      </Columns>
    </main>
  )
}

export default App