import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

const Error404 = () => {
  useTitle("Page not found");
  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen bg-black">
      <h1 className="text-[100px] font-bold text-white">Page not found</h1>
      <p className="text-3xl text-white ">
        This page doesn&apos;t exist, go to the{" "}
        <Link to="/" className="hover:text-[#5E17EB] hover:underline">
          home page
        </Link>
      </p>
    </section>
  );
};

export default Error404;
