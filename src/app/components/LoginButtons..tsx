"use client";

import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

export default function LoginButtons() {
  return (
    <main>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-lg mt-2 hover:bg-blue-700 transition duration-300"
        onClick={() => signIn("google")}
      >
        Fazer login com o Google
      </motion.button>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="flex items-center justify-center w-full bg-gray-800 text-white py-3 rounded-lg mt-2 hover:bg-gray-700 transition duration-300"
        onClick={() => signIn("github")}
      >
        Fazer login com o GitHub
      </motion.button>
    </main>
  );
}
