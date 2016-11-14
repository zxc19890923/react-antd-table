import React from "react";
import {Row, Col, Carousel, Table} from "antd";
import $ from "jquery";
var About = React.createClass({
    getInitialState() {
        return {
            data: [],
            columns: [
            {
                title: 'Id',
                dataIndex: 'id',
                key: 'id',
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: "钱数",
                dataIndex: "money",
                key: "money"
            },
            {
                title: "连接",
                dataIndex: "url",
                key: "url",
                render: url => <a href={url}>连接</a>,
            }
        ]
    }
    },
    componentDidMount() {
        $.get(
            "data.json",
            function (result) {
                if (this.isMounted()) {
                    this.setState({
                        data: result
                    })
                }
            }.bind(this)
        );
    },
    render() {
        return (
            <div>
                <Row>
                    <Col span="12">
                        <Carousel>
                            <div>
                                <img src="./images/iphone4.jpg" width="100%"/>
                            </div>
                            <div>
                                <img src="./images/iphone5.jpg" width="100%"/>
                            </div>
                            <div>
                                <img src="./images/iphone6.jpg" width="100%"/>
                            </div>
                            <div>
                                <img src="./images/beats.jpg" width="100%"/>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span="12">
                        <Table columns={this.state.columns} dataSource={this.state.data}>

                        </Table>
                    </Col>
                </Row>
            </div>
        )
    }
});
export default About;
