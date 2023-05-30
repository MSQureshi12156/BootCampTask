import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import ImageCard from "./components/ImageCard";
import ThreeCards from "./components/ThreeCards";
import NewCards from "./components/NewCard";
import MethodCard from "./components/MethodCard";
import Application from "./components/Application";
import Teachers from "./components/Teachers";
import Review from "./components/Reviews";
import Footer from "./components/Footer";
import ContactUs from './component/contact-Us';
import TeacherListPage from './route/TeacherListPage';
import StudentListPage from './route/StudentListPage';
import CourseListPage from './route/CourseListPage';
import AddTeacherForm from './component/add-teacher';
import AddStudentForm from './component/add-student';
import AddCourseForm from './component/add-course';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ImageCard />
      <br />
      <ThreeCards />
      <br />
      <NewCards />
      <br />
      <MethodCard />
      
      <Application />
      <br />
      <Teachers />
      <main>
        <section className="container">
          <div children="title">
            <h2>Our Reviews</h2>
            <div className="underline"></div>
          </div>
          <Review />
        </section>
      </main>
      <Footer/>
    
    <Routes>
      {/* <Route exact path="/" element={<Dashboard />} /> */}
      <Route exact path="/contact-us" element={<ContactUs />} />
      <Route exact path="/teachers-list" element={<TeacherListPage />} />
      <Route exact path="/students-list" element={<StudentListPage />} />
      <Route exact path="/courses-list" element={<CourseListPage />} />
      <Route exact path="/add-teacher" element={<AddTeacherForm />} />
      <Route exact path="/add-student" element={<AddStudentForm />} />
      <Route exact path="/add-course" element={<AddCourseForm />} />
    </Routes>
    </div>
  );
};

export default App;
