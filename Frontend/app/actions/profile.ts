"use server";

import { getCurrentUser } from "@/lib/auth";
import { cookies } from "next/headers";

export async function getProfile() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Not authenticated");
  }

  return user;
}

export async function updateProfile(data: {
  name?: string | null;
  delivery_address?: string | null;
}): Promise<Profile> {
  const token = (await cookies()).get("makye_token")?.value;

  if (!token) throw new Error("Not authenticated");

  const res = await fetch(`${process.env.API_URL}/users/me`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to update profile");

  return res.json();
}
