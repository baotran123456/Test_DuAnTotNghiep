import './Endow.css';

import bao from '../hinhanh/bao.jpg'
import logo from '../hinhanh/logo.png'
function App() {
  const uudai = [
    {
      id: 1,
      name: 'Top 6 nóm đồ 2hand không nên mua',
      mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
    },
    {
      id: 1,
      name: 'Top 6 nóm đồ 2hand không nên mua',
      mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
    },
    {
      id: 1,
      name: 'Top 6 nóm đồ 2hand không nên mua',
      mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
    },
    {
      id: 1,
      name: 'Top 6 nóm đồ 2hand không nên mua',
      mota: 'Hệ Cao đẳng thực hành thuộc Đại học FPT, còn gọi là FPT Polytechnic, được thực hiện đào tạo và cấp bằng Cao đẳng nghề theo Quyết định của Tổng cục dạy nghề bắt đầu từ ngày 01/07/2010. Trường hướng tới mục tiêu cung cấp kỹ năng nghề nghiệp chất lượng cao cho người học, đảm bảo được tính cạnh tranh trong môi trường phát triển ngày càng cao.',
    }
  ]

  return (

    <body >

      
      <div className="title">
        <div className="title_header">
          <h2>Tin tức & Ưu đãi</h2>
        </div>
        <div className="title_list">
          <div >
            {uudai.map(uudai =>
              <div className="title_list_cottom">
                <img src={bao}></img><p>{uudai.name}</p>
                <p>{uudai.mota}</p>
                <button>Đọc Thêm</button>
              </div>)}
          </div>

        </div>
      </div>
      <div className="hashtag">
        <div className="hashtag_header">
          <div className="hashtag_header--list">
            <p>Hashtag để có cơ hội xuất hiện trên trang chúng tôi</p>
            <img src={bao}></img>
            <img src={bao}></img>
            <img src={bao}></img>
            <img src={bao}></img>
            <img src={bao}></img>
          </div>
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
              <h2>FANPAGE</h2>
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
              <h2>Chính sách</h2><br/>
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

export default App;
