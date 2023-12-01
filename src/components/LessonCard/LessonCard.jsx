import React from 'react'
import Lesson from "../../pages/Lesson"
import {data} from"../../helper/data"

const LessonCard = () => {
  return (
    <div>
      <Lesson data={data}/>
    </div>
  )
}

export default LessonCard



