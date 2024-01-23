import axios from "axios";

const URL = "http://localhost:8000/api/"

const get = async (url, token) => {
  const apiUrl = `${URL}${url}`;
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const post = async (url, payload, token) => {
  const apiUrl = `${URL}${url}`;
  try {
    const response = await axios.post(apiUrl, payload, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const del = async (url, payload, token) => {
    const apiUrl = `${URL}${url}`;
    try {
      const response = await axios.delete(apiUrl, {
          headers: {
              Authorization: `Bearer ${token}`,
          },
          data: payload,
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  };

export { get, post, del };
