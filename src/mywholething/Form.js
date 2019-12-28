import React from "react";
import { connect } from "react-redux";
import { addArticle } from "./redux/actions/index";
import { addArticle1 } from "./redux/actions/index";
import './styles/form.scss';

function mapDispatchToProps(dispatch) {
    return {
      addArticle: article => dispatch(addArticle(article)),
      addArticle1: article1 => dispatch(addArticle1(article1)),

    };
  }

class ConnectedForm extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            isFirstColor:true,
            isSecColor:false,
            title: ""     
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }  

      //input-text
      handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
        //[event.target.id] = ?
        //event.target.value => all thing u type
      
    }
      handleSubmit(event) {
        event.preventDefault();
        const { title } = this.state;
        const {isFirstColor} = this.state;
        const {isSecColor} = this.state;
        if(isFirstColor){
          this.props.addArticle({ title });
        }
        if(isSecColor){
          this.props.addArticle1({ title });
        }
        this.setState({ title: "" });

      }


    firstColor=()=> {
        this.setState({
            isSecColor: false,
            isFirstColor:true
        });
        console.log(this.state.isFirstColor)
    }


    secColor=()=> {
        this.setState({
            isFirstColor:false,
            isSecColor: true
            
        });
        console.log(this.state.isFirstColor)
    }


    render() {
        const { title } = this.state;

        return (
        <div className="main-container" >
            
            <form onSubmit={this.handleSubmit}>

                <input type ='text'
                 className="input-text"
                 id="title"
                 placeholder="Type!"
                 value={title}
                 onChange={this.handleChange} 
                />


                <button type="button" 
                className={(this.state.isFirstColor === true ? 'color-first-clicked' : ' color-first')}
                onClick={this.firstColor}>
                this</button>


                <p>or</p>


                <button type="button" 
                className={(this.state.isSecColor === true ? 'color-sec-clicked' : ' color-sec')}
                onClick={this.secColor}>
                this</button>


                <button className=" submit-button" type='submit' >submit!</button>

            </form>
        

        </div>
            )
      }
}


const Form = connect(
    null,
    mapDispatchToProps
  )(ConnectedForm);
  export default Form;
