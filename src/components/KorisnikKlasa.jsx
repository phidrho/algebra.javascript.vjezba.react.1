//vjezba PROPS 5.8
import React from "react";

export default class KorisnikKlasa extends React.Component {
    render(){
      const {ime, godine} = this.props;
      return(
        <div>
          <h6>KorisnikKlasa komponenta:</h6>
          <p>Moje ime je {ime} i imam {godine} godina.</p>
        </div>);
    }
    // DRUGA VARIJANTA: (bez mapiranja varijabli)
    // render(){
    //   return(
    //     <div>
    //       <h6>KorisnikKlasa komponenta:</h6>
    //       <p>Moje ime je {this.props.ime} i imam {this.props.godine} godina.</p>
    //     </div>);
    // }
}
