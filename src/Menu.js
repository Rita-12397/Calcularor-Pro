import react, {Component} from "react";
import './Menu.css';
class Menu extends Component{
constructor(props){
    super(props);
}
render(){
    return(
        <div className="header">
          <div>{this.props.home}</div>
          <div>{this.props.aboutUs}</div>
          <div>{this.props.contactUs}</div>          
        </div>
    );
};
}
export default Menu;