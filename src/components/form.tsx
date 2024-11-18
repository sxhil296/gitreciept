"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Form = () => {
  // e.preventDefault();
  const [username, setUsername] = useState("");
  // const response = await fetch(`https://api.github.com/users/${username}`);
  // const data = await response.json();
  // console.log(data);
  return (
    <form className="flex justify-center items-center gap-4 p-4">
      <Input
        type="text"
        placeholder="GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="max-w-[400px]"
      />
      <Button type="submit" className="px-6">
        Submit
      </Button>
    </form>
  );
};

export default Form;
