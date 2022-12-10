import "./App.css";
import qrForm from "./components/qrForm";

function App() {
  return (
    <div>
      <h1 style={{fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px'}}>QR CODE CREATOR</h1>
      <div className="container">
        <qrForm/>
      </div>
    </div>
  );
}

export default App;
