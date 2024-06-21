import { GoSignOut } from 'react-icons/go'
import { AiOutlinePlus } from "react-icons/ai"
import { MdDeleteForever } from 'react-icons/md'

const arr = [1,2,3]

export default function Home() {
  return (
    <main>
      <div>
        <GoSignOut size={15} />
        <span>Logout</span>
      </div>
      <br />
      <br />
      <div>
        <div>
          <div>
            <span>Organize your life and work</span>
            <h1>To Do List</h1>
          </div>
          <div>
            <input type="text" placeholder='Add new todo' autoFocus />
            <button><AiOutlinePlus size={30} /></button>
          </div>
        </div>

        <div>
          {arr.map((todo, index) => (
            <div key={`todo-${index}`}>
              <input id={`todo-${index}`} type='text' />
              <label htmlFor={`todo-${index}`}>Your todo list</label>
              <div>
                <MdDeleteForever size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}
