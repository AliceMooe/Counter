import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

const App = () => {
  const islogin = useSelector((state) => state.auth.isLogin);

  return (
    <>
    <Navbar />
    {
      !islogin && <Welcome />
    }
    {
      islogin && <Counter />
    }
    </>
  )
}

export default App;