
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import google from "../../../public/google.png";
import apple from "../../../public/Apple.png";
import Hero from "./Hero";

export default function SignUpPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Signup successful!", { username, password });
    // Backend API integration logic goes here
  };

  return (
    <>
     <Hero/>
    <div className="/signup" >
      <div className="min-h-screen bg-black flex items-center justify-center">
        <section className="container mx-auto max-w-md text-white bg-black shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Sign Up</h3>
          <form onSubmit={handleSignup} className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-2 font-medium">Name</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 font-medium">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block mb-2 font-medium">Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign Up
            </button>
            <p className="text-center mt-4">
              Already have an account?{" "}
              <Link href="/login" className="text-yellow-500">
                Login
              </Link>
            </p>
          </form>
          <div className="text-center mt-8">
            <p>or</p>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src={google} alt="Google" className="w-[20px] h-[20px] left-[16px] mr-2" />
              Sign up with Google
            </button>
            <button className="w-full bg-gray-100 border text-black py-2 rounded mt-2 flex items-center justify-center">
              <Image src={apple} alt="Apple" className="w-[24px] h-[24px] left-[16px] mr-2" />
              Sign up with Apple
            </button>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
