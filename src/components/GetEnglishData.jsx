import React, { Component } from 'react';
import {Icon, Label, Menu, Table} from 'semantic-ui-react';

const style = <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css' />

class GetEnglishData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/todos/')
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 items: result
        //             });

        //         },
        //         (error) => {
        //             this.setState({
        //                 isLoaded: true,
        //                 error
        //             });
        //         }
        //     )

            fetch('http://localhost:8081/england/all')
            // fetch('http://localhost:8081/england/1')
            // fetch('http://vagrant-test.local.com:8080/england/1')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        console.log('items', items);



        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {style}

                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Team id</Table.HeaderCell>
                                <Table.HeaderCell>Team name</Table.HeaderCell>
                                <Table.HeaderCell>Score</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {items.map(row => {
                                return (
                                    <Table.Row key={row.teamId}>
                                        <Table.Cell>{row.teamId}</Table.Cell>
                                        <Table.Cell>{row.teamName}</Table.Cell>
                                        <Table.Cell>{row.teamScore}</Table.Cell>
                                    </Table.Row>
                                );

                            })}
                                    {/* <Table.Row key={items.teamId}>
                                        <Table.Cell>{items.teamId}</Table.Cell>
                                        <Table.Cell>{items.teamName}</Table.Cell>
                                        <Table.Cell>{items.teamScore}</Table.Cell>
                                    </Table.Row> */}
                                
                                   
                               
                        </Table.Body>
                    </Table>
                </div>


            );
        }
    }
}

export default GetEnglishData;