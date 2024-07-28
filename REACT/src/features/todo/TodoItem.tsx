import { useState } from "react";
import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import { mdiTrashCanOutline } from '@mdi/js';
import { mdiNoteEditOutline } from '@mdi/js';
import { EditTodo } from "./editTodo";


interface TodoItemProps {
    itemNo: number;
    id: number;
    content: String;
    count: number;
    onComplete: () => void;
    onRemove: () => void; // function to remove the item from the list.  // (e) => { setItemList(itemList.filter(i => i!==props.item)) }  // OR props.onRemove()
}

export function TodoItem(props: TodoItemProps) {

    const [edit, setEdit] = useState(false);

    return (
        <div className="item-list">
            {edit ?
                <EditTodo
                    key={props.id}
                    id={props.id}
                    content={props.content}
                    editStatus={edit}
                    onEdit={() => setEdit(!edit)}
                />
                :
                <>
                    <button className="item-btn btn" onClick={props.onComplete}><Icon path={mdiCheck} size={1} /></button>
                    {/* <button className="item-btn remove-btn btn" onClick={() => { setEdit(!edit) }}><Icon path={mdiNoteEditOutline} size={1} /></button> */}
                    <button className="item-btn remove-btn btn" onClick={props.onRemove}><Icon path={mdiTrashCanOutline} size={1} /></button>
                    <span className="item-content">
                        <span className={"todoId-" + props.id.toString()}>{props.itemNo}. {props.content}</span>
                        <span>( {props.count} )</span>
                    </span>
                </>
            }

        </div>
    )
}