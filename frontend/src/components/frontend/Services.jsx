import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import ServiceImg from '../../assets/image/construction1.jpg'

function Services() {
    return (
        <>
            <Header />
                <Hero preHeading="Quality. Integrity. Value."
                    heading="Services"
                    text="We excel at transfroming visions into reality <br />through outstanding craftsmanship and precise."
                />
                <section className="section-3 bg-light py-5">
                    <div className="container py-5">
                        <div className="section-header text-center">
                            <span>Our Services</span>
                            <h2>Our Construction Services</h2>
                            <p>We offer a diverse array of construction services, spanning residential, commercial, and industrial projects.</p>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="1" className="w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on preojects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="1" className="w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on preojects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="1" className="w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on preojects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="1" className="w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on preojects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="1" className="w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on preojects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="item">
                                    <div className="service-image">
                                        <img src={ServiceImg} alt="1" className="w-100" />
                                    </div>
                                    <div className="service-body">
                                        <div className="service-title">
                                            <h3>Specialty Construction</h3>
                                        </div>
                                        <div className="service-content">
                                            <p>Specialty construction is a niche sector within the construction industry that focuses on preojects requiring specialized skills, materials, and techniques.</p>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            <Footer />
        </>
    )
}

export default Services