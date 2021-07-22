export default function Photo({img,active,alt}) {
    return (
        <div className={`carousel-item ${active ? 'active' : ''}`}>
          <img src={img} className="d-block w-100" alt={alt}/>
        </div>
    )
  }