import { useState } from "react";
import { useSignUpUserMutation } from "../../queries/generated";
import { useRouter } from "next/router";
const Input = () => {
    const router = useRouter();
    const handlerRouteChange=()=>{
        router.push("/login/$[id]")
    }
  const { mutateAsync, loading } = useSignUpUserMutation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    console.log(formData, "formdata");

    e.preventDefault();
    await mutateAsync(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label className="block mb-2">First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

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

        <label className="block mb-2">Role</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex items-center">
          <input
            type="submit"
            disabled={loading}
            className="bg-green-600 px-8 py-2 cursor-pointer"
          />
          <p className="ml-8">if already account?</p>
          <p onClick={handlerRouteChange}  className="text-blue-600 cursor-pointer">Login</p>
        </div>
      </form>
    </div>
  );
};

export default Input;
