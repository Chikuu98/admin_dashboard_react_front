import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: 'id',
  headerName: 'ID',
  width: 90,
  editable:false
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt='' />
    }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 200,
    editable: false,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    type: 'string',
    width: 150,
    editable: false,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'verified',
    headerName: 'Verified',
    width: 100,
    type: 'boolean',
    editable:false
  },
];

const Users = () => {

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataTable slug="users"  columns={columns} rows= {userRows}/>
    </div>
  )
}

export default Users