"use client"

export default function error({error,reset}) {
  return (
    <div>
        <h2>{error.message}</h2>
        <button onClick={()=>reset()}>تلاش دوباره</button>
    </div>
  )
}
