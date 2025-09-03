import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const PortalNotification = ({
  message,
  type = "success",
  onClose,
  duration = 3000,
}) => {
  if (!message) return null;

  const bgColor = type === "success" ? "bg-green-900" : "bg-red-900";
  const textColor = type === "success" ? "text-green-200" : "text-red-200";

  // Auto close after duration
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  return createPortal(
    <div
      className={`fixed top-5 right-4 md:right-10 z-50 ${bgColor} ${textColor} p-3 rounded shadow-md text-lg`}
      role="alert"
    >
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
          className="ml-3 font-bold hover:text-white transition"
          onClick={onClose}
          aria-label="Close notification"
        >
          ×
        </button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default PortalNotification;
