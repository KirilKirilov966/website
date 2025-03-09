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
          Hi, I’m <span className="text-blue-400 font-semibold">Kiril Kirilov</span>, a <span className="font-semibold">28-year-old aspiring DevOps Engineer</span> with a passion for automation, cloud technologies, and infrastructure as code.
        </p>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed">
          Currently, I work as a <span className="font-semibold">Sales Specialist for Google Maps</span>, where I help businesses leverage location intelligence to enhance their operations. But my true passion lies in <span className="font-semibold">DevOps</span>—building, automating, and optimizing infrastructure for seamless software delivery.
        </p>
        <h3 className="text-3xl font-bold text-blue-400 mt-10">💡 Why DevOps?</h3>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed">
          Over the years, I’ve been fascinated by how <span className="font-semibold">automation and cloud computing</span> revolutionize modern software development. My goal is to transition into a <span className="font-semibold">Junior DevOps role</span>, where I can apply my skills in:
        </p>
        <ul className="text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed text-left">
          <li>✅ <span className="font-semibold">CI/CD Pipelines</span> – Automating deployments for faster, error-free releases</li>
          <li>✅ <span className="font-semibold">Infrastructure as Code (IaC)</span> – Managing scalable infrastructure using Terraform & Ansible</li>
          <li>✅ <span className="font-semibold">Cloud Platforms</span> – Gaining hands-on experience with AWS, GCP, and Kubernetes</li>
          <li>✅ <span className="font-semibold">Monitoring & Security</span> – Ensuring reliability, performance, and security of cloud environments</li>
        </ul>
        <h3 className="text-3xl font-bold text-blue-400 mt-10">📖 My Learning Journey</h3>
        <ul className="text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed text-left">
          <li>🚀 <span className="font-semibold">KodeKloud & Practical Labs</span> for hands-on Kubernetes & Terraform experience</li>
          <li>🚀 <span className="font-semibold">Building CI/CD Pipelines</span> using GitHub Actions & Docker</li>
          <li>🚀 <span className="font-semibold">Deploying Personal Projects</span> on Vercel & Cloud Platforms</li>
        </ul>
        <h3 className="text-3xl font-bold text-blue-400 mt-10">🎯 What’s Next?</h3>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed">
          I’m looking for opportunities where I can <span className="font-semibold">grow as a Junior DevOps Engineer</span>, contribute to exciting projects, and continue learning in a collaborative environment.
        </p>
        <p className="text-lg text-gray-300 mt-4 max-w-3xl leading-relaxed">
          If you’re looking for a <span className="font-semibold">motivated, adaptable, and automation-driven professional</span>, let’s connect!
        </p>
        <p className="text-lg text-gray-300 mt-6 font-semibold">📩 Feel free to reach out! 🚀</p>
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
