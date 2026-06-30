import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <h1 className="text-blue-600 dark:text-sky-400 border-2 p-4 rounded-xl mt-4">
        Learn to Integrate Tailwind CSS
      </h1>
      <div className="flex gap-4">
        <Card
          title="Buy Python Course"
          buttonText="Join Now"
          imageurl="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500"
        />
        <Card
          title="Buy Nodejs Course"
          imageurl="https://images.unsplash.com/photo-1778526079007-bc5dd8f1a2a1?q=80&w=1210&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <Card
          title="Somewhere in Europe"
          imageurl="https://images.unsplash.com/photo-1781429235828-55c8c31baf38?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </>
  );
}

export default App;
