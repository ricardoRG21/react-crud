import React,{Component} from 'react';
class TableRow extends Component {
    render(){
        return(
            <tr>
                <td>
                    {this.props.obj.nombre}
                </td>
                <td>
                    {this.props.obj.apellidop}
                </td>
                <td>
                    {this.props.obj.apellidom}
                </td>
                <td>
                    <button className='btn btn-primary'>Editar</button>
                </td>
                <td>
                    <button className='btn btn-danger'>Borrar</button>
                </td>
            </tr>
        )
    }
}
export default TableRow;