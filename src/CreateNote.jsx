import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
const CreateNote=(props)=>
{
    const[expand,setExpand]=useState(false);
    const[note,setNote]=useState({
        title:"",
        content:""
    });
    const InputEvent=(event)=>
    {
        
        const {value,name}=event.target;
        setNote((preData)=>
        {
           return{
            ...preData,
            [name]:value,
           }
        })
        console.log(note);
    }
    const addEvent=()=>
    {
        props.passNote(note);
        setNote({
            title:"",
            content:""
        });
    }
    const expandIt=()=>
    {
        setExpand(true);
    }
    return(
        <>
            <div className="main_note">
                <form>
               { expand ?
                    <input type="text" 
                    name="title"
                    placeholder="Title"
                    onChange={InputEvent}
                    value={note.title}
                    autoComplete='off'/>:null}

                    <textarea rows="" cols=" " 
                    name="content"
                    onChange={InputEvent}
                    value={note.content}
                    placeholder="Write a note..."
                    onClick={expandIt}>
                    </textarea>
                    <Button onClick={addEvent}>
                       <AddIcon className='plus_sign'/>
                    </Button>
                </form>
            </div>
        </>
    );

}
export default CreateNote;