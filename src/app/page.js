"use client";
import CreateAssigment from "@/Components/create-assignment/create-assignment";
import styles from "./page.module.css";
import RightSideBar from "@/Components/rightSideBar/right-SideBar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
store.subscribe(() => {
  console.log("pageredux:- ",store.getState());
});
export default function Home() {
  return (
    <Provider store={store}>
      <main className={styles.main}>
        <div>
          <CreateAssigment />
        </div>
        <div>
          {/* flkdf */}
          <RightSideBar />
        </div>
      </main>
    </Provider>
  );
}
