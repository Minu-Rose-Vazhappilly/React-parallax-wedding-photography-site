
import React, { useState, useEffect, useContext } from "react";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import a1 from "./assets/a1.png";
import a2 from "./assets/a2.png";
import a3 from "./assets/a3.png";
import a4 from "./assets/a4.png";
import a5 from "./assets/a5.png";

// Initial images
const initialItems = () => [
  { id: "photo-1", url: "https://i.pinimg.com/originals/9d/56/ee/9d56ee0f93e5fe60d1d3981aa9527855.jpg" },
  { id: "photo-2", url: "https://image.winudf.com/v2/image1/Y29tLk1vb25UQXBwcy5sb3ZlbXNnLmltYWdlc19zY3JlZW5fMTZfMTYxNjUyOTM1MF8wNzk/screen-16.jpg?fakeurl=1&type=.jpg" },
  { id: "photo-3", url: "https://www.deerpearlflowers.com/wp-content/uploads/2019/01/Creative-Wedding-Photography-Ideas-for-Every-Wedding-Photoshoot-4.jpg" },
  { id: "photo-4", url: "https://i.pinimg.com/736x/ac/20/33/ac203348cb7c1f8ee4bf32c45107921c.jpg" },
  { id: "photo-5", url: "https://shaadiwish.com/blog/wp-content/uploads/2021/09/minimal-ring-designs.jpg" },
  { id: "photo-6", url: "https://media1.popsugar-assets.com/files/thumbor/QJlK6N-UE8NotQs5tXS194Og3VE/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/08/28/799/n/3019466/57f68ec5627a213c_thumb_temp_cover_file8453591407352593/i/Emotional-Wedding-Pictures.jpg" },
  { id: "photo-7", url: "https://www.konradbrattkeblog.com/wp-content/uploads/2017/03/WEDDING-MOMENTS-BROOKLYN-WEDDING-PHOTOGRAPHER_083.jpg" },
  { id: "photo-8", url: "https://ashleyeaglesonphotography.com/wp-content/uploads/sites/7004/2020/07/sweet-touches-on-your-wedding-day_0260.jpg" },
];



const persons = [
  { id: 1, name: "Alice Johnson", img: a1 },
  { id: 2, name: "Bob Smith", img: a2 },
  { id: 3, name: "Charlie Brown", img: a3 },
  { id: 4, name: "Leo Alex", img: a4 },
  { id: 5, name: "Vincent Baren", img: a5 },
  { id: 6, name: "Together we made", img: "https://static.vecteezy.com/system/resources/previews/038/355/036/non_2x/ai-generated-portrait-of-successful-group-of-indian-business-people-at-modern-office-looking-at-camera-isolated-isolated-on-transparent-background-free-png.png", backgrounds: "https://png.pngtree.com/thumb_back/fw800/background/20230325/pngtree-spotlight-lighting-show-stage-decoration-image_2104676.jpg" },
];




