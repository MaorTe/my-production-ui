import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://localhost:5102/users`,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function fetchUsers(pageNumber: number) {
  const response = await axiosInstance.get<Array<any>>("/", {
    params: { pageNumber },
  });
  console.log(response.data);
  return response.data;
}

export async function fetchUser(userId: string) {
  const response = await axiosInstance.get<Array<any>>(`/${userId}`);
  return response.data;
}
