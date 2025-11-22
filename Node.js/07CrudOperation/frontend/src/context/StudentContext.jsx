import { createContext, useContext, useEffect } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import { useState } from "react";
const StudentContext = createContext();

export const ContextProvider = ({ children }) => {
    const [studentData, setStudentData] = useState(null);

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const fetchData = async () => {
        try {

            const response = await axios.get(backendUrl + '/api/student/fetch');
            if (response.data.success) {
                setStudentData(response.data.data)
            }
            else {
                toast.error(response.data.message);
            }

        } catch (error) {
                toast.error(error.message);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const value = {
        studentData,
        backendUrl,
        fetchData ,
    }
    return (
        <StudentContext.Provider value={value}>
            {children}
        </StudentContext.Provider>
    )
}

export const useStudentContext = () => useContext(StudentContext);