"use server";

import { cookies } from "next/headers";
import { api } from "./api";

function setAuthTokens(
  data: object & { accessToken: string; refreshToken: string },
) {
  const accessToken = data.accessToken;
  const refreshToken = data.refreshToken;

  cookies().set("accessToken", accessToken, { httpOnly: true });
  cookies().set("refreshToken", refreshToken, { httpOnly: true });
}

export async function signin(email: string, password: string) {
  const response = await api.post("/auth/sign-in", {
    email,
    password,
  });

  setAuthTokens(response.data);

  return response.data.accessToken;
}

export async function refresh() {
  const response = await api.post("/auth/refresh");
  console.log(response.data);

  setAuthTokens(response.data);

  return response.data.accessToken;
}
