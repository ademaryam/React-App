import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap'


class NewProgrammer extends React.Component{
    state={
        name:'',
        email:'',
        level:'',
        country:'React'
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
        
        this.props.addProgrammer(this.state)
    }

    render(){
        return(
            <div>
                <Container>
                    <Row>
                        <Col xs='12' md='12' lg='12'>
                            <Form  onSubmit={this.handleSubmit}>
                                <FormGroup>
                                        <Label htmlFor='name'>Name</Label>
                                        <Input onChange={this.handleChange} required={true} type='text' name='name' />
                                </FormGroup>
                                
                                <FormGroup>
                                        <Label htmlFor='email'>Email</Label>
                                        <Input onChange={this.handleChange} type='text' required={true} name='email' />
                                </FormGroup>

                            <FormGroup>
                                <Label htmlFor="Level">Level</Label>
                                <Input type="text" name='level' onChange={this.handleChange} required={true} name = 'level' />
                            </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="">Choose your country</Label>
                                    <Input type="select" name='country' onChange={this.handleChange} required={true} value={this.state.country} >
                                        <option value='London'>London</option>
                                        <option value='Ghana'>Ghana</option>
                                    </Input>
                                </FormGroup>

                                <Button type='submit'>Submit</Button>
                            </Form>
                        </Col>
                        
                    </Row>
                </Container>
           </div>
        )
    }
}

export default NewProgrammer