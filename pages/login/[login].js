import { useState } from "react";
import { useLoginUserMutation, useLoginUserWithGoogleMutation } from "../../queries/generated";
import { useRouter } from "next/router";
const LoginInput = () => {
    const router=useRouter()
  const { mutateAsync, loading } = useLoginUserMutation();
  const {loginMutate}=useLoginUserWithGoogleMutation()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await mutateAsync(formData);
      const token= response?.loginUser.token;
      const userId=response?.loginUser.userId
      if (token && userId) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId",userId)
        router.push("/")
      }
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignInWithGoogle = async () => {
    try {
      // Create the URL for Google OAuth
      const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth" +
        "?client_id=22373809511-mhhg6mh4dviq96s2vra6umd4nkgse1rl.apps.googleusercontent.com" + // Replace with your Google Client ID
        "&redirect_uri=https://dark-zipper-deer.cyclic.cloud/auth/google/callback" + // Replace with your backend redirect URL
        "&response_type=code" +
        "&scope=https://www.googleapis.com/auth/userinfo.email" +
        "&access_type=offline" +
        "&prompt=consent";
  
      // Open a new pop-up window
      const width = 500;
      const height = 600;
      const left = window.screen.width / 2 - width / 2;
      const top = window.screen.height / 2 - height / 2;
      const googleAuthWindow = window.open(
        googleAuthUrl,
        "GoogleAuthWindow",
        `width=${width},height=${height},top=${top},left=${left}`
      );
  
      // Listen for the "message" event from the pop-up window
      window.addEventListener("message", async (event) => {
        // Make sure the message is from the pop-up window and contains the access token
        if (event.source === googleAuthWindow && event.data?.accessToken) {
          const accessToken = event.data.accessToken;
          // Send the access token to your backend for verification and user creation/login
          try {
            const response = await loginMutate(accessToken);
            const token = response?.data?.loginUserWithGoogle?.token;
            const userId = response?.data?.loginUserWithGoogle?.userId;
            if (token && userId) {
              localStorage.setItem("token", token);
              localStorage.setItem("userId", userId);
              router.push("/");
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  // const handleSignInWithGoogle = async () => {
  //   try {
  //     const response = await fetch("https://dark-zipper-deer.cyclic.cloud/auth/google/callback", {
  //       method: "GET",
  //       mode: "cors",
  //       credentials: "include",
  //     });
  //       console.log(response.url,"clg")
  //     if (response.ok) {
  //       // Redirect to the Google Sign-In page
  //       window.location.href = response.url;
  //       console.log(response,"res")
  //     } else {
  //       console.log("Error occurred during Google Sign-In");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div>
          <input
            type="submit"
            disabled={loading}
            className="bg-green-600 px-8 py-2 cursor-pointer"
          />
        </div>
      
      </form>
      <button
          onClick={handleSignInWithGoogle}
          className="bg-blue-600 px-8 py-2 mt-4 cursor-pointer"
        >
          Sign In with Google
        </button>
    </div>
  );
};

export default LoginInput;
