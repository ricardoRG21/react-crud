import React, {Component} from 'react';
export default class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre:'',
            apellidop:'',
            apellidom:''
        }
        this.onChangeVal = this.onChangeVal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeVal(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        });
    }
    onSubmit(ev){
        ev.preventDefault();
        alert(`valores: ${this.state.nombre} ${this.state.apellidop} ${this.state.apellidom}`);
        this.setState({
            nombre:'',
            apellidop:'',
            apellidom:''
        });
    }
    render(){
        return(
            <div style={{marginTop:10}}>
                <h3>Agregar Registro</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Nombre: </label>
                        <input 
                            name='nombre'
                            value={this.state.nombre}
                            onChange={this.onChangeVal}
                            type='text' 
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <label>Apellido Paterno: </label>
                        <input 
                            name='apellidop'
                            value={this.state.apellidop}
                            onChange={this.onChangeVal}
                            type='text' 
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <label>Apellido Materno: </label>
                        <input 
                            name='apellidom'
                            value={this.state.apellidom}
                            onChange={this.onChangeVal}
                            type='text' 
                            className='form-control'
                        />
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Registrar' className='btn btn-primary'/>
                    </div>
                </form>
            </div>
        )
    }
}