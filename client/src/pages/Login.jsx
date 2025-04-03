import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login, reset } from "../redux/authSlice";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess || user) {
      navigate("/dashboard");
    }

    return () => {
      dispatch(reset());
    };
  }, [user, isSuccess, navigate, dispatch]);

  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values) => {
    dispatch(login(values));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-900 p-8 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-center text-2xl font-bold text-teal-300 mb-6">
            SIGN IN
          </h2>

          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 rounded-full bg-gray-700 flex items-center justify-center border-2 border-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-16 w-16 text-gray-500"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </div>
        </div>

        {isError && (
          <div
            className="bg-red-900 border border-red-700 text-red-100 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="block sm:inline">{message}</span>
          </div>
        )}

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="mt-6 space-y-6">
            <div className="space-y-4">
              <div>
                <div className="flex items-center bg-gray-700 rounded-md px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a1 1 0 01-1.44.8 6 6 0 01-2.317-5.043zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className="bg-transparent w-full text-gray-200 focus:outline-none placeholder-gray-400"
                    placeholder="Email address"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-400 text-xs mt-1"
                />
              </div>

              <div>
                <div className="flex items-center bg-gray-700 rounded-md px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    className="bg-transparent w-full text-gray-200 focus:outline-none placeholder-gray-400"
                    placeholder="Password"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-400 text-xs mt-1"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Field
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  className="h-4 w-4 text-teal-400 border-gray-500 rounded focus:ring-teal-400"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-teal-300"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="text-teal-300 hover:text-teal-200"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-teal-300 hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                {isLoading ? "Signing in..." : "LOGIN"}
              </button>
            </div>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-teal-300 hover:text-teal-200"
                >
                  Register
                </Link>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
