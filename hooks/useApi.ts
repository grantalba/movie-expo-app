import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/movie/";
// const AUTH_TOKEN =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOWJlYjc2MDE4ODM5M2M2ODBlZjEzMmE5ZTBlNGU0YSIsIm5iZiI6MTcxOTMwMjcwNy40NDc0MjUsInN1YiI6IjY2N2E3NmRmMThjNmRmMzdkZDA3ODUwMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YC1BGtXmH8xAlHBDN_rUz83Zh3C3Yvnz9FIgeKX7hHo";

const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmYxZTEwMjExOTZlMjZlNTAxNzcxOWFlNTVi OWJiMiIsIm5iZiI6MTcxOTIxNTIxMC45NzI4MTQsInN1YiI6IjY2NzkyM2UwZmI4Y2IxY zZjMDU2NTZiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7TDDR6g XS9FeDdtdgxxH13rQtpTNGmW5W5PdXEQdmF8";

const useApi = (endpoint: string, method = "GET", pageNumber = 1) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchApi = async () => {
    try {
      setLoading(true);

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
          setData(newData);
        } else {
          setData(response.data);
        }
      }

      setLoading(false);
    } catch (err: any) {
      console.error(err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, [pageNumber, endpoint, method]);

  return { data, error, loading };
};

export default useApi;
