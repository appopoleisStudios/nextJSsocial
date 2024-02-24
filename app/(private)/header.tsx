"use client";
import useSWR from "swr";

export default function Header() {
  const { data, error, isLoading } = useSWR("/api/users/profile");

  if (error) return <div>Failed to Load</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return <div>{data.data.username}</div>;
}
