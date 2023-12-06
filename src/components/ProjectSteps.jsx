const ProjectSteps = () => {
  return (
    <div  className="container mx-auto">
        <div  className="grid grid-cols-1 lg:grid-cols-2 items-center border-gray-200 fade-in-fast pt-5 pb-10 border-b">
        <div  className="flex items-center lg:space-x-10">
            <div  className="rollingText text-[100px] lg:text-[200px] font-bold bg-white text-stroke text-stroke-2 text-fill-white w-20 lg:w-32 leading-tight">1</div>
            <div  className="font-bold text-[#5E17EB] text-4xl lg:text-5xl uppercase">OBJECTIVES</div>
        </div>
        <div  className="prose prose-lg">
            <p>This app is going to help people organize their studies better. It will have an easy access to a student&apos;s notes, activities, tests and a chat with support if needed. Intellect is not just another place where you can learn a foreign language. It&apos;s you own personal online classbook to make your daily tasks easier.</p>
        </div>
        </div>
    </div>
  )
}

export default ProjectSteps