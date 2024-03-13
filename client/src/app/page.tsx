import { Grid } from "./components/Grid";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Grid />
    </div>
  );
}
