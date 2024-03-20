import PropTypes from "prop-types";

const ProjectImages = ({ images }) => {
  return (
    <section className="my-32 bg-white lg:px-5">
      <div className="px-5 lg:-rotate-6 lg:px-0">
        <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-3 gap-x-24 gap-y-12">
          {images.map((image) => (
            <img
              key={image}
              src={image}
              className="object-scale-down transition-all duration-300 rounded-lg shadow hover:shadow-2xl hover:scale-105"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

ProjectImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default ProjectImages;
