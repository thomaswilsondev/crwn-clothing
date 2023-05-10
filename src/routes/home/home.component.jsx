import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
const categories = [
  {
    id: 1,
    title: "Jackets",
    imageUrl:
      "https://images.unsplash.com/photo-1580051215498-3e2b858651b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
  },
  {
    id: 2,
    title: "Mens",
    imageUrl:
      "https://images.unsplash.com/photo-1612600051982-3a3dcf76524d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 3,
    title: "Womens",
    imageUrl:
      "https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 4,
    title: "Sneakers",
    imageUrl:
      "https://images.unsplash.com/photo-1618677831708-0e7fda3148b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 5,
    title: "Hats",
    imageUrl:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];
const Home = () => {
  return (
    <>
      <Outlet />
      <Directory categories={categories} />
    </>
  );
};
export default Home;
