import { useEffect, useState } from "react";
import {
    SunIcon,
    MoonIcon,
    Cog6ToothIcon
} from "@heroicons/react/24/outline";

const ThemeBar = () => {
    const [theme, setTheme] = useState("dark");

    const handleThemeChange = (e) => {
        setTheme(e.currentTarget.dataset.theme);
        console.log(e.currentTarget.dataset.theme);
        document.documentElement.setAttribute("data-theme", e.currentTarget.dataset.theme);
        localStorage.setItem("MyCustomTheme", e.currentTarget.dataset.theme);
    };

    useEffect(() => {
        setTheme(localStorage.getItem("MyCustomTheme"));
        console.log(theme);
        if (theme) {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme]); 

    return (
        <>
            <aside className="theme-bar">
                <button
                    className="btn theme"
                    aria-label="Light Theme"
                    title="Light Theme"
                    data-theme="light"
                    onClick={handleThemeChange}
                >
                    <SunIcon style={{ width: "24px", height: "24px" }} />
                </button>
                <button
                    className="btn theme"
                    aria-label="Dark Theme"
                    title="Dark Theme"
                    data-theme="dark"
                    onClick={handleThemeChange}
                >
                    <MoonIcon style={{ width: "24px", height: "24px" }} />
                </button>
                <button
                    className="btn theme"
                    aria-label="Custom Theme"
                    title="Custom Theme"
                    data-theme="custom"
                    onClick={handleThemeChange}
                >
                    <Cog6ToothIcon style={{ width: "24px", height: "24px" }} />
                </button>
            </aside>
        </>
    );
}

export default ThemeBar;