import { useState } from "react";
import { useLoginUserMutation } from "../../queries/generated";
import { useRouter } from "next/router";
const LoginInput = () => {
    const router=useRouter()
  const { mutateAsync, loading } = useLoginUserMutation();
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
      // Call the backend server endpoint for Google Sign-In
      const response = await fetch("http://localhost:8080/auth/google/callback", {
        method: "GET",
        mode: "cors",
        credentials: "include",
      });

      if (response.ok) {
        // Redirect to the Google Sign-In page
        window.location.href = response.url;
        console.log(response,"res")
      } else {
        console.log("Error occurred during Google Sign-In");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        <button
          onClick={handleSignInWithGoogle}
          className="bg-blue-600 px-8 py-2 mt-4 cursor-pointer"
        >
          Sign In with Google
        </button>
      </form>
    </div>
  );
};

export default LoginInput;
