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

const DjangoTemplateViewer = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://127.0.0.1:8000/personality_questions/'); // Update URL as per your Django app

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

  return (
    <div>
      <h1>Render Django Template in React</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      )}
    </div>
  );
};

export default DjangoTemplateViewer;
