import React, { Component } from 'react'
import { Input, Form, Button, InputNumber } from 'antd'
import handleChange from 'MIXIN/handleChange'

const FormItem = Form.Item

export default class Haircut extends Component {
    constructor (props) {
        super(props)
        // P.S: 仅能在构造函数中设置 state
        // 在其他地方绝不能使用 this.state.XXX = XXX
        // 只能使用 this.setState({ XXX: XXX })
        this.state = ({ customName: '', amount: 15})
        this.handleChange = handleChange.bind(this)
    }

    handleSubmit (evt) {

    }

    onChange = (value) => {
        this.setState({amount: value})
    }

    render () {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem label="Custom-Name:">
                    <Input name="customName" value={this.state.customName} placeholder="user name" onChange={this.handleChange} required></Input>
                </FormItem>
                <FormItem label="Amount:">
                    <InputNumber name="customName" value={this.state.amount} onChange={this.onChange} required className="width100"></InputNumber>
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="width100">Submit</Button>
                </FormItem>
            </Form>
        )
    }
}
