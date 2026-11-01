import { UserList } from "./UserList";

function App() {
  const users = [
    { id: 1, name: "Mohamed", email: "mohamedawil110@gmail.com" },
    { id: 2, name: "Hassan", email: "hassan1@gmail.com" },
    { id: 3, name: "Fatima", email: "fatima@gmail.com" },
    { id: 4, name: "Deka", email: "deka234@gmail.com" },
    { id: 5, name: "Maryan", email: "maryan21@gmail.com" },
  ];
  return <UserList users={users} />;
}

export default App;
