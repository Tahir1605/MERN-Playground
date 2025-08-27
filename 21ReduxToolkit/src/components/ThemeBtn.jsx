import {useDispatch , useSelector} from 'react-redux';
import { changeTheme } from '../feature/ThemeSlice';
const ThemeBtn = () => {
    const theme = useSelector((state) => state.theme.value);
    const dispatch = useDispatch();
    const handleTheme = () => {
          dispatch(changeTheme())
    }
    return(
        <div>
            <button onClick={handleTheme} className={`py-2 px-4 rounded-md cursor-pointer text-xl font-semibold ${theme ? 'bg-gray-950 text-white' : 'bg-blue-600'}`}> {`${theme ? 'Dark' : 'Light'}`} Theme</button>
        </div>
    )
}

export default ThemeBtn