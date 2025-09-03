import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../authSlice";
import { useNavigate } from "react-router-dom";
import PortalNotification from "../../../Portal/PortalNotification";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState({ message: "", type: "" });

    // Show error notification when redux error updates
    useEffect(() => {
        if (error) {
            setNotification({ message: error.message || "Signup failed!", type: "error" });
            setTimeout(() => setNotification({ message: "", type: "" }), 4000);
        }
    }, [error]);

    const validate = () => {
        const tempErrors = {};
        if (!formData.firstName) tempErrors.firstName = "First name is required";
        if (!formData.lastName) tempErrors.lastName = "Last name is required";
        if (!formData.email) tempErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_~!@#$%^&*`+=|;:><,.?/]).{8,}$/;
        if (!formData.password) tempErrors.password = "Password is required";
        else if (!passwordRegex.test(formData.password))
            tempErrors.password =
                "Password must be 8+ chars with 1 uppercase, 1 lowercase, 1 number, 1 special char";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        dispatch(signupUser(formData))
            .unwrap()
            .then(() => {
                setNotification({ message: "Signup successful! Please login.", type: "success" });
                setTimeout(() => {
                    setNotification({ message: "", type: "" });
                    navigate("/login");
                }, 2000);
            })
            .catch(() => { });
        // errors handled by useEffect
    };

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div className="min-h-screen flex bg-black text-white">
            <div className="flex-1 bg-[#121212] p-8 md:p-28 flex items-center justify-center">
                <div className="w-full max-w-md">

                    {/* Header */}
                    <h2 className="text-2xl font-bold mb-4">Sign up for free</h2>
                    <p className="text-sm text-gray-400 mb-4">
                        Get started right away, no credit card required!
                    </p>

                    {/* Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid sm:flex gap-4">
                            <TextField
                                name="firstName"
                                label="First name"
                                variant="outlined"
                                fullWidth
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                error={!!errors.firstName}
                                helperText={errors.firstName}
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
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                error={!!errors.lastName}
                                helperText={errors.lastName}
                                sx={{
                                    "& .MuiOutlinedInput-root fieldset": { borderColor: "#7b7d7f" },
                                    "&:hover fieldset": { borderColor: "white" },
                                    input: { color: "white" },
                                    label: { color: "#7b7d7f" },
                                }}
                            />
                        </div>

                        <TextField
                            name="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            error={!!errors.email}
                            helperText={errors.email}
                            sx={{
                                "& .MuiOutlinedInput-root fieldset": { borderColor: "#7b7d7f" },
                                "&:hover fieldset": { borderColor: "white" },
                                input: { color: "white" },
                                label: { color: "#7b7d7f" },
                            }}
                        />

                        <div className="relative mt-4">
                            <TextField
                                name="password"
                                label="Password"
                                variant="outlined"
                                fullWidth
                                type={showPassword ? "text" : "password"}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                error={!!errors.password}
                                helperText={errors.password}
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

                       <div className="flex items-start space-x-2 text-gray-200 text-sm ml-[-10px]">
                            <Checkbox
                                sx={{
                                color: "#7b7d7f", 
                                "&.Mui-checked": {
                                    color: "#18b485", 
                                },
                                }}
                            />
                            <span>
                                Creating an account means you’re okay with our{" "}
                                <Link to="/" className="text-blue-400 hover:underline">
                                Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link to="/" className="text-blue-400 hover:underline">
                                Privacy Policy
                                </Link>
                            </span>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#18b485] hover:bg-[#13a874] rounded py-2 font-semibold transition"
                        >
                            {loading ? "Signing up..." : "Sign up"}
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


                    {/* Login link */}
                    <p className="text-center mt-6 text-gray-400">
                        Already have an account?{" "}
                        <button
                            onClick={() => navigate("/login")}
                            className="text-[#18b485] hover:underline cursor-pointer"
                        >
                            Sign in
                        </button>
                    </p>

                    {/* Notification portal */}
                    <PortalNotification
                        message={notification.message}
                        type={notification.type}
                        onClose={() => setNotification({ message: "", type: "" })}
                    />
                </div>
            </div>
        </div>
    );
};

export default Signup;
