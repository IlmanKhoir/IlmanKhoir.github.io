import React from "react";
import indo from "../assets/images/indo.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import gambar1 from "../assets/images/1716212070591.jpg"
import gambar2 from "../assets/images/1716212040265.jpg"
import gambar3 from "../assets/images/1716212087571.jpg"

export default function MainPage() {
  return (
    <div className="container">
      <div className="about" id="abt">
        <p className="Nusantara">NUSANTARA</p>
        <div className="d-flex justify-content-center">
          <img src={indo} className="image" alt="Nusantara" />
        </div>
      </div>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner-text">
          <div className="carousel-item active">
            <p>
              Nusantara, yang terdiri dari ribuan pulau di Indonesia, menampilkan keanekaragaman budaya dan bahasa yang
              luas. Setiap pulau memiliki ciri khas yang membedakannya, baik dalam adat maupun tradisi.
            </p>
          </div>
          <div className="carousel-item">
            <p>
              Alam di Nusantara sangat beragam, mulai dari pegunungan yang menjulang hingga pantai berpasir putih.
              Keanekaragaman ini tidak hanya penting untuk ekologi tetapi juga sebagai daya tarik utama bagi pariwisata.
            </p>
          </div>
          <div className="carousel-item">
            <p>
              Masyarakat Nusantara merayakan kekayaan budayanya melalui festival dan upacara yang menampilkan musik,
              tarian, dan kuliner setempat.
            </p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className="Thecrew" id="crew">
        <p>About Us</p>
      </div>

      <div className="crew">
        <img src={gambar1} style={{ width: "200px", height: "200px" }} alt="Crew" />
        <img src={gambar2} style={{ width: "200px", height: "200px" }} alt="Crew" />
        <img src= {gambar3} style={{ width: "200px", height: "200px" }} alt="Crew" />
      </div>

      <div className="project" id="project">
        <p>THE PROJECT!</p>
      </div>

      <div className="p-3 d-flex justify-content-center">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/WYkqH7k_MFs?si=cTkbKy4-GO-KkLNv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <footer>
        <a href="https://youtu.be/WYkqH7k_MFs?feature=shared">
          <img src="images/Icon Youtube.png" style={{ width: "100px" }} alt="YouTube Channel" />
        </a>
      </footer>
    </div>
  );
}
