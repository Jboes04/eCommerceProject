import React, { Component } from 'react';
import Basket from './Basket';
import { connect } from "react-redux";
import { getProfileInfo} from "../../store/profile/selectors";
import { profileHandler } from "../../store/profile/handlers";



class Navbar extends Component {

  render() {
    let imagePath;
    if(this.props.profileInfo.Paa){
      imagePath = this.props.profileInfo.Paa;
    } else {
      imagePath = "";
    }
    let disconnect = () => {
      this.props.disconnect();
      window.location.reload();
    }

    return (
      <div className="pos-f-t">
      <nav className="navbar navbar-dark bg-primary">
        <div>
        <button className="navbar-toggler shadow" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" style={{borderWidth:1,
        borderStyle:'solid',
        borderColor:'white', height:50, width:80,}}>
          <i className="fas fa-cart-arrow-down"></i>
        </button>
        <a href="/"><button className="navbar-toggler shadow" onClick="window.location.href='/'" type="button" data-toggle="collapse" aria-controls="navbarToggleExternalContent" aria-expanded="false" style={{borderWidth:1,
        borderStyle:'solid',
        borderColor:'white', height:50, width:80, marginLeft:5,}}>
          <i className="fas fa-home"></i>
        </button>
      </a>
      </div>

        {imagePath
          ?<img src={imagePath} alt="" style={{
             borderWidth:1,
             borderStyle:'solid',
             borderColor:'white',
             alignItems:'center',
             paddingLeft:1,
             marginLeft: 40,
             justifyContent:'center',
             width:50,
             height:50,
             backgroundColor:'#fff',
             borderRadius:100,
           }}/>
           :<div/>
         }
          <div>
          {imagePath
            ? <button title="logout" onClick={disconnect} style={{width:120, height:33}}>Sign Out</button>
            : <div className="g-signin2" data-onsuccess="googleConnectCallback" data-theme="primary"/>
          }
          </div>
      </nav>
        <div className="collapse" id="navbarToggleExternalContent" >
          <div className="bg-light p-4">
            <h5 className="text-dark h4">RECAPITULATIF DE VOTRE PANIER</h5>
            <span className="text-muted">Rendre accessible le code au plus grand nombre...</span>
            <Basket connectionFlag={this.props.connectionFlag} />
          </div>
        </div>
      </div>
    );
  }
}

const Connected = connect(getProfileInfo, profileHandler)(Navbar);
export default Connected;
