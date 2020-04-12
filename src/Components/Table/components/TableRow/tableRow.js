import React from "react";

export default function TableRow(props) {
  const {
    person: {
      name,
      location,
      phone,
      email
    }
  } = props;

  return (
    <tr>
      <td>{`${name.first} ${name.last}`}</td>
      <td>{`${location.city}, ${location.state} ${location.country}`}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  )
}