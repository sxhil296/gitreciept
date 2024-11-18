"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Form = async (e:any) => {
  e.preventDefault();
  const [username, setUsername] = useState("");
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  console.log(data);
  return (
    <form className="flex justify-between items-center gap-6 p-4">
      <Input
        type="text"
        placeholder="GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
