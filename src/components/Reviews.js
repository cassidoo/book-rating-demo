import React from 'react'
import { useHarperDB } from 'use-harperdb'
import StarRatings from './StarRatings'
import './Reviews.module.css'

function Reviews({ type = 'books' }) {
  const [data, loading, error, refresh] = useHarperDB({
    query: { operation: 'sql', sql: `select * from reviews.${type}` },
    interval: 50000,
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (data && data.length > 0) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <td>{type.substring(0, type.length - 1)}</td>
              <td>{type === 'books' ? 'Author' : 'Director'}</td>
              <td>Rating</td>
            </tr>
          </thead>
          <tbody>
            {data.map((b, index) => {
              return (
                <tr key={`${b.name.split(' ').join('')}${index}`}>
                  <td>{b.name}</td>
                  <td>{b.author}</td>
                  <td>
                    <StarRatings rating={b.review} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button onClick={refresh}>Refresh</button>
      </>
    )
  } else {
    return (
      <div>
        No data!
        {error}
      </div>
    )
  }
}

export default Reviews
