import React from 'react'

class NewProgrammer extends React.Component{
    state={
        name:'',
        age:null,
        essay:'',
        stack:'React'

    }
    
    render() {
        return(
            <div>
                <div>
                    <label htmFor='name'>Name</label>
                    <input type='text ' name='name'/>
                </div>
                <div>
                    <label htmFor='age'>Name</label>
                    <input type='text ' name='age'/></div>
                <div>
                    <textarea placeholder='tell us about yourself'/></div>
                <div>
                    <select value={this.state}>
                        <option value='Python'>Python</option>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                    </select>
                </div>
            </div>    
        )
    }
}