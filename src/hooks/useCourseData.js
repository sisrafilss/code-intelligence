import { useEffect } from "react";
import { useState } from "react"

// Load Data from api or Root folder
const useCourseData = (url) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [url]);

    return [courses];
}

export default useCourseData;