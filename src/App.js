import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <div className="App px-20 py-10 min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
