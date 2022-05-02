import './App.css'
import H1 from './components/atoms/H1'
import Columns from './components/templates/Columns'
import Calendar from './components/organisms/Calendar'
import Schedule from './components/organisms/Schedule'
import Form from './components/organisms/Form'

const App = (): JSX.Element => {
  return (
    <main>
      <H1>Dancing with Death</H1>
      <Columns>
        <Calendar />
        <Schedule />
        <Form />
      </Columns>
    </main>
  )
}

export default App