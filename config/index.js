export const API_URL = "https://light-puce-pea-coat.cyclic.app/graphql";

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
