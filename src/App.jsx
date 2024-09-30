export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackageList />
      <Stat />
    </div>
  );
}
function Logo() {
  return <h1>🌴Far Away💼</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>what do yo need for your 😁trip</h3>
    </div>
  );
}
function PackageList() {
  return <div className="list">Lists</div>;
}

function Stat() {
  return (
    <footer className="stats">
      <p>you have X items on your lsits and you already packed X(X%)</p>
    </footer>
  );
}
