import Footer from "../common/Footer"
import Header from "../common/Header"
import Hero from "../common/Hero"
import BlogImg from'../../assets/image/construction3.jpg'


function Blogs() {
    return (
        <>
        <Header/>
            <Hero preHeading="Quality. Integrity. Value."
                heading="Blogs"
                text="We excel at transfroming visions into reality <br />through outstanding craftsmanship and precise."
            />
                <section className="section-6 bg-light py-5">
                    <div className="container">
                        <div className="section-header text-center">
                            <span>Blog & News</span>
                            <h2>Article & blog posts</h2>
                            <p>We spesialize in a wide range of contraction services, including residential, commercial, and industrial projects.</p>
                        </div>
                        <div className="row pt-3">
                            <div className="col-md-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className='w-100' />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className='mb-3'>
                                            <a href="#" className="title">Dummy blog title</a>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className='w-100' />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className='mb-3'>
                                            <a href="#" className="title">Dummy blog title</a>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className='w-100' />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className='mb-3'>
                                            <a href="#" className="title">Dummy blog title</a>
                                        </div>
                                        <a href="#" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>            
        <Footer/>
        </>
    )
}

export default Blogs