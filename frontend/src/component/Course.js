import React from "react";
import "./course.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default function Course() {
  return (
    <>
    <Navbar/>
      <div className="home-01">
        <div className=" my-5">
          <div className="col-lg-12 text-center">
            <h3 className="title-02 title-02--mr-01">
              {" "}
              Our Popular <span>Courses</span>{" "}
            </h3>
            <p className="subtitle-01">
              Suspendisse sodales arcu velit, non pretium massa accumsan non.
              Proin accumsan placerat mauris sit <br />
              amet condimentum. Morbi luctus risus tincidunt urna hendrerit
              mollis.
            </p>
          </div>
        </div>
        {/* section1 end  */}
        {/* section2 start  */}
        <div className="my-5   ">
          {/* carousel section start */}
          <div className="container w-75 ">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card" style={{ width: "18rem" }}>
                        <img
                          src="../../assets/images/course-01.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div className="product-list__content">
                            <h3 className="product-list__title">
                              <a href="single_course.html">JavaScript</a>
                            </h3>
                            <ul className="product-list__star-list">
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                            <p className="product-list__price">$ 150</p>
                          </div>
                        </div>
                        <div className="product-list__item-info">
                          <p className="item-info__text-01">14 Lessons</p>
                          <p className="item-info__text-02">25 Seats</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 ">
                      <div className="card" style={{ width: "18rem" }}>
                        <img
                          src="../../assets/images/course-01.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div className="product-list__content">
                            <h3 className="product-list__title">
                              <a href="single_course.html">Reactjs</a>
                            </h3>
                            <ul className="product-list__star-list">
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                            <p className="product-list__price">$ 150</p>
                          </div>
                        </div>
                        <div className="product-list__item-info">
                          <p className="item-info__text-01">14 Lessons</p>
                          <p className="item-info__text-02">25 Seats</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card" style={{ width: "18rem" }}>
                        <img
                          src="../../assets/images/course-03.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div className="product-list__content">
                            <h3 className="product-list__title">
                              <a href="single_course.html">HTML CSS</a>
                            </h3>
                            <ul className="product-list__star-list">
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                            <p className="product-list__price">$ 150</p>
                          </div>
                        </div>
                        <div className="product-list__item-info">
                          <p className="item-info__text-01">14 Lessons</p>
                          <p className="item-info__text-02">25 Seats</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card" style={{ width: "18rem" }}>
                        <img
                          src="../../assets/images/course-03.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div className="product-list__content">
                            <h3 className="product-list__title">
                              <a href="single_course.html">Express Nodejs</a>
                            </h3>
                            <ul className="product-list__star-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                            <p className="product-list__price">$ 150</p>
                          </div>
                        </div>
                        <div className="product-list__item-info">
                          <p className="item-info__text-01">14 Lessons</p>
                          <p className="item-info__text-02">25 Seats</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card" style={{ width: "18rem" }}>
                        <img
                          src="../../assets/images/course-02.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div className="product-list__content">
                            <h3 className="product-list__title">
                              <a href="single_course.html">Laravel</a>
                            </h3>
                            <ul className="product-list__star-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                            <p className="product-list__price">$ 150</p>
                          </div>
                        </div>
                        <div className="product-list__item-info">
                          <p className="item-info__text-01">14 Lessons</p>
                          <p className="item-info__text-02">25 Seats</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card" style={{ width: "18rem" }}>
                        <img
                          src="../../assets/images/course-03.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <div className="product-list__content">
                            <h3 className="product-list__title">
                              <a href="single_course.html">Databases</a>
                            </h3>
                            <ul className="product-list__star-list">
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i
                                    className="fa fa-star"
                                    aria-hidden="true"
                                  />
                                </a>
                              </li>
                            </ul>
                            <p className="product-list__price">$ 150</p>
                          </div>
                        </div>
                        <div className="product-list__item-info">
                          <p className="item-info__text-01">14 Lessons</p>
                          <p className="item-info__text-02">25 Seats</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
