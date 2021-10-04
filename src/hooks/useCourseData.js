import { useEffect } from "react";
import { useState } from "react"

const useCourseData = (url) => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);

    return [courses];
}

export default useCourseData;