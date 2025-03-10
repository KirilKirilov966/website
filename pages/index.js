import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";

export default function Home() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-follower");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <Head>
        <title>Kiril Kirilov | DevOps Portfolio</title>
        <meta name="description" content="Follow Kiril Kirilov's DevOps journey and projects." />
      </Head>
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900 via-gray-900 to-black opacity-70"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        />
      </div>
      
      <motion.header 
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-6 px-10 flex justify-between items-center bg-gray-800 shadow-lg border-b border-gray-700 backdrop-blur-md bg-opacity-80 relative z-10"
      >
        <h1 className="text-4xl font-bold text-blue-400">Kiril Kirilov</h1>
        <nav className="flex space-x-6 text-lg">
          <button onClick={() => setCurrentPage("about")} className="hover:text-blue-400 transition duration-300">About</button>
          <button onClick={() => setCurrentPage("projects")} className="hover:text-blue-400 transition duration-300">Projects</button>
          <button onClick={() => setCurrentPage("blog")} className="hover:text-blue-400 transition duration-300">Blog</button>
          <button onClick={() => setCurrentPage("contact")} className="hover:text-blue-400 transition duration-300">Contact</button>
        </nav>
      </motion.header>
      
      <motion.main 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 px-6 relative z-10"
      >
        {currentPage === "home" && (
          <>
            <motion.h2 className="text-6xl font-extrabold text-blue-400" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>My DevOps Journey</motion.h2>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl leading-relaxed">
              Exploring cloud technologies, automation, and scalable infrastructure. Passionate about CI/CD, Kubernetes, and Terraform.
            </p>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Button className="mt-8 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg">
                <Link href="/projects">Explore My Work</Link>
              </Button>
            </motion.div>
          </>
        )}
      </motion.main>
      
      <motion.footer 
        initial={{ y: 100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-6 text-center bg-gray-800 mt-16 border-t border-gray-700 shadow-lg"
      >
        <p className="text-gray-400 text-lg">&copy; 2025 Kiril Kirilov | Sharing My DevOps Journey</p>
      </motion.footer>
    </div>
  );
}
