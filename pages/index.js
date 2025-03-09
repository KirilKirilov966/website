import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Head>
        <title>Kiril Kirilov | DevOps Portfolio</title>
        <meta name="description" content="Follow Kiril Kirilov's DevOps journey and projects." />
      </Head>

      {/* Modern Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900 via-gray-900 to-black opacity-70"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-3xl"
          animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 right-10 w-48 h-48 bg-purple-500 rounded-full opacity-30 blur-3xl"
          animate={{ x: [0, -40, 40, 0], y: [0, -20, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <motion.main 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center justify-center text-center py-20 px-6 z-10"
      >
        <motion.h2 className="text-6xl font-extrabold text-blue-400" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }}>My DevOps Journey</motion.h2>
        <p className="text-xl text-gray-300 mt-6 max-w-2xl leading-relaxed">
          Exploring cloud technologies, automation, and scalable infrastructure. Passionate about CI/CD, Kubernetes, and Terraform.
        </p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button className="mt-8 bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg">
            <Link href="/projects">Explore My Work</Link>
          </Button>
        </motion.div>
      </motion.main>
      
      <section className="relative py-20 px-10 bg-gray-800 rounded-xl shadow-lg mx-10 overflow-hidden">
        <motion.div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-10 blur-3xl" animate={{ scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 6 }}></motion.div>
        <h3 className="text-4xl font-bold text-center text-blue-400 relative z-10">Featured Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 relative z-10">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <h4 className="text-2xl font-semibold text-blue-300">CI/CD Pipeline Implementation</h4>
                <p className="text-gray-400 mt-3">Built an automated deployment pipeline using Jenkins, Docker, and Kubernetes.</p>
                <Button className="mt-5 bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600">
                  <Link href="https://github.com/KirilKirilov966/ci-cd-web-app">View Project</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card>
              <CardContent className="p-6 bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <h4 className="text-2xl font-semibold text-blue-300">Infrastructure as Code (IaC)</h4>
                <p className="text-gray-400 mt-3">Designed cloud infrastructure using Terraform and Ansible for automated provisioning.</p>
                <Button className="mt-5 bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600">
                  <Link href="https://github.com/KirilKirilov966">View Project</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
