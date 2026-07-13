import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
  };
  const updateStatus = (id, newStatus) => {
    setQueue(
      queue.map((customer) => {
        customer.id === id ? { ...customer, status: newStatus } : customer;
      }),
    );
  };
  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id != id));
  };

  return (
    <div className="app">
      <header>
        <h1>Queue Managment System</h1>
        <p>Manage Your Customer efficiently</p>
      </header>
      <main>
        <QueueForm onAdd={addToQueue} />
        <h1>QueueDisplay</h1>
      </main>
    </div>
  );
}
