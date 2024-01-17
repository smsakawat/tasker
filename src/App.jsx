import Hero from './components/hero/Hero';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import TaskBoard from './components/task/TaskBoard';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <TaskBoard />
      <Footer />
    </>
  );
};

export default App;
