import React from 'react';
import {Link} from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
              <section class="container">
                <div class="card my-5">
                <div class="card-body ml-5">
                    <div class="row">
                    <div class="col-md-6 pl-5 mt-5">
                        <p class="title-hero">Cari Event Apa Minggu ini?</p>
                        <Link class="btn button-hero py-3 px-4" to="#" role="button">Cari Event Online</Link>
                        <p class="tagline mt-4">Rekomendasi bagi kalian yang #dirumahaja</p>
                    </div>
                    <div class="col-md-6">
                        <div class="middle">
                        <img class="image-hero" src="assets/image/events-hero.png" alt="ilustrasi event" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            <div class="container mb-5">
                <div class="row justify-content-between">
                <div class="col">
                    <h2>Event Terpopuler</h2>
                </div>
                <div class="col text-right">
                    <p><Link to="#" style={{textDecoration: 'none'}}>lihat semua</Link></p>
                </div>
                </div>
                <div class="row">
                <div class="container-fluid">
                    <div id="carousel-event-terpopuler" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner row w-100 mx-auto py-1">
                        <div class="carousel-item col-md-3 active">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-1.png" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Oktober 2021</p>
                            <Link to="./event.html" target="_blank" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">SEO Starter Guide</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Surabaya
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-5.png" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">23 Januari 2021</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Introduction To cyber Security</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Surabaya
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-7.jpeg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">21 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Microservice dengan Golang</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Jakarta
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-7.jpeg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">21 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Microservice dengan Golang</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Jakarta
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-1.png" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Oktober 2021</p>
                            <Link to="./event.html" target="_blank" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">SEO Starter Guide</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Surabaya
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                    </div>
                    <Link class="carousel-control-prev" to="#carousel-event-terpopuler" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </Link>
                    <Link class="carousel-control-next" to="#carousel-event-terpopuler" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </Link>
                    </div>
                </div>
                </div>
            </div>

            <div class="container mb-5">
                <div class="row justify-content-between">
                <div class="col">
                    <h2>Dekat Surabaya, Jatim</h2>
                </div>
                <div class="col text-right">
                    <p><Link to="#" style={{textDecoration: 'none'}}>lihat semua</Link></p>
                </div>
                </div>
                <div class="row">
                <div class="container-fluid">
                    <div id="carousel-event-terdekat" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner row w-100 mx-auto py-1">
                        <div class="carousel-item col-md-3 active">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-1.png" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Oktober 2021</p>
                            <Link to="./event.html" target="_blank" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">SEO Starter Guide</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Surabaya
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-5.png" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">23 Januari 2021</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Introduction To cyber Security</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Surabaya
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-9.jpeg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">5 Februari 2021</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Nodejs For Beginner</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Surabaya
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-7.jpeg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">21 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Microservice dengan Golang</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Jakarta
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-7.jpeg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">21 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Microservice dengan Golang</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Jakarta
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-8.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">1 Februari 2021</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Flutter For Beginner</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Surabaya
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                        <div class="carousel-item col-md-3">
                        <div class="card h-100">
                            <img src="assets/image/event-poster/event-poster-6.jpg" class="card-img-top embed-responsive-item"
                            alt="event image" />
                            <div class="card-img-overlay" style={{color: 'white'}}>
                            <Link to="#">
                                <i class="fas fa-bookmark fa-3x float-right" style={{color: '#e0e1dd'}}></i>
                            </Link>
                            </div>
                            <div class="card-body" style={{position: 'relative'}}>
                            <p class="card-text m-1">27 Desember 2020</p>
                            <Link to="#" style={{textDecoration: 'none'}}>
                                <h5 class="card-title">Deep Dive Functional Programming Kotlin</h5>
                            </Link>
                            <i class="fas fa-map-marker-alt"></i> Bandung
                            </div>
                        </div>
                        </div>
                    </div>
                        <Link class="carousel-control-prev" to="#carousel-event-terdekat" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                        </Link>
                        <Link class="carousel-control-next" to="#carousel-event-terdekat" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                        </Link>
                    </div>
                </div>
                </div>
            </div>


            <section>
                <div class="container mb-5">
                <div class="row justify-content-between mb-3">
                    <div class="col">
                    <h2>Kategori</h2>
                    </div>
                </div>
                <div class="row h-100 justify-content-center align-items-center">
                    <div class="col col-lg-4 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body py-1 px-4">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                            <img class="img-fluid" src="assets/image/kategori/petualangan.png" alt="petualangan" />
                            </div>
                            <div class="col-sm-8 my-auto h-100">
                            <p class="card-title-kategori">Petualangan</p>
                            <p class="card-counter-kategori">21 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col col-lg-4 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body py-1 px-4">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                            <img class="img-fluid" src="assets/image/kategori/teknologi.png" alt="teknologi" />
                            </div>
                            <div class="col-sm-8 my-auto h-100">
                            <p class="card-title-kategori">Teknologi</p>
                            <p class="card-counter-kategori">87 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col col-lg-4 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body py-1 px-4">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                            <img class="img-fluid" src="assets/image/kategori/keluarga.png" alt="keluarga" />
                            </div>
                            <div class="col-sm-8 my-auto h-100">
                            <p class="card-title-kategori">Keluarga</p>
                            <p class="card-counter-kategori">12 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col col-lg-4 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body py-1 px-4">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                            <img class="img-fluid" src="assets/image/kategori/kesehatan.png" alt="kesehatan" />
                            </div>
                            <div class="col-sm-8 my-auto h-100">
                            <p class="card-title-kategori">Kesehatan</p>
                            <p class="card-counter-kategori">21 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col col-lg-4 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body py-1 px-4">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                            <img class="img-fluid" src="assets/image/kategori/olahraga.png" alt="olahraga" />
                            </div>
                            <div class="col-sm-8 my-auto h-100">
                            <p class="card-title-kategori">Olahraga</p>
                            <p class="card-counter-kategori">21 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col col-lg-4 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body py-1 px-4">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                            <img class="img-fluid" src="assets/image/kategori/fotografi.png" alt="fotografi" />
                            </div>
                            <div class="col-sm-8 my-auto h-100">
                            <p class="card-title-kategori">Fotografi</p>
                            <p class="card-counter-kategori">21 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col col-lg-4 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body py-1 px-4">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                            <img class="img-fluid" src="assets/image/kategori/kuliner.png" alt="kuliner" />
                            </div>
                            <div class="col-sm-8 my-auto h-100">
                            <p class="card-title-kategori">Kuliner</p>
                            <p class="card-counter-kategori">21 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col col-lg-4 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body py-1 px-4">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                            <img class="img-fluid" src="assets/image/kategori/kesenian.png" alt="kesenian" />
                            </div>
                            <div class="col-sm-8 my-auto h-100">
                            <p class="card-title-kategori">Kesenian</p>
                            <p class="card-counter-kategori">87 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col col-lg-4 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body py-1 px-4">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                            <img class="img-fluid" src="assets/image/kategori/musik.png" alt="musik" />
                            </div>
                            <div class="col-sm-8 my-auto h-100">
                            <p class="card-title-kategori">Musik</p>
                            <p class="card-counter-kategori">12 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col col-lg-4 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body py-1 px-4">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                            <img class="img-fluid" src="assets/image/kategori/musik.png" alt="musik" />
                            </div>
                            <div class="col-sm-8 my-auto h-100">
                            <p class="card-title-kategori">Musik</p>
                            <p class="card-counter-kategori">12 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col col-lg-4 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body py-1 px-4">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                            <img class="img-fluid" src="assets/image/kategori/musik.png" alt="musik" />
                            </div>
                            <div class="col-sm-8 my-auto h-100">
                            <p class="card-title-kategori">Musik</p>
                            <p class="card-counter-kategori">12 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col col-lg-4 col-sm-6 mb-4">
                    <div class="card">
                        <div class="card-body py-1 px-4">
                        <div class="row">
                            <div class="col-sm-4 p-0">
                            <img class="img-fluid" src="assets/image/kategori/musik.png" alt="musik" />
                            </div>
                            <div class="col-sm-8 my-auto h-100">
                            <p class="card-title-kategori">Musik</p>
                            <p class="card-counter-kategori">12 Event</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;