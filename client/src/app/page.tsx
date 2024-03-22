import { Grid } from "@/components/Grid";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <NavBar />
      <Header />
      <Grid />
    </div>
  );
}
