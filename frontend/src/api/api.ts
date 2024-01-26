import axios from "axios";

const URL = "http://localhost:8000/api/"

const get = async (url, token) => {
  const apiUrl = `${URL}${url}`;
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      maxContentLength: 100000000,
      maxBodyLength: 1000000000,
    });
    return response;
  } catch (err) {
    console.error(JSON.stringify(err, null, 2));
  }
};

const post = async (url, payload, token) => {
  const apiUrl = `${URL}${url}`;
  try {
    const response = await axios.post(apiUrl, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        maxContentLength: 100000000,
        maxBodyLength: 1000000000
    });
    return response;

  } catch (err) {
    console.error(JSON.stringify(err, null, 2));
  }
};

const del = async (url, payload, token) => {
    const apiUrl = `${URL}${url}`;
    try {
      const response = await axios.delete(apiUrl, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
          maxContentLength: 100000000,
          maxBodyLength: 1000000000,
          data: payload,
      });
      return response;
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

export { get, post, del };
