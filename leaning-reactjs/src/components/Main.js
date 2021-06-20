import Box from '../components/Box'
import { useState } from 'react'
export default function Main() {
  const [data, setData] = useState([
    {
      id: '1',
      title: 'This is title 1',
      color: 'red',
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
    },
    {
      id: '2',
      title: 'This is title 2',
      color: 'yellow',
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
    },
    {
      id: '3',
      title: 'This is title 3',
      color: 'blue',
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
    },
    {
      id: '4',
      title: 'This is title 4',
      color: 'green',
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
    },
    {
      id: '5',
      title: 'This is title 5',
      color: 'black',
      des: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
    }
  ])
  function handleDeleteDb (id) {
    var newDb = data.filter((x) => {
      return x.id !== id;
    })
    setData(newDb);
  }
  return (
    <main className="main-page">
      {
        data.length ? 
        <ul className="items">
          {data && data.map((db) =>
            <Box key={db.id} db={db} handleDeleteDb={handleDeleteDb} />)}
        </ul>
        :
        <h3 className="text-notice">You don't have any items</h3>
      }
    </main>
  )
}
