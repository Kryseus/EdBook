
import Photo from './Photo';
export default function PhotosCarousel({photosArray}) {
    return (<>
        <div id="photosCarouselControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {photosArray.map((photo,index)=>(
            <Photo 
              key={`recphoto${index}`}
              img={photo.file.url}
              alt={photo.title}
              active={index===0}
            />
          ))}
        </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#photosCarouselControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#photosCarouselControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>)
  }