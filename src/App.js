import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from ".";
import { check } from "./http/userApi";
import Footer from "./components/footer/Footer";

const App = observer(() => {

  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <>loading</>
  }

  return (
    <div className="App">
        <BrowserRouter>
          <Header />
          <AppRouter />
          <Footer/>
        </BrowserRouter>
    </div>
  );
})

export default App;
