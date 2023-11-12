import "ui/styles.css"
import './App.css'

import { Card } from "ui";

function App() {

  return (
    <div className='bg-blue-200 '>
      <h1>Vite project</h1>

      <Card
        title={"App 2"}
        children={undefined}
        href={""}
        className="bg-gray-300"
      />
    </div>
  )
}

export default App
