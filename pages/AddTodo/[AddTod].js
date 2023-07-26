import { useEffect, useState } from "react";
import { useCreateTodoMutation } from "../../queries/generated";
const AddTodo = () => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    var localToken = localStorage.getItem("token");
    if (localToken !== null || localToken !== undefined) {
      setToken(localToken);
    }
  }, []);

  useEffect(() => {
    var localUserId = localStorage.getItem("userId");
    if (localUserId !== null || localUserId !== undefined) {
      setUserId(localUserId);
    }
  }, []);


  const { mutateAsync, isLoading } = useCreateTodoMutation()
  const [todo, setTodo] = useState({
    title: '',
    price: '',
    description: '',
    image: null
  });
 

  const handleChange = (e) => {
    setTodo((prevTodo) => ({
      ...prevTodo,
      [e.target.name]: e.target.value,
    }));
    console.log(todo, "dddd")
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setTodo((prevTodo) => ({
        ...prevTodo,
        image: file, // Store the File object directly
      }));
    }
  };
  
  
  // ... other functions ...
  const handleSubmitTodo = async (e) => {
    e.preventDefault();
    console.log(token, "check");
    try {
      if (!token) {
        throw new Error("User is not logged in");
      }
  
      const newTodo = {
        title: todo.title,
        price: todo.price,
        description: todo.description,
      };
  
      if (todo.image) {
        const base64Image = await convertImageToBase64(todo.image);
        newTodo.image = base64Image;
      }
  
      await mutateAsync({ addElement: newTodo });
  
      setTodo({
        title: "",
        price: "",
        description: "",
        image: null, 
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  // Function to convert image file to base64 string
  const convertImageToBase64 = (imageFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
  
      reader.onerror = (error) => reject(error);
  
      reader.readAsDataURL(imageFile);
    });
  };

  

  return (
    <div>
      <form onSubmit={handleSubmitTodo}>
        <label className="block mb-2">Title</label>
        <input
          type="text"
          name="title"
          required
          value={todo.title}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2">Price</label>
        <input
          type="number"
          name="price"
          required
          value={todo.price}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="block mb-2">description</label>
        <input
          type="text"
          name="description"
          required
          value={todo.description}
          onChange={handleChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <label className="block mb-2">Image</label>
        <input
          type="file"
          name="image"
          required
          onChange={handleImageChange}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div>
          <input
            type="submit"
            disabled={isLoading}
            className="bg-green-600 px-8 py-2 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};
export default AddTodo;




