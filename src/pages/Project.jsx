const Project = () => {
  return (
    <section className="">
      <section className="bg-[#E2EEEB] xl:min-h-screen lg:pt-72 -mt-32 relative z-[-1] bg-cover bg-bottom">
        <div className="container mx-auto mt-0 mb-0 z-50">
          <ul className="flex space-x-5">
            <li >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path  strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
              </svg>
            </li>
            <li >/</li>
            <li >
              <a  href="/projects" className="cursor-pointer"> Projects </a>
            </li>
            <li >/</li>
            <li >
              <a  className="font-bold text-[#3EC091]">My Intellect</a>
            </li>
          </ul>
        </div>
        <div className="flex space-x-10 -mt-20 xl:-mt-24 2xl:-mt-20 z-50">
          <div  className="opacity-30 absolute rollingText font-visby whitespace-nowrap scrollable-item text-[100px] lg:text-[275px] text-[#E2EEEB] font-bold text-stroke text-stroke-2 text-fill-[#E2EEEB] flex-shrink z-10" style={{translate: "none", rotate: "none", scale: "none", transform: "translate(-1.2496%, 0%) translate3d(0px, 0px, 0px)"}}>
            My Intellect
          </div>
        </div>
        <section  className="h-[90vh] lg:h-screen scale-150 lg:scale-100 relative bg-contain bg-center mt-10 xl:bg-bottom bg-no-repeat z-40 -mb-32 xl:-mb-14" style={{backgroundImage: "url('//images.ctfassets.net/g6o2flkpydd9/5dmTJr6At2LOzIknHFh89S/421b80f4925ba0eea4488e12b171987f/intellectapp_hero.png')"}}>
          <div  className="w-full h-full absolute bottom-[50px] left-0 backdrop z-50 hidden lg:block"></div>
        </section>
        <div  className="w-full h-full absolute bottom-[50px] left-0 backdrop z-50 block lg:hidden"></div>
      </section>
    </section>
  )
}

export default Project