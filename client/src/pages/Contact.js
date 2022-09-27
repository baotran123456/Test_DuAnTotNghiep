import './Endow.css'
import Iframe from 'react-iframe'
import logo from '../hinhanh/logo.png'
function Contact() {
  return (

    <body>
      <div className="title">
        <div className="title_header">
          <h2>Liên hệ</h2>
        </div>
        <div className="title_container">
          <div className="title_container--text">
            <p className="CT">CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</p>
            <div className="title_container--text--name">
              <p id="name">Tên quốc tế</p>
              <p >CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</p><br />
              <p id="name">Tên quốc tế</p>
              <p >CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</p><br />
              <p id="name">Tên quốc tế</p>
              <p >CÔNG TY TNHH SẢN XUẤT ĐẦU TƯ TM DV XNK VŨ GIA GROUP</p><br />
            </div>
          </div>
          <div className="title_container--input">
            <input type="text" name="search" placeholder="Họ và tên" />
            <input type="text" name="search" placeholder="Email" />
            <input type="text" name="search" placeholder="Điện thoại" />
            <input type="text" name="search" placeholder="Địa chỉ" />
            <input id="container" type="text" name="search" placeholder="Nội dung" />
            <button > Gửi</button>
          </div>

        </div>
        
      </div>
      <div class="bando">
        <div className='bando_khobau'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210063.33014376528!2d105.6389760715208!3d9.804323603329172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a089b78ddc936b%3A0x8e8d46a009e63c4e!2zU0hPUCBUSOG7giBUSEFPIFTDglkgxJDDlCBTUE9SVA!5e0!3m2!1svi!2s!4v1663951607719!5m2!1svi!2s"
             ></iframe>
            </div>
            
        </div>
      <div className="footer">
        <div className="footer_container">
          <img src={logo} />
          <br />
          <input></input>
          <br />
          <div className="footer_container--page" >
            <div className="footer_container--page--page">
              <h2>FANPAGE</h2><br/>
              <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="331" ></iframe>
            </div>
            <div className="footer_container--page--company" >
              <h2>Công ty TNHH SẢN XUẤT ĐẦU TƯ
                TM DV XNK VŨ GIA GROUP</h2>
              <p>840/20B Hương Lộ 2, Phường Bình Trị Đông A,
                Quận Bình Tân, Thành phố Hồ Chí Minh, Việt Nam</p>
              <p>(84+) 706 185 986</p>
              <p>vagabonds.2hand@gmail.comt</p>
            </div>
            <div className="footer_container--page--we" >
              <h2>Về chúng tôi</h2><br></br>
              <p>Giới thiệu</p>
              <p>Sản phẩm</p>
              <p>Ưu đãi</p>
              <p>Liên hệ</p>
            </div>
            <div className="footer_container--page--policy" >
              <h2>Chính sách</h2><br />
              <p>Chính sách bảo mật</p>
              <p>Chính sách đổi trả</p>
              <p>Chính sách bảo hành </p>
              <p>Chính sách giao hàng</p>
            </div>

          </div>
        </div>
      </div>
    </body>

  );
}

export default Contact;
