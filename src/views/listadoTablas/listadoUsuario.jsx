
import ReactTable from "../../components/ReactTable/reactTable";

const Listado = () => {
  
      const COLUMNAS = [
        {
          Header: 'Nombre',
          accessor: 'name',
        },
        {
          Header: 'Apellido',
          accessor: 'apellido',
        },
        {
          Header: 'Edad',
          accessor: 'edad',
        },
      ]

      const listadoTablas = [
        {name:"leonardo", apellido:"chavesta", edad:23},
        {name:"leonardo", apellido:"chavesta", edad:23},
        {name:"leonardo", apellido:"chavesta", edad:23},
        {name:"leonardo", apellido:"chavesta", edad:23},
        {name:"leonardo", apellido:"chavesta", edad:23},
        {name:"leonardo", apellido:"chavesta", edad:23},
        {name:"leonardo", apellido:"chavesta", edad:23},
        {name:"leonardo", apellido:"chavesta", edad:23},
        {name:"leonardo", apellido:"chavesta", edad:23},
        {name:"leonardo", apellido:"chavesta", edad:23},
        {name:"leonardo", apellido:"chavesta", edad:23},
    
      ]

console.log("DEtalke")

    return(
        <>
        
        <ReactTable 
        
        columns={COLUMNAS}
        data={listadoTablas || []}
        
        />
        </>
    );
}
export default Listado