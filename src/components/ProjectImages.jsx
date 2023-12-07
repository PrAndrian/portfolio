import PropTypes from 'prop-types';

const ProjectImages = ({images}) => {
  return (
    <section  className="bg-white my-32 lg:px-5">
    <div  className="lg:-rotate-6 px-5 lg:px-0">
      <div  className="grid grid-cols-1 lg:grid-cols-3 gap-x-24 gap-y-12 items-center justify-center">
        {images.map((image)=>
          <img key={image} src={image} className="object-scale-down rounded-lg shadow hover:shadow-2xl hover:scale-105 transition-all duration-300"/>
        )}
      </div>
    </div>
  </section>
  )
}

ProjectImages.propTypes  = {
  images:PropTypes.arrayOf(PropTypes.string.isRequired),
}


export default ProjectImages