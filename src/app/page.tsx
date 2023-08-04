import { Grid } from 'lucide-react'
import { Header } from './components/Header'

export function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Header />
      <Grid />
    </div>
  )
}
