import "./App.css";
import "./css/Course.css";

import Course from "./components/Course";
import Header from "./Header";
import { courses } from "./components/data";
import { useState } from "react";

// Burada da ismi büyük harfle yaz

function App() {
  return (
    <div>
      <Header />
      <div className="course-main">
        {courses?.map((course) => (
          <Course key={course.id} course={course} /> // Burada da büyük harfli olmalı
        ))}
      </div>
    </div>
  );
}

export default App;
