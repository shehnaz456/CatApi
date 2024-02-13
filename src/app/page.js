"use client";

import React, { useEffect, useState } from "react";
// import styles from "../catlist/page.module.css";
import styles from './page.module.css'

export default function Page() {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=100 ",
          {
            headers: {
              "X-RapidAPI-Key":
                "api_key=live_UpVCYll6JWKxtYZc8EaBJUm3YBeFy8JZ4bPC4P4OQMPlqPCULtaiJRhaHJnmcf8q",
            },
          }
        );
        const data = await response.json();
        console.log(data);
        setBreeds(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className="head">Cat breeds List</h1>
      <br></br>
      <div className={styles.catContainer}>
        {breeds.length > 0 &&
          breeds.map((item) => (
            <div key={item.id} className={styles.catCard}>
              <img src={item.url} alt="Cat" className={styles.catImage} />
            </div>
          ))}
      </div>
    </div>
  );
}
