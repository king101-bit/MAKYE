import "server-only";
import { cookies } from "next/headers";

const COOKIE = "makye_token";


export function apiUrl() {
  const url = process.env.API_URL;
  if (!url) throw new Error("API_URL is not set");
  return url;
}

export async function setSession(token: string) {
  (await cookies()).set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearSession() {
  (await cookies()).delete(COOKIE);
}

export async function getCurrentUser(): Promise<Profile | null> {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;

  const res = await fetch(`${apiUrl()}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  return res.ok ? res.json() : null;
}
