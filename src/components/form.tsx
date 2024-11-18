"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Receipt from "./receipt";
import Spinner from "./ui/spinner";

const Form = () => {
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found or an error occurred.");
      }
      const data = await response.json();
      console.log(data);
      setUserData(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col">
      <form className="flex justify-center gap-4 p-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="max-w-[400px] font-bold text-sm"
        />
        <Button type="submit" className="px-6">
          Submit
        </Button>
      </form>

      {loading ? (
        <div className="flex justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="mt-4">
          {error ? (
            <div className="text-red-500 font-medium text-center">{error}</div>
          ) : (
            <Receipt userData={userData} />
          )}
        </div>
      )}
    </div>
  );
};

export default Form;
