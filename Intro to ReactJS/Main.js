import React ,{Component} from'react';
import './MainStyle.css';

class Main extends Component {



    render() {

        return (


        <main>
             Main

        <button className="btn" onClick={this.props.countbtn}> Click me</button>

        </main>


        )

    }

}
export default Main;

