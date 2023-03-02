import React, { useState } from "react";

function App() {
  const [reservations, setReservations] = useState([]);
  const [name, setName] = useState("");
  const [row, setRow] = useState("");
  const [seat, setSeat] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleRowChange = (event) => {
    setRow(event.target.value);
  };

  const handleSeatChange = (event) => {
    setSeat(event.target.value);
  };

  const handleReserve = (event) => {
    event.preventDefault();
    setReservations([...reservations, { name, row, seat }]);
    setName("");
    setRow("");
    setSeat("");
  };

  return (
    <div>
      <h1>Reserve Asientos</h1>
      <form onSubmit={handleReserve}>
        <label>
          Nombre:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Fila:
          <input type="text" value={row} onChange={handleRowChange} />
        </label>
        <br />
        <label>
          Asiento:
          <input type="text" value={seat} onChange={handleSeatChange} />
        </label>
        <br />
        <button type="submit">Reservar</button>
      </form>
      <br />
      <h2>Reservas:</h2>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>
            {reservation.name} - Fila: {reservation.row}, Asiento:{" "}
            {reservation.seat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
