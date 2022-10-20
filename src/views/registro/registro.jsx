import './estiloRegistro.css'
import city from '../../templates/img/city.jpg'
import { Link, Routes, Route } from 'react-router-dom'
import Login from '../login/login'


const Registro = () =>{
    return(
      <div className="container-sm">
        <><div className="col-lg-6 bg-indigo text-white ">
        <div className="p-5">
         
          <div className="mb-4 pb-2">
            <div className="form-outline form-white">
              <input type="text" id="form3Examplea3" className="form-control form-control-lg" />
              <label className="form-label" for="form3Examplea3"> Apellidos y Nombres </label>
            </div>
          </div>
          <div className="row">
            <div className="mb-4 pb-2">
              <div className="form-outline form-white ">
                <input type="text" id="form3Examplea5" className="form-control form-control-lg" />
                <label className="form-label" for="form3Examplea5">Nombre De la Empresa<noscript></noscript></label>
              </div>
            </div>
          </div>

          <div className="pb-2 col-md-7 mb-4 pb-2">
            <div className="form-outline form-white">
              <input type="text" id="form3Examplea6" className="form-control form-control-lg" />
              <label className="form-label" for="form3Examplea6">Ciudad</label> 
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 mb-4 pb-2">

              <div className="form-outline form-white">
                <input type="text" id="form3Examplea7" className="form-control form-control-lg" />
                <label className="form-label" for="form3Examplea7">Dirreción</label>
              </div>

            </div>
            <div className="col-md-7 mb-4 pb-2">

              <div className="form-outline form-white">
                <input type="text" id="form3Examplea8" className="form-control form-control-lg" />
                <label className="form-label" for="form3Examplea8">Numero de telefono</label>
              </div>

            </div>
          </div>

          <div className="mb-4">
            <div className="form-outline form-white">
              <input type="text" id="form3Examplea9" className="form-control form-control-lg" />
              <label className="form-label" for="form3Examplea9">@email</label>
            </div>
          </div>
          <div className='d-grid'>
          <button type="button" className="btn btn-secondary btn-lg"
          ><p className="">Registrate</p></button></div>

        </div>
        </div><br /><br /><br /><br /><br /></>
      </div>

       
// style={{marginRight: spacing + 'em'}}

    )
}
export default Registro