import { useContext } from 'react';
import { ToggleSThemeContext } from './SThemeContext';

// 获取切换主题的功能函数。
const useToggleTheme = () => {
    return useContext(ToggleSThemeContext)
}

export default useToggleTheme;
