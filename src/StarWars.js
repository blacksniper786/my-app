import React from "react";

class StarWars extends React.Component {
    constructor(){
        super()
        this.state = {
            loededCharacter: false,
            name: 'Name',
            height : 'height',
            homewolrd: 'homeworld',
            films: ['Films'],
        } 
    }
    getNewCharacter(){
        const randomNumber = Math.round( Math.random() * 82 )
        const url = `https://swapi.dev/api/people/${randomNumber}/`
        fetch(url)
        .then(hmidalbatal => hmidalbatal.json())
        .then(w => 
            {   console.log(data)
                this.setState({
                    loededCharacter: true,
                    name: data.name,
                    height :data.height,
                    homewolrd: data.homeworld,
                    films: data.films
                })
            }
            )
    }
    render(){
        return(
            <div>{
                    this.state.loededCharacter && 
                    <div>
                        <h1>{this.state.name}</h1>
                        <p>{this.state.height} cm</p>
                        <p><a href={this.state.homewolrd}>homewolrd</a> </p>
                        <ul>
                            <li>{this.state.films}</li>
                        </ul>
                    </div>
                }
                <button 
                    type="button" 
                    onClick={()=>this.getNewCharacter()} 
                    className="btn"
                >
                    Randomize character
                </button>
            </div>
        )
    }
}
export default StarWars;