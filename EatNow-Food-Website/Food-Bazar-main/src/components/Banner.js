import Carousel from "react-multi-carousel";
import { bannerImgUrl } from "../utils/constants";
import "react-multi-carousel/lib/styles.css";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const extractCollectionId = (url) => {
  const regex = /collection_id=(\d+)/;
  const match = url.match(regex);
  return match && match[1];
};

const NewBanner = (props) => {
  const { data } = props;

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 2050 },
      items: 10,
      slidesToSlide: 3,
    },
    mediumDesktop: {
      breakpoint: { max: 2050, min: 1600 },
      items: 7,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1600, min: 1400 },
      items: 6,
      slidesToSlide: 3,
    },
    laptop: {
      breakpoint: { max: 1400, min: 1150 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1150, min: 850 },
      items: 4,
      slidesToSlide: 2,
    },
    largeMobile: {
      breakpoint: { max: 850, min: 500 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 2,
      slidesToSlide: 2,
    },
  };

  const CustomButtonGroup = ({ next, previous, ...rest }) => {
    const { currentSlide, slidesToShow } = rest.carouselState;

    return (
      <div>
        <div className="mb-5 absolute right-0 left-0 top-0">
          <div className="mt-2 text-base xl:text-xl font-bold">
            What's on your mind?
          </div>
        </div>
        <div className="flex absolute -right-1 top-0">
          <button
            className={`h-8 m-1 px-2 py-1 bg-gray-200 rounded-full ${
              currentSlide <= 0 ? "opacity-50" : "opacity-100"
            }`}
            onClick={() => previous()}
          >
            <LuArrowLeft size={17} />
          </button>

          <button
            className={`h-8 m-1 px-2 py-1 bg-gray-200 rounded-full opacity-100 ${
              currentSlide >= data.length - slidesToShow
                ? "opacity-50"
                : "opacity-100"
            }`}
            onClick={() => next()}
          >
            <LuArrowRight size={17} />
          </button>
        </div>
      </div>
    );
  };

  //console.log("Data in banner: ", data);
  return (
    <div className="mt-20 relative p-4 mx-[calc(3%+36px)] xl:mx-[calc(10%+36px)] md:mx-[calc(8%+36px)] sm:mx-[calc(6%+36px)]">
      <Carousel
        className="px-0 py-10"
        responsive={responsive}
        arrows={false}
        customButtonGroup={<CustomButtonGroup />}
      >
        {data.map((banner) => (
          <Link
            to={`/collections/${extractCollectionId(banner.action.link)}`}
            key={banner.id}
          >
            <div className="mt-4 px-4 w-full transition duration-300">
              <div className="w-28 h-40 xl:w-36 xl:h-44">
                <img
                  className="cursor-pointer"
                  src={bannerImgUrl + banner?.imageId}
                  alt={banner?.action?.text}
                />
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};

export default NewBanner;
