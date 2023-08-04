import Header from './components/Header'
import Grid from './components/Grid'

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <Header/>
      <Grid/>
    </div>
  )
}
