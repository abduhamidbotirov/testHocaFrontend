import { Admin } from "./apps/Admin";
import { User } from "./apps/User";
import { CustomUser } from "./apps/CustomUser";

const App = () => {
  const role = localStorage.getItem("role");

  if (role == "admin") {
    return (
      <div className="App">
        <Admin />
      </div>
    );
  } else if (role == "user") {
    return (
      <div className="App">
        <User />
      </div>
    );
  } else  {
    return (
      <div className="App">
        <CustomUser />
      </div>
    );
  }
};

export default App;
