import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState(""); // State for user's name
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpSentDisabled, setOtpSentDisabled] = useState(false);
  const [otpVerifyDisabled, setOtpVerifyDisabled] = useState(false);
  // const [otpResentEnabled, setOtpResentEnabled] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  useEffect(() => {
    if (remainingTime > 0) {
      const countdown = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [remainingTime]);

  const handleSendOtp = async () => {
    setOtpSentDisabled(true);
    if (phoneNumber.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/users/isPhoneRegistered", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: `+91${phoneNumber}` }), // Use 'phone' here to match your backend
      });

      const data = await response.json();

      if (response.ok) {
        if (isRegistering) {
          if (data.result.isRegistered) {
            alert("This phone number is already registered.");
            setOtpSentDisabled(false);

            return;
          } else if (name.trim() === "") {
            alert("Please enter your name to register.");
            setOtpSentDisabled(false);

            return;
          } else {
            // Send OTP for registration
            await sendOtp({ phone: phoneNumber, isRegistered: false, name: name });
          }
        } else {
          if (!data.result.isRegistered) {
            alert("Please register first.");
            setOtpSentDisabled(false);
            return;
          } else {
            // Send OTP for login
            await sendOtp({ phone: phoneNumber, isRegistered: true });
          }
        }
      } else {
        alert(data.error || "Failed to verify phone number. Please try again.");
        setOtpSentDisabled(false);
      }
    } catch (error) {
      console.error("Error verifying phone number:", error);
      alert("An error occurred. Please try again later.");
      setOtpSentDisabled(false);
    }
  };


  // Function to send OTP
  const sendOtp = async (otpPayload: {
    phone: string;
    isRegistered: boolean;
    name?: string;
  }) => {
    try {
      // Ensure phone number is in E.164 format
      const formattedPhone = `+91${phoneNumber}`;

      const response = await fetch("http://localhost:5000/users/sendOtp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...otpPayload, phone: formattedPhone }),
      });

      const data = await response.json();

      if (response.ok) {
        setOtpSent(true);
        setRemainingTime(30);
        const timeout = setTimeout(() => {
          setOtpVerifyDisabled(false);
          setRemainingTime(0);
        }, 30000);
        setTimer(timeout as NodeJS.Timeout);
        alert("OTP sent successfully.");
      } else {
        alert(data.error || "Failed to send OTP. Please try again.");
        setOtpSentDisabled(false);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred while sending OTP. Please try again later.");
      setOtpSentDisabled(false);
    }
  };




  // const handleOtpVerification = () => {
  //   if (otp === "123456") {
  //     setOtpVerified(true);
  //     if (isRegistering) {
  //       setIsVerifyingEmail(true);
  //     } else {
  //       navigate("/dashboard");
  //     }
  //   } else {
  //     alert("Invalid OTP. Please try again.");
  //   }
  // };

  const handleOtpVerification = async () => {
    try {
      setOtpVerifyDisabled(true);
      alert("OTP verification triggered: " + otp);
      // alert("type of OTP : " + typeof otp);
      const formattedPhone = `+91${phoneNumber}`;

      const response = await fetch("http://localhost:5000/users/verifyOTP", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: formattedPhone,
          code: otp, // Assuming otp is available in the component state
          name: isRegistering ? name : undefined, // Pass name only if registering
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store the token in localStorage
        localStorage.setItem('authToken', data.result.token);

        setOtpVerified(true);

        if (isRegistering) {
          if (data.result.isEmailVerified) {
            navigate("/dashboard"); // If email is already verified, navigate to dashboard
          } else {
            setIsVerifyingEmail(true); // Proceed to email verification
          }
        } else {
          navigate("/dashboard"); // If logging in, navigate to dashboard
        }
      } else {
        alert(data.message || "OTP verification failed. Please try again.");
        setOtpVerifyDisabled(false);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("An error occurred while verifying OTP. Please try again later.");
      setOtpVerifyDisabled(false);
    }
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
    if (numericValue.length <= 10) {
      setPhoneNumber(numericValue); // Set only the first 10 digits
    }
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
    if (numericValue.length <= 6) {
      setOtp(numericValue); // Set only the first 6 digits
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleResendOtp = () => {
    handleSendOtp();
    setOtp("");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleEmailVerification = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      alert("Please enter an email address.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Display the alert that email verification is triggered
    alert("Email verification triggered: " + email);
    localStorage.setItem('userEmail', email);
    try {
      const token = localStorage.getItem('authToken');

      // Call the API to send the verification email
      const response = await fetch('http://localhost:5000/users/sendVerificationEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Send the token in the Authorization header
        },
        body: JSON.stringify({ email })
      });


      const data = await response.json();

      if (response.ok) {
        // Email sent successfully, now verify the email
        alert("Verification mail sent successfully. Please check your email.");
        navigate('/login/email-verification-pending');

      } else {
        // Email sending failed, alert the user
        alert("Failed to send verification email: " + data.message);
      }
    } catch (error) {
      console.error("Error in email verification flow:", error);
      alert("An error occurred during email verification. Please try again.");
    }
  };



  const handleSkipEmailVerification = () => {
    navigate("/dashboard");
  };



  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-2/5 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Illustration of a person working on a laptop or firstbench logo"
        />
      </div>
      <div className="md:w-2/5 max-w-sm flex flex-col justify-center bg-white p-6 rounded-lg shadow-lg space-y-4 lg:h-[450px]">
        {/* Logo and welcome text */}
        <div className="text-center mb-4">
          <img
            src="/firstbench%20Logo%20v1%20copy.svg"
            alt="Firstbench.ai"
            className="h-12 mx-auto mb-2"
          />
          <h2 className="text-2xl font-semibold text-slate-700">
            {(() => {
              if (otpSent && !otpVerified) {
                return "Enter the OTP";
              } else if (isVerifyingEmail) {
                return "Enter your email";
              } else if (isRegistering) {
                return "Register";
              } else {
                return "Enter your phone number";
              }
            })()}
          </h2>

          <p className="text-gray-500">
            {(() => {
              if (otpSent && !otpVerified) {
                return "Please enter the 6-digit OTP sent to your phone number";
              } else if (isVerifyingEmail) {
                return "You'll receive a verification link on your email";
              } else if (isRegistering) {
                return "Please provide your name and phone number";
              } else {
                return "You'll receive an OTP for verification";
              }
            })()}
          </p>

        </div>
        {otpSent && !otpVerified ? (
          <>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={handleOtpChange}
              maxLength={6} // Max length of 6 digits
            />
            <button
              onClick={handleOtpVerification}
              className={`w-full px-4 py-2 text-sm rounded ${(otp.length < 6)|| otpVerifyDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
              disabled={(otp.length < 6)|| otpVerifyDisabled}
            >
              {otpVerifyDisabled ? `Loading...` : "Verify OTP"}
            </button>
            <div className="mt-4 text-center">
              <button
                onClick={handleResendOtp}
                className={`text-blue-600 hover:underline ${remainingTime > 0 ? "cursor-not-allowed text-gray-400" : ""
                  }`}
                disabled={remainingTime > 0}
              >
                {remainingTime > 0
                  ? `Resend OTP in ${remainingTime}s`
                  : "Resend OTP"}
              </button>
            </div>
          </>
        ) : isVerifyingEmail ? (
          <>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <div className="space-y-2">
              <button
                onClick={handleEmailVerification}
                className="w-full px-4 py-2 text-sm rounded bg-blue-600 hover:bg-blue-700 text-white"
              >
                Verify Email
              </button>
              <button
                onClick={handleSkipEmailVerification}
                className="w-full px-4 py-2 text-sm rounded bg-gray-400 hover:bg-gray-500 text-white"
              >
                Skip for Now
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  className="text-sm w-16 px-4 py-2 border border-solid border-gray-300 rounded-l"
                  type="text"
                  value="+91"
                  readOnly
                />
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded-r"
                  type="text"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={handleInputChange}
                  onInput={(e) => e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "")} // Allow only numbers
                  maxLength={10} // Max length of 10 digits
                />
              </div>
              {isRegistering && (
                <input
                  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={handleNameChange}
                />
              )}
              <button
                onClick={handleSendOtp}
                className={`w-full px-4 py-2 text-sm rounded ${(phoneNumber.length < 10 || (isRegistering && name.trim() === "") || otpSent || otpSentDisabled)
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
                  } text-white`}
                disabled={phoneNumber.length < 10 || (isRegistering && name.trim() === "") || otpSentDisabled}
              >
                {otpSentDisabled ? `Loading...` : "Get OTP"}
              </button>
            </div>
          </>
        )}

        {(otpSent && !otpVerified) || isVerifyingEmail ? (
          <>
          </>
        ) : (
          <>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-600 text-sm">
                Get targets and progress reports on WhatsApp
              </label>
            </div>

            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
              {isRegistering ? (
                <>
                  Already registered?{" "}
                  <span
                    className="text-blue-600 hover:underline hover:underline-offset-4 cursor-pointer"
                    onClick={() => setIsRegistering(false)} // Set registering state to false
                  >
                    Login
                  </span>
                </>
              ) : (
                <>
                  Don&apos;t have an account?{" "}
                  <span
                    className="text-blue-600 hover:underline hover:underline-offset-4 cursor-pointer"
                    onClick={() => setIsRegistering(true)} // Set registering state to true
                  >
                    Register
                  </span>
                </>
              )}
            </div>
          </>)
        }

        <div className="mt-4 text-center">
          <a href="/contact" className="text-blue-600 hover:underline">
            Need help? Contact us
          </a>
        </div>

        <div className="mt-2 text-center text-xs text-gray-400">
          By continuing, you agree to our <a href="/terms" className="text-blue-600 hover:underline">Terms & Privacy Policy</a>.
        </div>
      </div >
    </section >

  );
};

export default LoginComponent;
