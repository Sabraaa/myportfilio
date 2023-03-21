import AppRoute from "./routes/AppRouts";
import Layout from "./Layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <AppRoute />
      </Layout>
    </div>
  );
}

export default App;
