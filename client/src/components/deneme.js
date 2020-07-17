import React, { Component } from 'react'
import axios  from 'axios'
const initialState={
    username:"",
    password:"",


};

 class deneme extends Component {
    state= initialState ;
    
    handleChange= (e) => {
        this.setState({
           [e.target.name] : e.target.value ,
        })
    };
    handleSubmit =(e) => {
        e.preventDefault();
        
        console.log(this.state);
        this.setState(initialState);
           
          
          
        axios({
                url: '/api/user',
                method: 'POST',
                data: this.state,
                                
              })
                .then(() => {
                  console.log('user verisi gönderildi');
                  
                  
                  
                })
                .catch(() => {
                  console.log('Internal server error');
                });;
        
        
    };
    render() {
        return (
            <div className="Form">
                <div className="row">
                    <div className="col-6">
                        <div className="section-title">
                    
                            <h3>
                            İletişim Formu
                            </h3>
                            <p>
                            Size geri dönüş yapmamız için lütfen bilgilerinizi doğru giriniz 
                            </p>
                        </div>
                    </div>
                </div>
            <form onSubmit={this.handleSubmit} className="col-md-12 ofset-md-2">
                <div>  
                    <label>
                    Ad Soyad
                    </label>
                </div>
                <div>    
                    <input type="text" name="username" value={this.state.username}  onChange={ this.handleChange } />
                    
                </div>
                
                <div>  
                    <label>
                   Sifre
                    </label>
                </div>
                
                <div>    
                    <input type="password" name="password" value={this.state.password} onChange={ this.handleChange}/ >
                    
                </div> 
                <div>
                <button Type="submit">Kayıt</button>
                 </div>
                      
            </form> 
        </div>
        )
    }
}
export default deneme ; 
