import { useState, useEffect } from "react";
function Course(){
    const[selectedCourse,setSelectedCourse]=useState("")
    const[CourseSelected,setCourseSelected] = useState("");

  useEffect(()=>{
    switch (selectedCourse) {
        case 'Java':
            setCourseSelected("Java");
            break;
        case 'Angular':
            setCourseSelected("Angular");
            break;
        case 'Javascript':
            setCourseSelected("Javascript");
            break;
        case 'Php':
            setCourseSelected("Php");
            break;
        default:
    }
  } , [selectedCourse]
  );
return(
    <div>
        Khóa học :
        <select onChange={(e)=>{setSelectedCourse(e.target.value)}}>
        <option value="Java">Java</option>
                <option value="Angular">Angular</option>
                <option value="Javascript">Javascript</option>
                <option value="Php">Php</option>
        </select>
        <h2>Bạn đã chọn khóa học : {CourseSelected}</h2>
    </div>
)

}
export default Course;