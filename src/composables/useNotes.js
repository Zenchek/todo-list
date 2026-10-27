import { ref, watch } from 'vue'

const STORAGE_KEY = "todo-notes"

//localStorage.getItem(todo-notes)

function loadFormStorage() {
    try{
        const raw = localStorage.getItem(STORAGE_KEY)
        if (!raw) return {"version": 1, "notes": []}
        const parsed = JSON.parse(raw)
        if(!parsed.notes || !Array.isArray(parsed.notes)){
            return {"version": 1, "notes": []}
        }
        return parsed
    }catch (e) {
        console.error('Ошибка чтение заметок: ', e)
        return {"version": 1, "notes": []}
    }
}

function saveToStorage(data) {
    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch (e) {
        console.error('Ошибка сохранения заметок: ', e)
        alert('Ваша заметка не сохранилась, побробуйте позже.')
    }
}

export function useNotes() {
    const notes = ref(loadFormStorage().notes)
    
    // АвтоСохранение при любом изменении
    watch(notes, (newNotes) => {
        saveToStorage({ version : 1, notes: newNotes})
    }, {deep: true})
    
    function addNote(title) {
        const trimmed = title.trim()
        if (!trimmed) return
        notes.value.push({
            id: crypto.randomUUID(),
            title: trimmed,
            done: false,
            createdAt: new Date().toISOString(),
        })
    }

    function totggelNote(id) {
        const note = notes.value.find(n => n.id === id)
        if (note) note.done = !note.done
    }

    function removeNote(id) {
        notes.value = notes.value.filter(n => n.id === id)
    }

    return{
        notes,
        addNote,
        totggelNote,
        removeNote
    }

}