"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Form() {
  const router = useRouter();
  const [username, setUsername] = useState<undefined | string>("");
  const [password, setPassword] = useState<undefined | string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      router.push("/feed");
    } else {
      alert("Log In Failed");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 rounded-lg"
    >
      <div className="text-center">
        <h3 className="font-semibold">Sign In</h3>
      </div>
      <div className="my-3">
        <hr />
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            className="text-black p-3 border border-slate-700 rounded-lg"
            type="text"
            value={username}
            id="username"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          className="text-black p-3 border border-slate-700 rounded-lg"
          type="password"
          value={password}
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="mt-4 bg-slate-900 p-3 rounded-lg">
        Sign In
      </button>
    </form>
  );
}

export default Form;
