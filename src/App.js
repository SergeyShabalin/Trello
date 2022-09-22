import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import UiKit from "./components/basic/UiKit";
import Main from "./app/main/Index";
import PropTypes from 'prop-types';
import './App.css';
import Select from "./components/basic/select/Select";
import Button from "./components/basic/button/Button";

//Todo: 1. onChange value, name
// 2. default values
// 3. Proptypes

function App() {

// const [form, setForm] = useState({name: ''})
// const selectValue = [
//     {id: 1, value: 'item value 1'},
//     {id: 2, value: 'item value 2'},
//     {id: 3, value: 'item value 3'},
//     {id: 4, value: 'item value 4'},
//     {id: 5, value: 'item value 5'},
//     {id: 6, value: 'item value 6'}]
//
//     function submit(e){
//         e.preventDefault()
//     }
//
//     function onChange(e){
//         if(e.target){
//             setForm( (prev) => ({
//                 ...prev,[e.target.name]: e.target.value
//             }))}
//
//       else  setForm( (prev) => ({
//                 ...prev,[e.name]: e.value
//             }))
//     }
//
//     console.log(form)
        return (
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/ui" element={<UiKit/>}/>

                {/*<form onSubmit={submit}>*/}
                {/*    <input value={form.name} onChange={onChange} name='name'/>*/}
                {/*    <input onChange={onChange} name='surname'/>*/}
                {/*    <input onChange={onChange} name='test'/>*/}
                {/*    <select*/}
                {/*        name='select'*/}
                {/*        onChange={onChange}*/}
                {/*    >*/}
                {/*        <option value={2}>апоорлро</option>*/}
                {/*        <option>2</option>*/}
                {/*        <option>3</option>*/}
                {/*        <option>4</option>*/}
                {/*    </select>*/}

                {/*    <Select*/}
                {/*        name='test select 2'*/}
                {/*        defaultValue='test select 2'*/}
                {/*        values={[selectValue[0],selectValue[1], selectValue[2]]}*/}
                {/*        onChange={onChange}/>*/}

                {/*    <Select*/}
                {/*        variant='outlined'*/}
                {/*        values={[selectValue[3],selectValue[4], selectValue[5]]}*/}
                {/*        onChange={onChange}/>*/}

                {/*    <button type='submit'>submit</button>*/}
                {/*</form>*/}
            </Routes>
        );
}

export default App;
