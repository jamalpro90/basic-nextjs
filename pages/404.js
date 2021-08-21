import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// buat custom halaman 404 / not found
export default function Custom404() {
  const router = useRouter();
  const [count, setCount] = useState(5);
  
  useEffect(() => {
    setTimeout(() => {
      count === 0 ? setCount(0) : setCount(count - 1);
      if(count === 0) {
        router.push('/')
      }
    }, 1000);
  }, [count])
  
  return (
    <div className="nf-container">
      <h1 className="nf-title">404</h1>
      <h2 className="nf-text">Page Not Found</h2>
      <p className="nf-back-home">Back To Home Page In <span>{count}</span> Second</p>
    </div>
  )
}
