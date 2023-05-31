import { TodoProvider } from '../components/TodoContext';
import { AppUI } from './AppUI';

import './center.css'

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App
