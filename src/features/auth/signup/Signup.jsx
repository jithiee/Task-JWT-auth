    import React, { useState } from "react";
    import TextField from "@mui/material/TextField";
    import Checkbox from "@mui/material/Checkbox";
    import { FcGoogle } from "react-icons/fc";
    import { FiEye, FiEyeOff } from "react-icons/fi";

    const Signup = () => {
        const [showPassword, setShowPassword] = useState(false);


    return (
        <div className="min-h-screen flex bg-black text-white">
        <div className="flex-1 bg-[#121212] p-8 md:p-28 flex items-center justify-center">
            <div className="w-full max-w-md">
            {/* Heading */}
            <h2 className="text-2xl font-bold mb-4">Sign up for free</h2>
            <p className="text-sm text-gray-400 mb-8">
                Get started right away, no credit card required!
            </p>

            {/* Signup Form */}
            <form className="space-y-4">
                {/* Name Fields */}
                <div className="grid sm:flex gap-4">
                <TextField
                    name="firstName"
                    label="First name"
                    variant="outlined"
                    fullWidth
                    sx={{
                    "& .MuiOutlinedInput-root fieldset": { borderColor: "#7b7d7f" },
                    "&:hover fieldset": { borderColor: "white" },
                    input: { color: "white" },
                    label: { color: "#7b7d7f" },
                    }}
                />
                <TextField
                    name="lastName"
                    label="Last name"
                    variant="outlined"
                    fullWidth
                    sx={{
                    "& .MuiOutlinedInput-root fieldset": { borderColor: "#7b7d7f" },
                    "&:hover fieldset": { borderColor: "white" },
                    input: { color: "white" },
                    label: { color: "#7b7d7f" },
                    }}
                />
                </div>

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

                {/* Terms */}
                <div className="flex items-start gap-2 text-sm text-gray-300 max-w-xl">
                <Checkbox
                    // defaultChecked
                    sx={{
                    color: "white",
                    "&.Mui-checked": { color: "#18b485" },
                    "& .MuiSvgIcon-root": { fontSize: 22 },
                    }}
                />
                <p className="leading-relaxed">
                    Creating an account means you’re okay with our{" "}
                    <span className="text-violet-500 cursor-pointer hover:underline">
                    Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="text-violet-500 cursor-pointer hover:underline">
                    Privacy Policy
                    </span>
                </p>
                </div>

                {/* Signup Button */}
                <button
                type="submit"
                className="w-full bg-[#18b485] hover:bg-[#13a874] rounded py-2 font-semibold transition"
                >
                Sign up
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

            
    <p className="text-center mt-6 text-gray-400">
                    Already have an account?{" "}
                    <button
                    onClick={() => setIsLogin(true)}
                    className="text-[#18b485] hover:underline"
                    >
                    Sign in
                    </button>
        </p>
            </div>
        </div>
        </div>
    );
    };

    export default Signup;


