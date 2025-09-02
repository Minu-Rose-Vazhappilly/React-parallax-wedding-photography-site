import React, { useState } from "react";
import { Link } from "react-router-dom";

const portfolioItems = [
  { id: 1, category: "Wedding", title: "Besto + Daisy", image: "https://www.linandjirsa.com/wp-content/uploads/01-jewish-wedding-photography-chuppah.jpg" },
  { id: 2, category: "Wedding", title: "Gilbert + Fincy", image: "https://1.bp.blogspot.com/-RbDRTEKq0xo/Xkp2Ta-CS9I/AAAAAAAAOCs/j_CotJboHW8QLiYZsh87-2oMZ3Ux24URgCNcBGAsYHQ/s1600/15-Fabulous-Wedding-Photographs-That-Were-Captured-Underwater.jpg" },
  { id: 3, category: "Wedding", title: "Dany + Diya", image: "http://4.bp.blogspot.com/-BVDospycp5Q/Tl6QXKVRWyI/AAAAAAAAAhI/HTyeTksUuvo/s1600/wedding_photography_cds1hr.jpg" },
  { id: 4, category: "Wedding", title: "Rony + Riya", image: "https://i.pinimg.com/originals/d7/9c/cc/d79ccc41ff1a723a1a67baf85deb4812.jpg" },
  { id: 6, category: "Wedding", title: "Micheal + July", image: "https://nine-dots.co/wp-content/uploads/2020/10/20-Best-COVID-Wedding-Photographs001.jpg" },
  { id: 7, category: "Wedding", title: "Alan + Anna", image: "http://www.davidstraussphotography.com/wp-content/uploads/2014/05/Charleston-Wedding-Photography_1247.jpg" },
  { id: 8, category: "Wedding", title: "Joan + Mary", image: "http://www.lifestyleweblog.com/wp-content/uploads/Wedding-Photography.jpg" },
  { id: 9, category: "Wedding", title: "Tony + Yamy", image: "https://www.silverphotography.co.uk/wp-content/uploads/2020/07/GC319.jpg" },
  { id: 10, category: "Wedding", title: "Colbey + John", image: "https://www.thespaniers.com/wp-content/uploads/2022/10/aplusk-25-colbey-jon-wajert-the-backstage-event-center-cincinnati-wedding-photographers-1024x683.jpg" },
  { id: 11, category: "Brides", title: "Jessy Robert", image: "https://png.pngtree.com/thumb_back/fh260/background/20230426/pngtree-an-asian-bride-wearing-a-wedding-veil-in-front-of-her-image_2519537.jpg" },
  { id: 12, category: "Brides", title: "Andriya Wilson", image: "https://www.slrlounge.com/wp-content/uploads/2016/12/07-bridal-poses-1.jpg" },
  { id: 13, category: "Brides", title: "Jennifer Dissouza", image: "http://veilubridal.com/wp-content/uploads/2016/08/12-1024x768.jpg" },
  { id: 14, category: "Brides", title: "Lucy Fernadouz", image: "https://veilubridal.com/wp-content/uploads/2016/08/13.jpg" },
  { id: 15, category: "Brides", title: "Theres Loui", image: "https://barefootsworld.net/wp-content/uploads/2021/01/bride-768x513.jpg" },
  { id: 16, category: "Grooms", title: "Federik James", image: "https://cloudfront.slrlounge.com/wp-content/uploads/2016/07/06-photographing-the-groom-wedding-photography.jpg" },
  { id: 17, category: "Grooms", title: "Mark Leo", image: "https://cloudfront.slrlounge.com/wp-content/uploads/2017/04/prism-effect-photography-groom.jpg" },
  { id: 18, category: "Grooms", title: "Philip Leny", image: "https://www.kimsmithmiller.com/wp-content/uploads/2018/02/kimsmithmiller-foreign-cinema-wedding-055.jpg" },
  { id: 19, category: "Grooms", title: "Ronaldo Steeve", image: "https://shaadiwish.com/blog/wp-content/uploads/2020/11/groom-getting-ready.jpg" },
  { id: 20, category: "Grooms", title: "Alex Davis", image: "https://i.pinimg.com/originals/ec/69/60/ec6960730bb1d083c96aaecd2d24fa1a.jpg" },
  { id: 21, category: "Engagement", title: "Jack + Jeny", image: "https://media.flytographer.com/uploads/2022/07/Engagement-photo-ideas-flytographer-2.jpeg" },
  { id: 22, category: "Engagement", title: "Roy + Rose", image: "https://www.ladyrefines.com/wp-content/uploads/2022/11/winter-engagement-3.jpg" },
  { id: 23, category: "Engagement", title: "David + Leyona", image: "https://www.bernardine.com/wp-content/uploads/2023/03/58aa1187da3b2224/diamond-engagement-rings.png" },
  { id: 24, category: "Engagement", title: "Nivin + Theres", image: "https://people.com/thmb/ZEhWOedliRsuvxh4mU0A5BUNi4c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(979x569:981x571)/meghan-markle-engagement-ring-main-split-bde12e4d00234310b462e778c2a9f49f.jpg" },
  { id: 25, category: "Engagement", title: "Harry + Maghan Markle", image: "https://www.usmagazine.com/wp-content/uploads/2017/12/prince-harry-meghan-markle-engagement-pics.jpg" },
  { id: 26, category: "Engagement", title: "Sayanth + Rekha", image: "https://www.shubhlaxmifilms.com/wp-content/uploads/2022/11/M-U-5-scaled_11zon.jpg" },
  { id: 27, category: "Engagement", title: "Micheal + Riya", image: "https://www.wallpics.net/wp-content/uploads/2025/08/Wedding-Wallpapers-3.jpg" },
  { id: 28, category: "Engagement", title: "James + Lilly", image: "http://crystalturinophotography.com/wp-content/gallery/couplesengagements/engagement-photographer-albany-ny.jpg" },
  { id: 29, category: "Engagement", title: "Jim + Deny ", image: "https://samanthaongphoto.com/wp-content/uploads/2020/09/Toronto-Romantic-Engagement-Photography.jpg" },
  { id: 30, category: "Engagement", title: "Troy + Juliana", image: "https://www.carinaphotographics.com/wp-content/uploads/2020/01/mn-engagement-photo-studio-00001.jpg" },
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Wedding", "Engagement", "Brides","Grooms"];
  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4">Our Portfolio</h2>
        <button className="btn btn-primary mb-3" style={{}}><Link to={'/'} className="text-decoration-none text-light">Home</Link></button>
        {/* Category Buttons */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`btn ${
                selectedCategory === category
                  ? "btn-dark"
                  : "btn-outline-dark"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4">
              <div className="card portfolio-card border-0 shadow h-100 position-relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="card-img-top img-fluid"
                  style={{ height: "250px", objectFit: "cover", transition: "0.5s" }}
                />
                {/* Overlay */}
                <div className="card-img-overlay d-flex justify-content-center align-items-center bg-dark bg-opacity-50 opacity-0 hover-overlay">
                  <h5 className="text-white fw-semibold">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Portfolio;
