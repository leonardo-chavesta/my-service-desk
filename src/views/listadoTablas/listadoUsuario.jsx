import ReactTable from "../../components/ReactTable/ReactTable"
    const Listado = () => {

            const COLUMNAS = [
                {
                    Header: 'Nombre',
                    accessor: 'name',
                } ,
                {
                    Header: 'Descripcion',
                    accessor: 'descripcion',
                },
                { 
                    Header: 'Fecha de creacion',
                    accessor: 'fechadecreacion',

                },
            ]

            const listadoTablas = [
                {name:"Juan", descripcion:"impresora con falla", fechadecreacion: "18 - 02 - 20"},
                {name:"Luis", descripcion:"impresora con falla", fechadecreacion: "28 - 05 - 21"},
                {name:"David", descripcion:"impresora con falla", fechadecreacion: "20 - 02 - 20"},
                {name:"Fabian", descripcion:"impresora con falla", fechadecreacion: "05 - 01 - 21"},
                {name:"Jesus", descripcion:"impresora con falla", fechadecreacion: "15 - 10 - 21"},
                {name:"Fabricio", descripcion:"impresora con falla", fechadecreacion: "19 - 04 - 20"},
                {name:"Cristhian", descripcion:"impresora con falla", fechadecreacion: "22 - 11 - 20"},
                {name:"Gabriel", descripcion:"impresora con falla", fechadecreacion: "10 - 08 - 21"},

            ]


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