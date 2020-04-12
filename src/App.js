import React from 'react';
import Header from "./Components/Header/header";
import Table from "./Components/Table/table";
import SearchInput from "./Components/SearchInput/searchInput";
import { AppContext, EventContext } from "./AppContexts";
import "./App.css"

export default function App() {
  const [searchText, setSearchText] = React.useState("");

  const handleInputChange = (event) => {
    setSearchText(event.currentTarget.value);
  }

  const appContext = {
    searchText
  }
  const eventContext = {
    onInputChange: handleInputChange
  }


  return (
    <AppContext.Provider value={appContext}>
      <EventContext.Provider value={eventContext}>
        <div className="App">
          <Header />
          <SearchInput />
          <Table />
        </div>
      </EventContext.Provider>
    </AppContext.Provider>
  );
}

