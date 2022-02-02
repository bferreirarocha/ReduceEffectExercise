import React from "react";
import "./App.scss";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Modal from "./UI/Modal";
import { GobalProvider } from "./Services/Context";

export default function App() {
  return (
    <GobalProvider>
      <React.Fragment>
        <div className="App">
          <header>
            <Header />
          </header>
          <main>
            <Main />
          </main>
          <footer></footer>
          <Modal></Modal>
        </div>
      </React.Fragment>
    </GobalProvider>
  );
}
