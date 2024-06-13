import axios from "axios";
import { useCallback, useState } from "react";

type Api = {
  loading: boolean;
  error: Error | null;
  get: (id?: string) => Promise<any>;
  post: (data: object) => Promise<any>;
  patch: (id: string, data: object) => Promise<any>;
  delete: (id: string) => Promise<any>;
};

const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjZDc2MWQwMC1hNTAxLTRlNmItOGIzOS1iNDVjZGQyMDIwOTIiLCJpYXQiOjE3MTgyNTE2MjMsImV4cCI6MTcxODI1MzQyM30.BsX-RVhal9-VqLIWaYLfZwGThf16ZX1Iwo11WuTqVS8`,
  },
});

async function get(url: string, id?: string): Promise<any> {
  try {
    const response = await api.get<any>(
      url + (id != undefined ? `/${id}` : ""),
    );
    return response.data;
  } catch (error: any) {
    throw new Error("Get error: ", { cause: error });
  }
}

async function post(url: string, data: object): Promise<any> {
  try {
    const response = await api.post<any>(url, data);
    return response.data;
  } catch (error: any) {
    throw new Error("Post error: ", { cause: error });
  }
}

async function patch(url: string, id: string, data: object): Promise<any> {
  try {
    const response = await api.patch<any>(`${url}/${id}`, data);
    return response.data;
  } catch (error: any) {
    throw new Error("Patch error: ", { cause: error });
  }
}

async function del(url: string, id: string): Promise<any> {
  try {
    const response = await api.delete<any>(`${url}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error("Delete error: ", { cause: error });
  }
}

export function useApi(url: string): Api {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const handleRequest = useCallback(async (req: () => Promise<any>) => {
    setLoading(true);
    setError(null);

    try {
      const response = await req();
      setLoading(false);
      return response;
    } catch (error: any) {
      setLoading(false);
      setError(error);
      throw error;
    }
  }, []);

  return {
    loading,
    error,
    get: (id?: string) => handleRequest(() => get(url, id)),
    post: (data: object) => handleRequest(() => post(url, data)),
    patch: (id: string, data: object) =>
      handleRequest(() => patch(url, id, data)),
    delete: (id: string) => handleRequest(() => del(url, id)),
  };
}
