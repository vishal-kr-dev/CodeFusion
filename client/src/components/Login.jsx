import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // Fix initial state
  const [loginError, setLoginError] = useState("");

  // Redirect if already authenticated
  useEffect(() => {
    console.log("The user is authenticated");
    // Add authentication logic here if needed
  }, [navigate]);

  const onSubmit = async (data) => {
    console.log(data); // Now you're properly logging form data

    try {
      const response = await axios.post(
        "http://localhost:5000/user/login",
        data
      );

      if (response.status === 200) {
        navigate(`/room/${data.username}`);
      }
    } catch (error) {
      console.log("Error while sending data", error);
      setLoginError("Invalid username or password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white-100">
      <div className="w-full max-w-md bg-white p-8">
        <h2 className="text-3xl font-extrabold mb-6 text-center">
          Sign in to your account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              type="text"
              {...register("username", {
                required: "Username is required",
                pattern: {
                  // value: /^[a-z0-9]+$/,
                  message: "Invalid Username",
                },
              })}
              className="w-full px-3 py-2 border border-gray-300 focus:outline-none"
              placeholder="Username"
            />
            {errors.username && (
              <p className="text-xs text-red-600">{errors.username.message}</p>
            )}
          </div>

          <div className="space-y-1">
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                })}
                className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-20"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-red-600">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                {...register("rememberMe")}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            {loginError && (
              <h3 className="text-l font-bold mb-6 text-center text-red-600">
                {loginError}
              </h3>
            )}
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              {isSubmitting ? "Loading" : "Submit"}
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
