import React, {Component} from 'react';
import Timer from './timerr';

class Chrono extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            temps:0,
            
                     }
        
                        }


         start = () =>{
        this.x =  setInterval(
                () => {
                  this.setState({
                  temps: this.state.temps + 1000 ,
                             
                               }
                               )              
                      },  
                   1000
                      )

                    }

       

reset = () => 
{
    this.setState({temps : 0})
    this.stop()
}

stop = () => {
    clearInterval(this.x)
}
reset = () => 
{
    this.setState({temps : 0})
    this.stop()
}
                         

    render() { 
        return ( 
            <div>
            <Timer time={this.state.temps} demarrer={this.start} 
                                           pause={this.stop}
                                           initialise={this.reset}/>
            </div>
                                          
                                         
         );
             }
                               }
 

















export default Chrono ;
