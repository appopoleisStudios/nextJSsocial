"use client";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";

function Form() {
  const router = useRouter();
  const [username, setUsername] = useState<undefined | string>("");
  const [password, setPassword] = useState<undefined | string>("");
  const [confirmPassword, setConfirmPassword] = useState<undefined | string>(
    ""
  );
  const [errors, setErrors] = useState<string[]>([]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrors([]);

    if (password != confirmPassword) {
      errors.push("Passwords do not match");
      console.log(errors);
      return;
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      window.location.href = "/signin";
    } else {
      alert("Sign Up Failed");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 p-5 max-w-xs w-full bg-slate-800 rounded-lg"
    >
      <div className="text-center">
        <h3 className="font-semibold">Sign Up</h3>
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
      <div className="flex flex-col gap-2">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          className="text-black p-3 border border-slate-700 rounded-lg"
          type="password"
          value={confirmPassword}
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-slate-900 text-white p-3 rounded-lg"
      >
        Sign Up
      </button>
    </form>
  );
}

export default Form;
