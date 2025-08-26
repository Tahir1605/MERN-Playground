import { useEffect, useState } from 'react';
import axios from 'axios';
const App = () => {
  const [data, setData] = useState([]);


  // API fetch Using fetch



  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error('Error fetching:', error));
  // }, []);



  // API fetch Using axios



  //  useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => setData(response.data))
  //     .catch(error => console.error('Error fetching:', error));
  // }, []);




  // API fetch Using Async/Await and fetch



  //  useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  //       const json = await response.json();
  //       setData(json);
  //     } catch (error) {
  //       console.error('Error fetching:', error);
  //     }
  //   };
  //   getData();
  // }, []);




  // API fetch Using Async/Await and axios



   useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(res.data);
      } catch (error) {
        console.error('Error fetching:', error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {data.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
  );
};

export default App;
