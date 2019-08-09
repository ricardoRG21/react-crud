import React, {Component} from 'react';
import TableRow from './TableRow';
import axios from 'axios';
export default class Index extends Component{
    constructor(props){
        super(props);
        this.state = { datos: []};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/crud').then(response=>{
            this.setState({datos:response.data});
        }).catch(function(error){
            console.log(error);
        });
    }
    tabRow(){
        return this.state.datos.map(function(obj,i){
            return <TableRow obj={obj} key={i} />;
        });
    }
    render(){
        return(
            <div>
                <h3 align='center'>Lista de usuarios</h3>
                <table className='table table-striped' style= {{marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido Paterno</th>
                            <th>Apellido Materno</th>
                            <th colSpan='2' >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.tabRow()}
                    </tbody>
                </table>
            </div>
        )
    }
}