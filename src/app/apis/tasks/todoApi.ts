import { db } from "@/config/firebase.config";
import { Todo } from "@/interfaces/todo.interface";
import { collection, addDoc, getDoc, getDocs, updateDoc, deleteDoc, doc, query, where } from "firebase/firestore";

// Create a new todo
export const addTodos = async (todo: Omit<Todo, 'id'>): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, "todos"), todo);
    return docRef.id;
  } catch (error) {
    console.error("Error adding todo:", error);
    throw error;
  }
};

// Read a single todo
export const getTodo = async (todoId: string): Promise<Todo | null> => {
  try {
    const todoDoc = await getDoc(doc(db, "todos", todoId));
    if (todoDoc.exists()) {
      return { id: todoDoc.id, ...todoDoc.data() } as Todo;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting todo:", error);
    throw error;
  }
};

// Read all todos for a user
export const getUserTodos = async (userId: string): Promise<Todo[]> => {
  try {
    const q = query(collection(db, "todos"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Todo);
  } catch (error) {
    console.error("Error getting user todos:", error);
    throw error;
  }
};

// Update a todo
export const updateTodo = async (todoId: string, updates: Partial<Todo>): Promise<void> => {
  try {
    await updateDoc(doc(db, "todos", todoId), updates);
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
};

// Delete a todo
export const deleteTodo = async (todoId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "todos", todoId));
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
};