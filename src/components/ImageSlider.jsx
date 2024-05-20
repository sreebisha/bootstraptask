import Carousel from "react-bootstrap/Carousel";

const ExampleCarouselImage = () => {
    return (
        <img
            
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAOk_Z2l6Qsdg6BO3fhHSJZs1O3Wv4QQknng&usqp=CAU"
            alt=""
            width={600}
        />
    );
};

function ImageSlider() {
    return (
        <>
            <div style={{ paddingTop: 10 }}>
                <h2>Image Slider</h2>
            </div>
            <div
                style={{
                    backgroundColor: "white",
                    borderRadius: 10,
                    marginTop: 40,
                }}
            >
                <Carousel>
                    <Carousel.Item>
                        <ExampleCarouselImage text="First slide" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>
                                Nulla vitae elit libero, a pharetra augue mollis
                                interdum.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Second slide" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ExampleCarouselImage text="Third slide" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque
                                nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default ImageSlider;
