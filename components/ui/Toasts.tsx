"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToastStore } from "@/hooks/useToast";
import { IconCircleCheck, IconCircleX, IconInfoCircle, IconX } from "@tabler/icons-react";

export default function Toasts() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`
              pointer-events-auto flex items-center gap-3 px-5 py-4 min-w-[280px] max-w-sm 
              bg-[#0A0A0A] border rounded-lg shadow-2xl relative overflow-hidden group
              ${toast.type === "success" ? "border-yellow-500/30" : "border-zinc-800"}
            `}
          >
            {/* Type Indicator Bar */}
            <div className={`
              absolute left-0 top-0 bottom-0 w-1
              ${toast.type === "success" ? "bg-yellow-500" : "bg-zinc-500"}
            `} />

            {/* Icon */}
            <div className={`${toast.type === "success" ? "text-yellow-500" : "text-zinc-400"}`}>
              {toast.type === "success" && <IconCircleCheck size={20} />}
              {toast.type === "error" && <IconCircleX size={20} />}
              {toast.type === "info" && <IconInfoCircle size={20} />}
            </div>

            {/* Message */}
            <p className="text-white/90 text-sm font-medium pr-4">
              {toast.message}
            </p>

            {/* Close Button */}
            <button
              onClick={() => removeToast(toast.id)}
              className="ml-auto text-white/30 hover:text-white transition-colors p-1"
            >
              <IconX size={16} />
            </button>

            {/* Progress bar background animation */}
            <motion.div 
               initial={{ x: "-100%" }}
               animate={{ x: "0%" }}
               transition={{ duration: 3, ease: "linear" }}
               className="absolute bottom-0 left-0 right-0 h-[2px] bg-yellow-500/20"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
