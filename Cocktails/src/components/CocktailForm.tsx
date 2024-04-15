import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseLiquor, chooseIngredients, chooseTime } from "../redux/slices/RootSlice"

interface CocktailFormProps {
  id?: string[]
}

const CocktailForm = ( props:CocktailFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 401);
      event.target.reset()
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseLiquor(data.liquor));
      dispatch(chooseIngredients(data.ingredients));
      dispatch(chooseTime(data.time));
      

      server_calls.create(store.getState())
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <Input {...register('name')} name='name' placeholder="Name" />
        </div>
        <div>
          <label htmlFor="liquor">Liquor</label>
          <Input {...register('liquor')} name='liquor' placeholder="Liquor" />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredients</label>
          <Input {...register('ingredients')} name='ingredients' placeholder="Ingredients" />
        </div>
        <div>
          <label htmlFor="time">Time</label>
          <Input {...register('time')} name='time' placeholder="time" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CocktailForm