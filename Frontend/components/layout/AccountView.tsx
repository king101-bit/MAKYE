"use client";

import { useEffect, useState, type FormEvent } from "react";
import { UserAvatar } from "../ui/UserAvatar";
import { getProfile, updateProfile } from "@/app/actions/profile";

const inputClass =
  "mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder:text-neutral-400 focus-visible:border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
const buttonClass =
  "rounded-full bg-neutral-900 px-7 py-3 font-semibold text-white transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:hover:bg-neutral-900";

const passwordRules = [
  { label: "At least 12 characters", test: (p: string) => p.length >= 12 },
  { label: "An uppercase letter", test: (p: string) => /[A-Z]/.test(p) },
  { label: "A lowercase letter", test: (p: string) => /[a-z]/.test(p) },
  { label: "A number", test: (p: string) => /\d/.test(p) },
  { label: "A special character", test: (p: string) => /[^A-Za-z0-9]/.test(p) },
];

export default function AccountView() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [profileSaved, setProfileSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [current, setCurrent] = useState("");
  const [passwordSaved, setPasswordSaved] = useState(false);
  const passwordOk = passwordRules.every((r) => r.test(password));

  async function saveProfile(e: FormEvent) {
    e.preventDefault();

    if (!profile) return;

    try {
      const updatedProfile = await updateProfile({
        name: profile.name,
        delivery_address: profile.delivery_address,
      });

      setProfile(updatedProfile);
      setProfileSaved(true);
    } catch (error) {
      console.error("Profile update error:", error);
      setError("Unable to update your profile.");
    }
  }

  function savePassword(e: FormEvent) {
    e.preventDefault();
    if (!passwordOk) return;
    // TODO: POST /auth/change-password
    setPassword("");
    setCurrent("");
    setPasswordSaved(true);
  }

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getProfile();
        setProfile(data);
      } catch (error) {
        console.error("Profile fetch error:", error);
        setError("Unable to load your profile.");
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  if (loading) {
    return (
      <main
        className="mx-auto max-w-2xl px-4 pb-24 pt-10 sm:px-6"
        aria-label="Loading account"
        aria-busy="true"
      >
        {/* Heading */}
        <div className="h-12 w-64 animate-pulse rounded-lg bg-neutral-200" />

        {/* Avatar and name */}
        <div className="mt-8 flex items-center gap-5">
          <div className="h-16 w-16 animate-pulse rounded-full bg-neutral-200" />
          <div className="space-y-2">
            <div className="h-5 w-36 animate-pulse rounded bg-neutral-200" />
            <div className="h-4 w-24 animate-pulse rounded bg-neutral-100" />
          </div>
        </div>

        {/* Profile form */}
        <section className="mt-12 space-y-6">
          <div className="h-8 w-28 animate-pulse border-b border-neutral-200" />

          {[1, 2, 3].map((item) => (
            <div key={item}>
              <div className="h-5 w-32 animate-pulse rounded bg-neutral-200" />
              <div
                className={`mt-3 animate-pulse rounded-xl bg-neutral-100 ${
                  item === 3 ? "h-24" : "h-12"
                }`}
              />
              <div className="mt-2 h-4 w-48 animate-pulse rounded bg-neutral-100" />
            </div>
          ))}

          <div className="h-12 w-36 animate-pulse rounded-full bg-neutral-200" />
        </section>

        {/* Password form */}
        <section className="mt-14 space-y-6">
          <div className="h-8 w-48 animate-pulse border-b border-neutral-200" />

          {[1, 2].map((item) => (
            <div key={item}>
              <div className="h-5 w-36 animate-pulse rounded bg-neutral-200" />
              <div className="mt-3 h-12 animate-pulse rounded-xl bg-neutral-100" />
            </div>
          ))}

          <div className="h-12 w-40 animate-pulse rounded-full bg-neutral-200" />
        </section>
      </main>
    );
  }

  if (error) return <p>{error}</p>;

  if (!profile) return <p>Profile not found.</p>;

  return (
    <main className="mx-auto max-w-2xl px-4 pb-24 pt-10 sm:px-6">
      <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
        Your account
      </h1>

      <div className="mt-8 flex items-center gap-5">
        <UserAvatar name={profile.name} />
        <div>
          <p className="text-lg font-semibold text-neutral-900"></p>
          <p className="text-neutral-600">{profile.name}</p>
        </div>
      </div>

      {/* Profile */}
      <form onSubmit={saveProfile} className="mt-12 space-y-6">
        <h2 className="border-b border-neutral-200 pb-3 text-xl font-bold text-neutral-900">
          Profile
        </h2>

        <div>
          <label htmlFor="username" className="font-medium text-neutral-900">
            Name
          </label>
          <input
            id="username"
            type="text"
            autoComplete="username"
            value={profile.name ?? ""}
            onChange={(e) => {
              setProfile({ ...profile, name: e.target.value });
              setProfileSaved(false);
            }}
            aria-describedby="name-help"
            className={inputClass}
          />
          <p id="username-help" className="mt-2 text-sm text-neutral-500">
            You use this to log in.
          </p>
        </div>

        <div>
          <label htmlFor="email" className="font-medium text-neutral-900">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={profile.email ?? ""}
            onChange={(e) => {
              setProfile({ ...profile, email: e.target.value });
              setProfileSaved(false);
            }}
            aria-describedby="email-help"
            className={inputClass}
          />
          <p id="email-help" className="mt-2 text-sm text-neutral-500">
            We send order updates here.
          </p>
        </div>

        <div>
          <label htmlFor="address" className="font-medium text-neutral-900">
            Delivery address
          </label>
          <textarea
            id="address"
            rows={3}
            autoComplete="street-address"
            placeholder="House number, street, city, state"
            value={profile.delivery_address ?? ""}
            onChange={(e) => {
              setProfile({ ...profile, delivery_address: e.target.value });
              setProfileSaved(false);
            }}
            className={inputClass}
          />
        </div>

        <div className="flex items-center gap-4">
          <button type="submit" className={buttonClass}>
            Save changes
          </button>
          {profileSaved && (
            <p role="status" className="text-sm font-medium text-neutral-600">
              Changes saved.
            </p>
          )}
        </div>
      </form>

      {/* Password */}
      <form onSubmit={savePassword} className="mt-14 space-y-6">
        <h2 className="border-b border-neutral-200 pb-3 text-xl font-bold text-neutral-900">
          Change password
        </h2>

        <div>
          <label htmlFor="current" className="font-medium text-neutral-900">
            Current password
          </label>
          <input
            id="current"
            type="password"
            autoComplete="current-password"
            value={current}
            onChange={(e) => {
              setCurrent(e.target.value);
              setPasswordSaved(false);
            }}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="new-password"
            className="font-medium text-neutral-900"
          >
            New password
          </label>
          <input
            id="new-password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordSaved(false);
            }}
            aria-describedby="password-rules"
            className={inputClass}
          />
          <ul
            id="password-rules"
            className="mt-3 grid gap-1 text-sm sm:grid-cols-2"
          >
            {passwordRules.map((r) => {
              const ok = r.test(password);
              return (
                <li
                  key={r.label}
                  className={ok ? "text-neutral-900" : "text-neutral-500"}
                >
                  <span aria-hidden="true">{ok ? "✓ " : "○ "}</span>
                  {r.label}
                  <span className="sr-only">
                    {ok ? " (met)" : " (not met)"}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={!current || !passwordOk}
            className={buttonClass}
          >
            Update password
          </button>
          {passwordSaved && (
            <p role="status" className="text-sm font-medium text-neutral-600">
              Password updated.
            </p>
          )}
        </div>
      </form>
    </main>
  );
}
