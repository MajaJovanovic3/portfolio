import React from "react";

import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

import izvor2 from '../../assets/img/izvor2.jpg'
import darkMode from '../../assets/img/darkMode.jpg'
import pretraga from '../../assets/img/pretraga.jpg'
import izvor from '../../assets/img/izvor.jpg'
const items = [
  {
    src: require("assets/img/izvor.jpg").default,
    altText: "",
  },
  {
    src: require("assets/img/izvor2.jpg").default,
    altText: "",
  },
  {
    src: require("assets/img/darkMode.jpg").default,
    altText: "",
  },
];

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <Container >
        <Col lg="10" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                autoPlay={true}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map((item) => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img
                        src={item.src}
                        alt={item.altText}
                        className="d-block"
                        height="400px"
                        width="auto"
                        style={{paddingLeft:'25px'}}
                      />
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                  color='transparent'
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={(e) => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
              </Col>
        </Container>
  );
}

export default CarouselSection;
