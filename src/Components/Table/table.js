import React from "react";
import data from "../../data.json"
import TableRow from "./components/TableRow/tableRow";
export default function Table() {
  console.log(data);
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((person) => (
            <TableRow key={person.phone} person={person} />
          ))
        }
      </tbody>
    </table>
  )
}