"use server";

import { redirect } from "next/navigation";
import { apiUrl, clearSession, setSession } from "@/lib/auth";

export type FormState = { error?: string } | undefined;

async function postLogin(email: string, password: string) {
  return fetch(`${apiUrl()}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ username: email, password }),
    cache: "no-store",
  });
}

export async function login(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  if (!email || !password) return { error: "Enter your email and password." };

  const res = await postLogin(email, password);
  if (!res.ok) {
    return {
      error:
        res.status === 401
          ? "Incorrect email or password."
          : "Something went wrong. Try again.",
    };
  }

  const { access_token } = await res.json();
  await setSession(access_token);
  redirect("/shop");
}

export async function signup(
  _: FormState,
  formData: FormData,
): Promise<FormState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  if (!email) return { error: "Fill in all fields." };
  if (password.length < 8)
    return { error: "Password must be at least 8 characters." };

  const res = await postLogin(email, password);
  if (res.status === 409)
    return { error: "An account with that email already exists." };
  if (!res.ok) return { error: "Couldn't create your account. Try again." };

  const loginRes = await postLogin(email, password);
  if (!loginRes.ok) redirect("/login");

  const { access_token } = await loginRes.json();
  await setSession(access_token);
  redirect("/shop");
}

export async function logout() {
  await clearSession();
  redirect("/shop");
}
