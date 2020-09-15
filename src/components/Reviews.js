import React from 'react'
import { useHarperDB } from 'use-harperdb'

function Reviews({ type = 'books' }) {
  const [data, loading, error, refresh] = useHarperDB({
    query: { operation: 'sql', sql: `select * from reviews.${type}` },
    interval: 50000,
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (data) {
    return (
      <table>
        {data.map((b) => {
          return (
            <tr key={b.name}>
              <td>{b.name}</td>
              <td>{b.author}</td>
              <td>{b.review}</td>
            </tr>
          )
        })}
      </table>
    )
  }

  return <div>Something went wrong.</div>
}

export default Reviews
