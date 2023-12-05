import { Link } from "react-router-dom"

const Error404 = () => {
  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center bg-black">
      <h1 className="text-[100px] font-bold text-white">
        Page not found
      </h1>
      <p className=" text-white text-3xl">
        This page doesn&apos;t exist, go to the <Link to="/" className="hover:text-[#5E17EB] hover:underline">home page</Link> 
      </p>
    </section>
  )
}

export default Error404