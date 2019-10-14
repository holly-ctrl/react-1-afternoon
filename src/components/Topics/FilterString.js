import React, {Component} from 'react'

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: ['cat', 'dog', 'turtle', 'horse', 'frog', 'gorilla'],
            UserInput: '',
            filteredArray: []
        }
    }

    handleChange(value) {
        this.setState({ 
            userInput: value
         });
      }
    
      filteredArray(userInput) {
        let unFilteredArray = this.state.unFilteredArray
        let filteredArray = []
    
        for ( let i = 0; i < unFilteredArray.length; i++ ) {
          if ( unFilteredArray[i].includes(userInput) ) {
            filteredArray.push(unFilteredArray[i])
          }
        }
    
        this.setState({ 
            filteredArray: filteredArray
         });
      }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Names: { JSON.stringify(this.state.unFilteredArray, null, 10) }</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
                <button className="confirmationButton" onClick={ () => this.filteredArray(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}

export default FilterString 