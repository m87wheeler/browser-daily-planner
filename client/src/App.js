// *** data, hooks & context
import { TaskProvider } from "./context/taskContext";

// *** components
import GlobalReset from "./styles/Global";
import Layout from "./components/layout/Layout";

// *** styled components

const App = () => {
  return (
    <>
      <TaskProvider>
        <GlobalReset />
        <Layout />
      </TaskProvider>
    </>
  );
};

export default App;
