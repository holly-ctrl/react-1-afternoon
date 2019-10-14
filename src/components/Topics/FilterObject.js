import React, {Component} from 'react'

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unfilteredArray: [
                {
                    name: 'Kanye West',
                    major: 'art',
                    age:32
                },
                {
                    name: 'Miley Cyrus',
                    grade: 99,
                    age: 25
                },
                {
                    name: 'jp',
                    title: 'Doctor'
                }
            ],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value) {
        this.setState({
            userInput: value
        })
    }

    filteredArray(prop) {
        let unfilteredArray = this.state.unfilteredArray
        let filteredArray = []

        for(let i =0; i < unfilteredArray.length; i++) {
            if (unfilteredArray[i].hasOwnProperty(prop)) {
                filteredArray.push(unfilteredArray[i])
            }
        }
        this.setState({
            filteredArray: filteredArray
        })
    }


    
    render() {
        return (
           <div className='puzzleBox filterObjectPB'>
               <h4>Filter Objects</h4>
               <span className='puzzleText'>Original: { JSON.stringify(this.state.unfilteredArray, null, 10) }</span>
               <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value) }/>
               <button className='confirmationButton' onClick={ () => this.filteredArray(this.state.userInput) }>Filter</button>
               <span className='resultsBox filterObjectRB'>Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
           </div>
        )
    } 
}

export default FilterObject