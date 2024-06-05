
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseName, chooseEmail, chooseJobTitle, choosePhone, chooseBreed, chooseDogName } from "../redux/slices/RootSlice"

interface ContactFormProps {
  name: any
  //id?: string[]
}

function ContactForm(props: ContactFormProps) {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch()
  const store = useStore()

  const onSubmit = (data: any, _event: any) => {
    console.log(`Name: ${typeof props.name}`)
    console.log(props.name)
    console.log(data)
    if (props.name && props.name.length > 0) {
      server_calls.update(props.name[0], data)
      console.log(`Updated: ${data.first} ${props.name}`)
    } else {
      dispatch(chooseName(data.name))
      dispatch(chooseEmail(data.email))
      dispatch(choosePhone(data.phone_number))
      dispatch(chooseJobTitle(data.job_title))
      dispatch(chooseBreed(data.breed))
      dispatch(chooseDogName(data.dog_name))

      server_calls.create(store.getState())
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Contact Name</label>
          <Input {...register('name')} name='name' placeholder="Name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input {...register('email')} name='email' placeholder="Email" />
        </div>
        <div>
          <label htmlFor="phone_number">Phone Number</label>
          <Input {...register('phone_number')} name='phone_number' placeholder="Phone Number" />
        </div>
        <div>
          <label htmlFor="job_title">Job Title</label>
          <Input {...register('job_title')} name='job_title' placeholder="Job Title" />
        </div>
        <div>
          <label htmlFor="breed"></label>Breed
          <Input {...register('breed')} name='breed' placeholder="Breed" />
        </div>
        <div>
          <label htmlFor="dog_name">Dog name</label>
          <Input {...register('dog_name')} name='dog_name' placeholder="Dog_Name" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3  bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm   