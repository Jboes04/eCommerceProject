import React, { Component } from 'react';
// import {Button}
//import { connect } from "react-redux";
//import { checkRemoveHandler } from "./../../store/todo/handlers";
import './../../App.css';

const fetch = require("node-fetch");
const test = [{"id":"82830e66-b439-4fef-ade8-abb4dce54e6e","decathlon_id":8282689,"title":"Corne chasse 14cm","description":"annoncer des phases de chasse en battue.","brand_id":"afa9cfe1-f517-41f0-87d9-6c7b58ef1c13","min_price":9.99,"max_price":null,"crossed_price":0,"percent_reduction":0,"image_path":"828/8282689/zoom_52fc3fd48aac4f30a127e90388958eb6.jpg","rating":3},{"id":"6e9accf7-7184-45c9-9412-85bcffc2ca77","decathlon_id":8354464,"title":"Basic L print Long Gold Fusion","description":"les pratiquants de sports nautiques qui souhaitent se sécher, se changer et se reposer au bord de l’eau ou à la plage.","brand_id":"05d90df9-16ea-403f-8404-d0ffd421cb24","min_price":9.99,"max_price":null,"crossed_price":0,"percent_reduction":0,"image_path":"835/8354464/zoom_726db88653a94070ab9e6eef0bd48218.jpg","rating":4.4},{"id":"2878886d-06f6-4642-b8df-bf3f7c8f175d","decathlon_id":8380024,"title":"RUN ELIOPRIME","description":"les femmes qui courent sur route jusqu'à une heure, entre une et trois fois par semaine","brand_id":"848722a7-70e6-4104-93f7-d9cb3983df33","min_price":54.99,"max_price":null,"crossed_price":0,"percent_reduction":0,"image_path":"838/8380024/zoom_91ca0de2c2754b58893eda67c2eacef1.jpg","rating":0},{"id":"2bff151d-a8b7-4d06-bfb3-dee5f5d36d79","decathlon_id":8379970,"title":"Pantalon Gym","description":"Rester au chaud avant,pendant et après sa séance de Gym & Pilates","brand_id":"8741ff21-c1a4-4d17-9e0d-0c14a4e5d6ab","min_price":12.99,"max_price":null,"crossed_price":0,"percent_reduction":0,"image_path":"837/8379970/zoom_15d0f630-0afd-4461-a664-84d0253c92b2.jpg","rating":5},{"id":"c32af335-9b5c-4fb6-b64e-14198af25055","decathlon_id":8247793,"title":"PALMES WADERS","description":"la pêche aux leurres en eau douce en float tube.","brand_id":"99d6679c-93f5-470f-81a3-efdff906e685","min_price":24.99,"max_price":null,"crossed_price":0,"percent_reduction":0,"image_path":"824/8247793/zoom_c86c08a85a3d4e5ea93b07294416b84f.jpg","rating":2.5},{"id":"8e5e59d6-25fd-4319-9d66-607c6e5921dd","decathlon_id":8357549,"title":"MINIMIZER EDEN UNI  NOIR","description":"la pratiquante loisir des sports d’eau. Du 90D au 105 F.","brand_id":"05d90df9-16ea-403f-8404-d0ffd421cb24","min_price":19.99,"max_price":null,"crossed_price":0,"percent_reduction":0,"image_path":"835/8357549/zoom_95b2bb2a5e89481c87902c4354eef403.jpg","rating":3.6},{"id":"a0f8c385-30eb-451f-b6da-bf46e4f4506c","decathlon_id":8326155,"title":"Pantalon Training mesh marine","description":"la cavalière RÉGULIÈRE montant 2 à 3 fois par semaine par TEMPS CHAUD.  ","brand_id":"a60f1b12-c60e-4d21-b114-0a11a856708f","min_price":44.99,"max_price":null,"crossed_price":0,"percent_reduction":0,"image_path":"832/8326155/zoom_35809adfd4194b7ebce5c051bf2d00c6.jpg","rating":4.2},{"id":"3306a0cd-4053-4710-ad78-c6d0fa860f58","decathlon_id":8329121,"title":"COUTEAU A PALOURDES","description":"la pêche à pied de la palourde en mer.","brand_id":"41002ff0-1d0d-4e8e-80ea-d9fb43a8720c","min_price":4.99,"max_price":null,"crossed_price":0,"percent_reduction":0,"image_path":"832/8329121/zoom_0f910b20bc8b45329e9bc6aaf97c637d.jpg","rating":0},{"id":"569df668-0c2c-4502-b043-c7e823d17169","decathlon_id":8370749,"title":"Doudoune Hike 100 garçon bleu","description":"protéger votre enfant du froid en randonnée par temps frais.","brand_id":"9dffa1e1-59db-4401-b878-618746c0b58f","min_price":9.99,"max_price":null,"crossed_price":0,"percent_reduction":0,"image_path":"837/8370749/zoom_e0669bab8d604178970b7a028f0be4d6.jpg","rating":4.4},{"id":"f345c904-29d8-42bd-8660-cfbd0cbdc4a2","decathlon_id":8298354,"title":"OREILLER CONFORT","description":"dormir en CAMPING ou en RANDONNEE.","brand_id":"9dffa1e1-59db-4401-b878-618746c0b58f","min_price":6.99,"max_price":null,"crossed_price":0,"percent_reduction":0,"image_path":"829/8298354/zoom_02170605ee5d4dd5a7329e83f75204ee.jpg","rating":4.1},{"id":"6b53dd6a-2039-42f6-8ed2-d85c569d5169","decathlon_id":8044622,"title":"2 guêtres RIDING noir","description":"le cheval travaillant RÉGULIÈREMENT sur le plat et à l'obstacle.","brand_id":"a60f1b12-c60e-4d21-b114-0a11a856708f","min_price":14.99,"max_price":null,"crossed_price":0,"percent_reduction":0,"image_path":"804/8044622/zoom_0c2c8cd236fa412c9519a19ef1e8798b.jpg","rating":4.1},{"id":"44829010-1d0c-4366-a9ce-205b8d0a47f1","decathlon_id":8249674,"title":"BOBINE FUN 2 3 4mm X 40 20 12m","description":"tous types de matelotage","brand_id":"05d90df9-16ea-403f-8404-d0ffd421cb24","min_price":6.99,"max_price":null,"crossed_price":0,"percent_reduction":0,"image_path":"824/8249674/zoom_171fd9e3f7ee4a32aed6e2511aaee5b8.jpg","rating":4.5}];

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "categories": []
    }
  }

  // componentDidMount(){
  //   fetch("https://decath-product-api.herokuapp.com/products")
  //     .catch((error) => {
  //       console.warn(error);
  //     })
  //     .then((response) => response.json())
  //     .then(resp => {
  //       this.setState({categories: resp})
  //     });
  // }
  render() {

    // console.log("it is", this.state);
    return (
      <div>
      {
        // this.state.categories.map(product => {
        //   return (<li key={product.id}><a href="/{product.id}" >{product.title}</a>  <button onClick={this.props.addToCart(product.id)}>Add to cart</button></li>)
        // })
        test.map(product => {
          return (<li key={product.id}><a href="/{product.id}" >{product.title}</a>  <button id={product.id} onClick={this.props.addToCart}>Add to cart</button></li>)
        })
      }
      </div>
    );
  }
}
