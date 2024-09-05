import React, { useState, useEffect } from "react";

const SignupComponent = () => {
  const [otpSent, setOtpSent] = useState(false); // Tracks if OTP has been sent
  const [remainingTime, setRemainingTime] = useState(0); // Time remaining for OTP resend
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null); // Timer ID for useEffect cleanup

  useEffect(() => {
    // Cleanup timer on component unmount
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  useEffect(() => {
    if (remainingTime > 0) {
      // Update the countdown every second
      const countdown = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
      // Cleanup countdown interval on component unmount or when time is up
      return () => clearInterval(countdown);
    }
  }, [remainingTime]);

  const handleSendOtp = () => {
    setOtpSent(true);
    setRemainingTime(30); // Set the countdown to 30 seconds

    // Start a 30-second timer to reset OTP state
    const timeout = setTimeout(() => {
      setOtpSent(false);
      setRemainingTime(0); // Reset remaining time when OTP can be sent again
    }, 30000);
    setTimer(timeout as NodeJS.Timeout); // Type assertion to NodeJS.Timeout
  };

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Illustration of a person working on a laptop or Firstbench logo"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        {/* Welcome Text */}
        <h2 className="text-2xl font-semibold mb-6 text-center text-slate-700">
          Welcome to Firstbench.ai!
        </h2>

        {/* Social Login Buttons */}
        {/* Google Login Button */}
        <div className="text-center">
          <button
            type="button"
            className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 w-full justify-center items-center"
          >
            <img
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
            />
            <span>Sign Up with Google</span>
          </button>
        </div>

        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>
        <div className="space-y-4">
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address or Phone Number"
          />
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="OTP"
          />
          <button
            onClick={handleSendOtp}
            className={`w-full px-4 py-2 text-sm rounded ${otpSent ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
            disabled={otpSent}
          >
            {otpSent ? `OTP Sent. Resend in ${remainingTime}s` : 'Send OTP'}
          </button>
        </div>

        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          
        </div>

        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white rounded text-sm tracking-wider w-full"
            type="submit"
          >
            Sign Up
          </button>
        </div>

        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="/login"
          >
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default SignupComponent;
