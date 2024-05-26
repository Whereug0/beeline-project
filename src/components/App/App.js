
import MyFooter from '../Footer/MyFooter';
import Header from '../Header/Header';
import AppRoutes from '../Routes/AppRoutes';

import styles from './App.module.scss';

function App() {
  
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      <MyFooter />
    </div>
  );
}

export default App;
