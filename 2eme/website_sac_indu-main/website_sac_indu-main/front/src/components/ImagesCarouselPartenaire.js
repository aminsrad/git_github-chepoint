import Carousel from "react-bootstrap/Carousel";
import eico from "../images/eico.png";
import steg from "../images/steg1.png";
import sonede from "../images/sonede1.png";

function ImagesCarouselPartenaire() {
  return (
    <div>
      <div>
        <Carousel data-bs-theme="dark" fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={steg}
              alt="First slide"
              style={{ width: "1580px", height: "260px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={eico}
              alt="Second slide"
              style={{ width: "1580px", height: "260px" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={sonede}
              alt="Third slide"
              style={{ width: "1580px", height: "260px" }}
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ImagesCarouselPartenaire;
