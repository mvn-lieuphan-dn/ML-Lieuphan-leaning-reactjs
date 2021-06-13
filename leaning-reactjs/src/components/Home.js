import Circle from './Circle';
export default function Home() {
  return (
    <section className="page-home">
      <ul className="circle-list">
        <Circle size="100" number="100" color="red" />
        <Circle size="200" number="200" color="yellow" />
        <Circle size="300" number="300" color="blue" />
      </ul>
    </section>
  )
}
