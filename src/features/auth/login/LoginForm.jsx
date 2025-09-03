import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex bg-black text-white">
      <div className="flex-1 bg-[#121212] p-8 md:p-28 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Heading */}
          <h2 className="text-2xl font-bold mb-4">Sign in</h2>
          <p className="text-sm text-gray-400 mb-8">
           View latest updates and developments CTI
          </p>

          {/* Login Form */}
          <form className="space-y-4">
            {/* Email Field */}
            <TextField
              fullWidth
              name="email"
              label="Email"
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root fieldset": { borderColor: "#7b7d7f" },
                "&:hover fieldset": { borderColor: "white" },
                input: { color: "white" },
                label: { color: "#7b7d7f" },
              }}
            />

            {/* Password Field */}
            <div className="relative mt-4">
              <TextField
                fullWidth
                name="password"
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                sx={{
                  "& .MuiOutlinedInput-root fieldset": { borderColor: "#7b7d7f" },
                  "&:hover fieldset": { borderColor: "white" },
                  input: { color: "white" },
                  label: { color: "#7b7d7f" },
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-5 text-gray-400"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            {/* Forgot Password */}
            <p className="text-sm text-gray-400 text-left cursor-pointer hover:underline">
              Forgot password?
            </p>

            {/* Sign in Button */}
            <button
              type="submit"
              className="w-full bg-[#18b485] hover:bg-[#13a874] rounded py-2 font-semibold transition"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 text-gray-500 mt-4">
            <div className="flex-1 h-px bg-gray-700" />
            <div className="text-xs">or</div>
            <div className="flex-1 h-px bg-gray-700" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full mt-4 flex items-center justify-center gap-3 border border-gray-700 rounded py-2 bg-white text-black font-medium"
          >
            <FcGoogle size={18} />
            Continue with Google
          </button>

          {/* Signup Link */}
          <p className="text-center mt-6 text-gray-400">
            Don’t have an account?{" "}
            <button className="text-[#18b485] hover:underline">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
