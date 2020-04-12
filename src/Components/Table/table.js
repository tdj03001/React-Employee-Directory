import React from "react";
import data from "../../data.json"
import TableRow from "./components/TableRow/tableRow";
import TableHeader from "./components/TableHeader/tableHeader";
import { TableContext, EventContext } from "./tableContexts";

export default function Table() {
  const [sortBy, setSortBy] = React.useState();

  const handleTableHeaderClick = (event) => {
    const target = event.currentTarget;
    const id = target.getAttribute("data-id");

    setSortBy(id);

  }

  const tableContext = {
    sortBy
  }

  const eventContext = {
    onTableHeaderClick: handleTableHeaderClick
  }

  let sortedData = [...data];
  switch (sortBy) {
    case "Name":
      sortedData = sortedData.sort((a, b) => {
        const name1 = `${a.name.first} ${a.name.last}`
        const name2 = `${b.name.first} ${b.name.last}`
        return name1.localeCompare(name2);
      })

      break;

    case "Location":
      sortedData = sortedData.sort((a, b) => a.location.city.localeCompare(b.location.city))
      break;

    case "Phone":
      sortedData = sortedData.sort((a, b) => a.phone.localeCompare(b.phone))
      break;

    case "Email":
      sortedData = sortedData.sort((a, b) => a.email.localeCompare(b.email))
      break;

    default:

      break;
  }

  return (
    <TableContext.Provider value={tableContext}>
      <EventContext.Provider value={eventContext}>
        <table border="1">
          <thead>
            <tr>
              <TableHeader text="Name" />
              <TableHeader text="Location" />
              <TableHeader text="Phone" />
              <TableHeader text="Email" />
            </tr>
          </thead>
          <tbody>
            {
              sortedData.map((person) => (
                <TableRow key={person.phone} person={person} />
              ))
            }
          </tbody>
        </table>
      </EventContext.Provider>
    </TableContext.Provider>
  )
}