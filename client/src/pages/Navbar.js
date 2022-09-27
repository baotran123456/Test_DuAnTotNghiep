import { NavLink } from "react-router-dom";
import carts from '../hinhanh/carts.png';
import search from '../hinhanh/search.png';
import user from '../hinhanh/user.png'

const Navbar = () => {
  return (
    <>
      <div className="backgroud">
        <header>
          <div class="container">
            <div class="form-logo">

            </div>

            <nav id="navbar">
              <ul class="main-menu">
                <li>
                  <a href="#HOME">
                    TRANG CHỦ
                  </a>
                </li>
                <li>
                  <a href="#INTRODUCE">
                    GIỚI THIỆU
                  </a>
                </li>
                <li>
                  <a href="#PRODUCT">
                    SẢN PHẨM
                  </a>
                </li>
                <li>
                  <a href="/endow">
                    ƯU ĐÃI
                  </a>
                </li>
                <li>
                  <a href="/contact">
                    LIÊN HỆ
                  </a>
                </li>
              </ul>
              <div className="navbar_img">
                <img className="img_endow" src={search} />
                <img className="img_endow" src={user} />
                <img className="img_endow" src={carts} />
              </div>
            </nav>

          </div>


        </header>
      </div>
    </>
  );
};

export default Navbar;