export default function App() {




  return (
    <>
      {/* Hero Section */}
      <div className="Hero-section">
        <nav className="navbar navbar-expand-lg bg-body-transparent">
              <div className="container-fluid">
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active text-warning"  style={{fontWeight:"600",fontSize:"25px"}} aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-warning" style={{fontWeight:"600",fontSize:"25px"}} href="#featured">Featured Photographs</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-warning" style={{fontWeight:"600",fontSize:"25px"}} href="#teams">Team</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-warning" style={{fontWeight:"600",fontSize:"25px"}} href="#test">Testimonials</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-warning" style={{fontWeight:"600",fontSize:"25px"}} href="#cont">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
        <ParallaxBanner
          style={{ height: "100vh", width: "100%", margin: 0, padding: 0 }}
        >

          <ParallaxBannerLayer
            speed={15}
            image="https://xphotography.ca/wp-content/uploads/2019/12/Photo-Session-Wedding-Family-Couple-Portrait-Fun-Engagement-Photography-Fashion-Professional-Montreal-Laval-Brossard-Xphotography.jpg"
            className="parallax-layer"
          />
          <ParallaxBannerLayer>
            
          </ParallaxBannerLayer>
          <ParallaxBannerLayer speed={-10}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                height: "100%",
                color: "white",
                textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
                textAlign: "center",
              }}
            >
              <h1 style={{ fontSize: "4rem", fontWeight: "bold", margin: 0 }}>
                Eternal Frames
              </h1>
              <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
                Capturing Love, Forever
              </p>
            </div>
          </ParallaxBannerLayer>


        </ParallaxBanner>
      </div>

      {/* Featured Photos */}
      <div className="f-photo" id="featured" style={{ backgroundColor: "white" }}>
        <h1 className="text-center p-4">Featured Photographs</h1>
        <Swiper className="swiper-slide" loop={true} spaceBetween={0} breakpoints={{
          320: {  // mobile
            slidesPerView: 1,
          },
          640: {  // small tablets
            slidesPerView: 3,
          },
          1024: { // desktops
            slidesPerView: 4,
          },
          1440: { // large screens
            slidesPerView: 5,
          }
        }}>
          <SwiperSlide ><img src="https://i.pinimg.com/originals/9d/56/ee/9d56ee0f93e5fe60d1d3981aa9527855.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.pinimg.com/736x/ac/20/33/ac203348cb7c1f8ee4bf32c45107921c.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://shaadiwish.com/blog/wp-content/uploads/2021/09/minimal-ring-designs.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://i.ytimg.com/vi/XKQknAAM4rE/maxresdefault.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://image.winudf.com/v2/image1/Y29tLk1vb25UQXBwcy5sb3ZlbXNnLmltYWdlc19zY3JlZW5fMTZfMTYxNjUyOTM1MF8wNzk/screen-16.jpg?fakeurl=1&type=.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://thursd.com/storage/media/35874/Wedding-Flowers---10-Most-Popular-Flowers-for-a-Bridal-Bouquet-01.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://media1.popsugar-assets.com/files/thumbor/QJlK6N-UE8NotQs5tXS194Og3VE/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/08/28/799/n/3019466/57f68ec5627a213c_thumb_temp_cover_file8453591407352593/i/Emotional-Wedding-Pictures.jpg" alt="" /></SwiperSlide>
          <SwiperSlide><img src="https://ashleyeaglesonphotography.com/wp-content/uploads/sites/7004/2020/07/sweet-touches-on-your-wedding-day_0260.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </div>

      <div className="featurned-in mt-2" style={{ overflow: "hidden" }}>
        <h1 className="p-4  text-light" style={{ fontWeight: "600" }}>AS FEATURED IN</h1>
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <div className="row g-5 p-5">
            <div className="col-md-4 col-12 text-light" style={{ fontWeight: "600", fontSize: "25px" }}>VOX</div>
            <div className="col-md-4 col-12 text-light" style={{ fontWeight: "600", fontSize: "25px" }}>WAHINGTONIAN</div>
            <div className="col-md-4 col-12 text-light" style={{ fontWeight: "600", fontSize: "25px" }}>HUFFINGTON POST</div>
            <div className="col-md-4 col-12 text-light" style={{ fontWeight: "600", fontSize: "25px" }}>CATALYST WED CO</div>
            <div className="col-md-4 col-12 text-light" style={{ fontWeight: "600", fontSize: "25px" }}>WEDDING CHICKS</div>
            <div className="col-md-4 col-12 text-light" style={{ fontWeight: "600", fontSize: "25px" }}>H&H WEDDINGS</div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-center">MEET THE TEAM</h1>

        <div className="team p-3" id="teams" style={{}}>
          {persons.map((p) => (
            <ParallaxBanner key={p.id} style={{ height: "70vh" }} className="">
              {/* Photo layer (front) */}
              <ParallaxBannerLayer style={{
                backgroundImage: `url(${p.backgrounds})`,
                backgroundSize: "cover",
                backgroundPosition: "center top"
              }}>

              </ParallaxBannerLayer>
              <ParallaxBannerLayer speed={-40}>
                <div className="d-flex align-items-center justify-content-center vh-100" style={{ marginTop: "300px" }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    className="img-fluid rounded shadow-lg"
                    style={{
                      width: p.id === 6 ? "36rem" : "24rem",   // rectangular if id=6
                      height: p.id === 6 ? "20rem" : "24rem",  // maintain rectangle
                      objectFit: "cover"
                    }}
                  />

                </div>
              </ParallaxBannerLayer>
              <ParallaxBannerLayer speed={10}>
                <div className="mt-2  mb-4 d-flex align-items-end justify-content-center h-75 pb-5">
                  <h1 className="fw-bold text-dark bg-light px-4 py-2 rounded shadow">
                    {p.name}
                  </h1>
                </div>
              </ParallaxBannerLayer>

            </ParallaxBanner>
          ))}

          {/* Normal content after finishes */}

        </div>


      </div>

      <div className="Testimonials" id="test" style={{ overflow: "hidden" }}>
        <h1 className="text-center mt-3 p-5">Testimonials</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-12 position-relative p-5 " >
              <img src="https://i.pinimg.com/originals/c5/7c/a6/c57ca6e48744d361afdaf9b492a65e2c.jpg" alt="" style={{
                width: "250px",
                height: "400px",
                position: "relative",
                zIndex: 1, // top layer
              }} />
              <img src="https://i.pinimg.com/originals/da/1a/f3/da1af3cab8713c0fb17305a7da3c0d13.jpg" className="position-absolute" alt="" style={{
                width: "200px",
                height: "260px",
                position: "absolute",
                top: "250px", // move it up to overlap
                left: "150px", // optional: shift horizontally
                zIndex: 2, // behind
              }} />
            </div>
            <div className="col-md-5 col-12 mt-5 d-flex justify-content-left align-items-left flex-column "  >
              <h1 className="text-centr">Emma & Lucas</h1>
              <p style={{ textAlign: "justify" }}>"Eternal Frames beautifully captured the essence of our wedding day. Every picture tells a story, filled with emotions, laughter, and love. We were amazed at how the team made us feel so comfortable and natural in front of the camera. These photographs aren’t just memories; they are treasures we’ll hold close forever. Thank you for turning our special day into timeless frames!"</p>
            </div>

            <div className="col-md-6 col-12 mt-5 d-flex justify-content-left align-items-left flex-column " >
              <h1 className="text-centr" >Sophia & Daniel</h1>
              <p style={{ textAlign: "justify" }}>"Our wedding felt like a dream, and Eternal Frames managed to preserve it exactly that way. Every little detail—the way Daniel looked at me walking down the aisle, the warmth of our families, the joy on our friends’ faces—was captured so beautifully. What touched us most was how effortlessly the team told our story through their lenses, with creativity and authenticity. We couldn’t have imagined a more perfect keepsake of the happiest day of our lives."</p>
            </div>
            <div className="col-md-6 col-12 position-relative p-5 " >
              <img src="https://i.pinimg.com/originals/76/d0/83/76d0838ca3c02675b859b971c99f60d8.jpg" alt="" style={{
                width: "250px",
                height: "400px",
                position: "relative",
                zIndex: 1, // top layer
              }} />
              <img src="https://cdn0.hitched.co.uk/article/1309/original/1920/jpg/139031-james-polley-photography-ring-1.jpeg" className="position-absolute" alt="" style={{
                width: "200px",
                height: "260px",
                position: "absolute",
                top: "250px", // move it up to overlap
                left: "150px", // optional: shift horizontally
                zIndex: 2, // behind
              }} />
            </div>
            <div className="col-md-6 col-12 position-relative p-5 " >
              <img src="https://www.eivans.com/wp-content/uploads/2020/06/modern-wedding-10.jpg" alt="" style={{
                width: "250px",
                height: "400px",
                position: "relative",
                zIndex: 1, // top layer
              }} />
              <img src="https://static.livebooks.com/d353cc02b9c243e4ab69b7214d35063b/i/f8ba5551803341f9a0e515fc20b73660/1/GCuCv726vxAVM9sgguVj4g/photo-1465495976277-4387d4b0b4c6.jpeg" className="position-absolute" alt="" style={{
                width: "200px",
                height: "260px",
                position: "absolute",
                top: "250px", // move it up to overlap
                left: "150px", // optional: shift horizontally
                zIndex: 2, // behind
              }} />
            </div>
            <div className="col-md-5 col-12 mt-5 d-flex justify-content-left align-items-left flex-column " >
              <h1 className="text-centr">Olivia & James</h1>
              <p style={{ textAlign: "justify" }}>"We were nervous about being photographed, but the Eternal Frames team made us feel at ease from the very beginning. Their patience, kindness, and passion for their craft shone through in every interaction. When we saw the final album, we were amazed—not only by the beauty of the images but by the way they carried emotion. Each photograph felt alive, as if we were back in that magical moment. It’s a gift to relive our wedding day every time we open our album."</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="ft p-5" id="cont" style={{ height: "65vh" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
              <h1 className="text-center text-light">Eternal Frames</h1>
              <p style={{ textAlign: "justify" }} className="text-light">Eternal Frames – Capturing love, laughter, and moments that last a lifetime.</p>
            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">

              <h2 className="text-center text-light">Home</h2>
              <h2 className="text-center text-light">Featured Photographs</h2>

              <h2 className="text-center text-light">Team</h2>
              <h2 className="text-center text-light">Testimonials</h2>
              <h2 className="text-center text-light">Contact</h2>

            </div>
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <h3><i className="text-light fa-brands fa-instagram"></i></h3>
              <h3><i className="text-light fa-brands fa-facebook ms-4"></i></h3>
              <h3><i className="text-light fa-brands fa-whatsapp ms-4"></i></h3>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
