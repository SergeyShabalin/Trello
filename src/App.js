import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import UiKit from "./components/basic/UiKit";
import Main from "./app/main/Index";
import './App.css';
import Select from "./components/basic/select/Select";

//Todo: 1. onChange value, name
// 2. default values
// 3. Proptypes


function App() {
const [form, setForm] = useState({name: ''})
    const submit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }
    const onChange = (e) => {

        console.log(e.current)
        setForm( (pre) => ({
        ...pre,
        // [e.target.name]: e.target.value так снизу работает с кастомным
            [e.name]: e.value
        }))
    }

    console.log(form)
        return (
            // <Routes>
            //     <Route path="/" element={<Main/>}/>
            //     <Route path="/ui" element={<UiKit/>}/>

                <form onSubmit={submit}>
                    <input value={form.name} onChange={onChange} name='name'/>
                    <input onChange={onChange} name='surname'/>
                    <input onChange={onChange} name='test'/>
                    <select
                        name='select'
                        onChange={onChange}
                    >
                        <option value={2}>апоорлро</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>

                    <Select
                        name='test select 2'
                        defaultValue='test select 2'
                        values={[{id: 4, value: 'itemvalue4'},
                            {id: 5, value: 'itemvalue5'},
                            {id: 6, value: 'itemvalue6'}]}
                        onChange={onChange}/>

                    <button type='submit'>submit</button>
                </form>
            // </Routes>
        );
}

export default App;
