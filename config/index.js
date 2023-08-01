export const API_URL = "https://dark-zipper-deer.cyclic.cloud";

export const fetchParams = () => {
  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token") || "";
  }

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
};
