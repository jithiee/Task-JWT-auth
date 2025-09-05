import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../authSlice";
import { useNavigate } from "react-router-dom";
import PortalNotification from "../../../Portal/PortalNotification";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [notification, setNotification] = useState(null);

  // Show error notification when redux error updates
  useEffect(() => {
    if (error) {
      setNotification({
        message: error?.message || "Login failed!",
        type: "error",
      });
    }
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setNotification({ message: "Email and password required", type: "error" });
      return;
    }

 
  dispatch(loginUser(formData))
    .unwrap()
    .then(() => {
      setNotification({ message: "Login successful!", type: "success" });
      setTimeout(() => navigate("/userdashboard"), 1000);
    })
    .catch((err) => {
      // If login fails
      setNotification({
        message:  "Invalid email or password!" || err?.message,
        type: "error",
      });
    });
};

  return (
    <div className="min-h-screen flex bg-black text-white">
      <div className="flex-1 bg-[#121212] p-8 md:p-28 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Header */}
          <h2 className="text-2xl font-bold mb-4">Sign in</h2>
          <p className="text-sm text-gray-400 mb-8">
            View latest updates and developments CTI
          </p>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              sx={{
                "& .MuiOutlinedInput-root fieldset": { borderColor: "#7b7d7f" },
                "&:hover fieldset": { borderColor: "white" },
                input: { color: "white" },
                label: { color: "#7b7d7f" },
              }}
            />

            <div className="relative mt-4">
              <TextField
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                sx={{
                  "& .MuiOutlinedInput-root fieldset": { borderColor: "#7b7d7f" },
                  "&:hover fieldset": { borderColor: "white" },
                  input: { color: "white" },
                  label: { color: "#7b7d7f" },
                }}
              />
              <button
                type="button"
                className="absolute right-4 top-5 text-gray-400"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <p className="text-sm text-[#18b485] text-left cursor-pointer hover:underline">
              Forgot password?
            </p>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#18b485] hover:bg-[#13a874] rounded py-2 font-semibold transition"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 text-gray-500 mt-4">
            <div className="flex-1 h-px bg-gray-700" />
            <div className="text-xs">or</div>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          {/* Google Sign-in */}
          <button
            type="button"
            className="w-full mt-4 flex items-center justify-center gap-3 border border-gray-700 rounded py-2 bg-white text-black font-medium"
          >
            <FcGoogle size={18} /> Continue with Google
          </button>

          {/* Signup link */}
          <p className="text-center mt-6 text-gray-400">
            Don’t have an account?{" "}
            <button
              className="text-[#18b485] hover:underline cursor-pointer"
              onClick={() => navigate("/")}
            >
              Sign up
            </button>
          </p>

          {/* Notification */}
          <PortalNotification
            message={notification?.message}
            type={notification?.type}
            onClose={() => setNotification(null)}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

