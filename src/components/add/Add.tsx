import { GridColDef } from '@mui/x-data-grid'
import './add.scss'
import {
  useQueryClient,
  useMutation
} from '@tanstack/react-query'

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Add = (props: Props) => {

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => {
      return fetch(`http://localhost:8800/api/${props.slug}s`, {
          method: "post",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            id:111,
            img: "",
            lastName: "Hello",
            firstName: "Chiku",
            email: "example@example.com",
            phone: "34534543",
            createdAt: "01.02.2023",
            verified: true,
          }),
      });
    },
    onSuccess: ()=>{
      queryClient.invalidateQueries([`all${props.slug}s`]);
    }
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
    props.setOpen(false);
  };

  return (
    <div className='add'>
        <div className="modal">
            <span className="close" onClick={()=>props.setOpen(false)}>X</span>
            <h1>Add new {props.slug}</h1>
            <form onSubmit={handleSubmit}>
                {props.columns
                    .filter((item) => item.field !== "id" && item.field !=="img")
                    .map((column)=> (
                        <div className="item">
                            <label>{column.headerName}</label>
                            <input type={column.type}placeholder={column.field} />
                        </div>
                    ))}
                    <button>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Add