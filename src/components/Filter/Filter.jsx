
import { useDispatch} from "react-redux"

import { Wrapper, Label, Input } from "./Filter.styled"

import { filterReducer } from "redux/filter/filterSlice"


export const Filter = () => {

  const dispatch = useDispatch()


  return (
    <Wrapper>
      <Label >Find contacts by name</Label>
      <Input type="text" name='filter' pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={e => dispatch(filterReducer(e.target.value))}
      required />
    </Wrapper>)
}



