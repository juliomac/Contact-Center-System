import React, {Component} from 'react'
import {Launcher} from './index'


export default class Customer extends Component {

    constructor() {
        super();
        this.state = {
            messageList: [],
            newMessagesCount: 0,
            isOpen: true
        };
    }
    _sendMessage(text) {
        if (text.length > 0) {
            const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1
            this.setState({
                newMessagesCount: newMessagesCount,
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                }]
            })
        }
    }
    _onMessageWasSent(message) {
        this.setState({
            messageList: [...this.state.messageList, message]
        })
    }
    _handleClick() {
        this.setState({
            isOpen: !this.state.isOpen,
            newMessagesCount: 0
        })
    }
    componentWillMount(){
        console.log(this.props.match.params.data_company)
    }
    render() {
        return <div>
            <Launcher
                agentProfile={{
                    teamName: 'vKirirom Live Chat',
                    imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
                newMessagesCount={this.state.newMessagesCount}
                handleClick={this._handleClick.bind(this)}
                isOpen={this.state.isOpen}
            />
        </div>
    }
}

