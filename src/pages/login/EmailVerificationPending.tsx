import React from "react";
import { useNavigate } from "react-router-dom";

const EmailVerificationPending = () => {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex flex-col justify-center items-center my-2 mx-5 md:mx-0 md:my-0 bg-gray-100">
      <div className="md:w-2/5 max-w-sm bg-white p-6 rounded-lg shadow-lg space-y-4">
        <div className="text-center mb-4">
          <img
            src="/firstbench%20Logo%20v1%20copy.svg"
            alt="Firstbench.ai"
            className="h-12 mx-auto mb-2"
          />
          <h2 className="text-2xl font-semibold text-slate-700">
            Email Verification Pending
          </h2>
          <p className="text-gray-500">
            Please check your email and click on the verification link to complete the registration process.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate("/login")}
            className="w-full px-4 py-2 text-sm rounded bg-blue-600 hover:bg-blue-700 text-white"
          >
            Back to Login
          </button>
        </div>

        <div className="mt-4 text-center">
          <a href="/contact" className="text-blue-600 hover:underline">
            Need help? Contact us
          </a>
        </div>

        <div className="mt-2 text-center text-xs text-gray-400">
          By continuing, you agree to our <a href="/terms" className="text-blue-600 hover:underline">Terms & Privacy Policy</a>.
        </div>
      </div>
    </section>
  );
};

export default EmailVerificationPending;
