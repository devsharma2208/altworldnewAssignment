import CreateAssigment from "@/Components/create-assignment/create-assignment";
import styles from "./page.module.css";
import RightSideBar from "@/Components/rightSideBar/right-SideBar";


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <CreateAssigment />
      </div>
      <div>
        <RightSideBar/>
      </div>
    </main>
  );
}
