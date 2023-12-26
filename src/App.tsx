import React from "react";
import { HomePage } from "./pages/HomePage";
import GlobalStyles from "./styles/global";
import { Modal } from "./components/Modal";
import { useAppSelector } from "./app/hooks";

const App: React.FC = () => {
  const isModalOpened = useAppSelector((state) => state.modal.isOpened);
  return (
    <>
      <GlobalStyles />
      <HomePage />
      {isModalOpened && <Modal />}
    </>
  );
};

export default App;
