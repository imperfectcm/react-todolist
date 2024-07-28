import Icon from '@mdi/react';
import { mdiCheck } from '@mdi/js';
import { mdiClose } from '@mdi/js';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodoItemContent } from '../../api/todoApi';

interface EditTodoProps {
    id: number;
    content: String;
    editStatus: Boolean;
    onEdit: () => void;
}

export function EditTodo(props: EditTodoProps) {

    const [editedContent, setEditedContent] = useState(props.content.toString());

    const queryClient = useQueryClient();
    const onConfirmedEditTodoItem = useMutation({
        mutationFn: async (data: { id: number, content: String }) => {
            return updateTodoItemContent(data.id, data.content);
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["todoItemsDB"] })
    });

    const confirmEdit = (id: number, content: String) => {
        onConfirmedEditTodoItem.mutate({ id: id, content: content })
        props.onEdit();
    };

    return (
        <span className="edit-item-content">
            <input className="edit-todo" value={editedContent} onChange={(e) => { setEditedContent(e.target.value) }} />
            <button className="edit-btn remove-btn btn" onClick={() => { confirmEdit(props.id, editedContent) }}><Icon path={mdiCheck} size={1} /></button>
            <button className="edit-btn remove-btn btn" onClick={props.onEdit}><Icon path={mdiClose} size={1} /></button>
        </span>
    )
};