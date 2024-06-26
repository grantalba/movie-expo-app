import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie/";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWJlYjc2MDE4ODM5M2M2ODBlZjEzMmE5ZTBlNGU0YSIsIm5iZiI6MTcxOTMwMjcwNy40NDc0MjUsInN1YiI6IjY2N2E3NmRmMThjNmRmMzdkZDA3ODUwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YC1BGtXmH8xAlHBDN_rUz83Zh3C3Yvnz9FIgeKX7hHo";

const useApi = (endpoint: string, method = "GET", pageNumber = 1) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      const options = {
        method: "GET",
        url: `${BASE_URL}${endpoint}`,
        params: { language: "en-US", page: pageNumber },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      };

      const response = await axios.request(options);

      if (response.data) {
        if (pageNumber > 1 && data) {
          const newData = response.data;
          newData.results = [...data?.results, ...response?.data?.results];
          console.log(newData.results);
          setData(newData);
        }
        setData(response.data);
      }
    } catch (err: any) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [pageNumber, endpoint, method]);

  return { data, error };
};

export default useApi;
