import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = async () => {
  const request = await axios.get(baseUrl);
  // return request.then((response) => response.data);
  return request.data;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const deleteBlog = async (id) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response;
};

export default { getAll, create, setToken, deleteBlog };
