import { useNavigate } from "react-router-dom";

const Button = ({ children, routeLinks, routeLinksForBetterPlace }) => {
  const navigate = useNavigate();
  function handleClick(route) {
    navigate(
      `${!routeLinksForBetterPlace ? `All-vehicle-category/${route}` : `/${routeLinksForBetterPlace}`}`
    );
  }
  return (
    <button
      onClick={() => handleClick(routeLinks)}
      className=" bg-red-600 text-white px-3 py-1 uppercase text-sm hover:bg-stone-900 hover:text-white transition-all mr-auto rounded-md my-2 hover:shadow-lg duration-300 ease-in-out "
    >
      {children}
    </button>
  );
};
export default Button;
