import RouterNav from "./Router/RouterNav";
import AuthProvider from "./Context/AuthProvider";
function App() {
  return (
    <AuthProvider>
      <RouterNav></RouterNav>
    </AuthProvider>
  );
}

export default App;
