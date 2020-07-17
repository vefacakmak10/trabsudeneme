import React , {Component} from 'react'
import trabsu from '../images/trabsu2.jpg'
import trabsu1 from '../images/trabsu3.jpg'
import trabsu2 from '../images/trabsu4.jpg'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Iframe from 'react-iframe'





    


class Start extends Component {
    
    
      
    render() {
       
          
          
        
        return (
        <div>
            <AwesomeSlider >
            <div>
            <img src={trabsu} alt='foto1'/>
            </div>
            <div>
            <img src={trabsu2} alt='foto2'/>
            </div>
            <div>
            <img src={trabsu1} alt='foto3'/>
            </div>
            </AwesomeSlider>
            <div className="container">
            <div className="row">
            <div className="col-12">
                <div className="section-title" >
                    <p> <span style={{fontSize:"2.25rem"}} >Trabsu</span> <span className="alternate" style={{color:"red"}}>Olarak</span></p>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-10 m-auto">
                <div className="blog-post">

                    <div className="post-content" >
                        Şirketin amacı , 696 sayılı Kanun Hükmünde Kararname’nin 126 ncı maddesi ile 27.06.1989 tarihli ve 375 sayılı Kararname’ye eklenen Ek Madde 20 ve 696 sayılı Kanun Hükmünde Kararname’nin Uygulamasına Dair Usul ve Esaslara ilişkin tebliğin 28 inci maddesi doğrultusunda il özel idareleri, belediyeler ile bunların üyesi olduğu mahalli idare birlikleri ve belediye bağlı kuruluşlarında 4734 sayılı Kamu ihale Kanununun 62 nci maddesinin birinci fıkrasının (e) bendi ve Kamu ihale Genel Tebliği 78 nci madde hükümleri kapsamında personel çalıştırılmasına dayalı hizmet alımı yöntemiyle çalıştırılan personelin işçi statüsünde istihdam edebilmesini sağlamaya ve/veya bu kapsamda işçi statüsünde personel çalıştırılmasına dayalı hizmetleri yürütmeye ilişkin işlemleri gerçekleştirmektedir.
                    </div>
                </div>
            </div>

            </div>
            </div>
            <div className="Map">
                <div >
            
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.8946304057663!2d39.712404416112896!3d41.00567942753243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40643c49f2d11c3f%3A0xdcba3298dbcbbef2!2sG%C3%BClbaharhatun%2C%20Narl%C4%B1bah%C3%A7e%20Sk.%2C%2061030%20Ortahisar%2FTrabzon!5e0!3m2!1str!2str!4v1569592049753!5m2!1str!2str"
                width="100%"
                height="450px"
                id="myId"
                className="iFrame"
                display="initial"
                position="relative"
                allowFullScreen/>   
                </div>
                <div className="Adres" >
                <h4>
                İletişim bilgileri
                </h4>
            
                </div>
                </div>
            
        </div>


            
        )
      }   }
      export default Start ;
       

