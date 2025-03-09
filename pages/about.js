import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Head>
        <title>About | Kiril Kirilov</title>
        <meta name="description" content="Learn more about Kiril Kirilov and his DevOps journey." />
      </Head>
      
      <motion.header 
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className="py-6 px-10 flex justify-between items-center bg-gray-800 shadow-lg border-b border-gray-700 backdrop-blur-md bg-opacity-80"
      >
        <h1 className="text-4xl font-bold text-blue-400">Kiril Kirilov</h1>
        <nav className="flex space-x-6 text-lg">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </motion.header>

      <motion.main 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center text-center py-20 px-6"
      >
        <h2 className="text-5xl font-extrabold text-blue-400">About Me</h2>
        <p className="text-lg text-gray-300 mt-6 max-w-3xl leading-relaxed">
        Hi, I’m Kiril Kirilov, a 28-year-old aspiring DevOps Engineer with a passion for automation, cloud technologies, and infrastructure as code.

Currently, I work as a Sales Specialist for Google Maps, where I help businesses leverage location intelligence to enhance their operations. But my true passion lies in DevOps—building, automating, and optimizing infrastructure for seamless software delivery.

💡 Why DevOps?
Over the years, I’ve been fascinated by how automation and cloud computing revolutionize modern software development. My goal is to transition into a Junior DevOps role, where I can apply my skills in:
✅ CI/CD Pipelines – Automating deployments for faster, error-free releases
✅ Infrastructure as Code (IaC) – Managing scalable infrastructure using Terraform & Ansible
✅ Cloud Platforms – Gaining hands-on experience with AWS, GCP, and Kubernetes
✅ Monitoring & Security – Ensuring reliability, performance, and security of cloud environments

📖 My Learning Journey
I’ve been actively learning DevOps through courses, hands-on projects, and certifications. My journey includes:
🚀 KodeKloud & Practical Labs for hands-on Kubernetes & Terraform experience
🚀 Building CI/CD Pipelines using GitHub Actions & Docker
🚀 Deploying Personal Projects on Vercel & Cloud Platforms

🎯 What’s Next?
I’m looking for opportunities where I can grow as a Junior DevOps Engineer, contribute to exciting projects, and continue learning in a collaborative environment.

If you’re looking for a motivated, adaptable, and automation-driven professional, let’s connect!

📩 Feel free to reach out! 🚀
        </p>
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
