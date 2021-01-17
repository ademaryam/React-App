import React, { Component } from 'react'
import NewProgrammer from './newProgrammer'
import { Collapse,Table,Row,Col,Container,Button,Card,CardText,CardTitle } from 'reactstrap'
import index from './index'

const smallbtn={
    backgroundColor:'red',
    width:'300px'
}

 class StoreShow extends Component {
    state={
        programmers:[],
        isOpen:false
    }

    delProgrammer=(id)=>{
        let remainingProgrammers=this.state.programmers.filter((programmer)=>{
            return programmer.id!==id
        })
        this.setState({
            programmers:remainingProgrammers
        })
    }

    addProgrammer=(programmer)=>{
      programmer.id=Math.random()
      let newProgrammerList=[...this.state.programmers,programmer]
      this.setState({
          programmers:newProgrammerList,
      })
    }

    toggle = () => {
        this.setState({
            ...this.state,
            isOpen:!this.state.isOpen
        }
        )
    }

    smallScreen=()=>{
        const data=this.state.programmers.map((programmer)=>{
            return (
                <Col key={programmer.id} xs="12" sm='12' md='12'>
                    <Collapse isOpen={this.state.isOpen}>
                        <Card body>
                        <CardText>
                            Name: {programmer.name}
                            <br/>
                            email: {programmer.email}
                            <br/>
                            level:{programmer.level}
                            <br/>
                            country: {programmer.country}
                            <br/>
                        </CardText>
                        <Button  onClick={()=>this.delProgrammer(programmer.id)} style={smallbtn}>Delete Programmer</Button>
                        </Card>
                    </Collapse>
                </Col>
            )
        })
        return data
    }


    render() {
        return (
            <div>

                <NewProgrammer addProgrammer={this.addProgrammer}/>
                <Container style={{marginTop:'50px'}} >
                <Row className=' large'>
                        <Table dark>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Level</th>
                                    <th>Country</th>
                                </tr>
                            </thead>
                            
                                <Output programmers={this.state.programmers} delProgrammer={this.delProgrammer}/>
                        
                        </Table>
                </Row>
                <div className='row small'>
                    <Button color='primary' block onClick={this.toggle}>Tap to see Programmers that signed up</Button>
                    {this.smallScreen()}
                </div>


                </Container>

            </div>
        )
    }
}


export default StoreShow