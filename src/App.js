import "./App.css";
import Header from "./components/Header";
import Contact from "./components/Contact";

// Uncomment untuk memuat daftar kontak
import contacts from "./data/contacts.json";

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      {contacts.map((data) => {
        return (
          <Contact
            foto={data.photo}
            nama={data.name}
            noHP={data.phone}
            email={data.email}
          />
        );
      })}
    </div>
  );
};

export default App;
