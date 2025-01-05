// import React, {useEffect, useState} from 'react'

// function Test() {
//     const [data, setData] = useState([]);
// const fetchData = () =>{
//     useEffect(() =>{
//         fetch()
//     })

// }



//   return (
//     <div>

//     </div>
//   )
// }

// export default Test
import React, { useState, useEffect } from 'react';

const Test = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questionNumber, setQuestionNumber] = useState('');
  const [answer, setAnswer] = useState('');

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://127.0.0.1:8000/psychometric-test/'); // Update URL as per your Django app

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const html = await response.text();
        setHtmlContent(html);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHtml();
  }, []);

  const handleSubmit = async (e) => {

    const data = {
      questionNumber,
      answer,
    };

    try {
      const response = await fetch('http://localhost:8000/answers/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Data saved successfully:', result);
        // Optionally reset the form
        setQuestionNumber('');
        setAnswer('');
      } else {
        console.error('Error saving data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {!loading && !error && (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
        )}

      </form>

    </div>
  );
};

export default Test;
