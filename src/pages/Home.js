import React from "react";

function Home() {
  return (
    <div className="container-fluid bg-primary text-white py-5">
      {/* Hero Section */}
      <div className="container py-4 text-center">
        <img
          src="/08/images/img-it-UTNwL-IP.jpeg"
          alt="IT Department"
          className="mb-4 img-fluid rounded shadow"
          style={{ maxHeight: "250px", objectFit: "cover" }}
        />
        <h1 className="display-6 text-info">ยินดีต้อนรับ! สาขาเทคโนโลยีสารสนเทศ</h1>
        <p className="lead text-light fs-6">
          มุ่งเน้นการพัฒนาทักษะด้านไอที เพื่อสร้างนักพัฒนาโปรแกรม
          นักวิเคราะห์ระบบ และผู้เชี่ยวชาญด้านเทคโนโลยีที่พร้อมสู่โลกอนาคต
        </p>
        <div className="mt-4">
          <a
            href="#about"
            className="btn btn-info btn-lg me-3 textured-btn fs-6"
          >
            เกี่ยวกับสาขา
          </a>
          <a
            href="#courses"
            className="btn btn-outline-light btn-lg textured-btn fs-6"
          >
            หลักสูตรการเรียน
          </a>
        </div>
      </div>

      {/* Courses Section */}
      <div className="container mt-5">
        <h2 className="text-center text-info mb-4 fs-5">หลักสูตรที่น่าสนใจ</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <img
                src="images/20241121-094109.jpg"
                alt="Web Development"
                className="img-fluid rounded mb-3"
              />
              <h3 className="text-dark fs-6">การพัฒนาเว็บไซต์</h3>
              <p className="text-secondary fs-7">
                เรียนรู้การเขียนโปรแกรม HTML, CSS, JavaScript และ Frameworks
                ที่ได้รับความนิยม เช่น React และ Angular
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <img
                src="images/images.jpg"
                alt="Database Management"
                className="img-fluid rounded mb-3"
              />
              <h3 className="text-dark fs-6">การจัดการฐานข้อมูล</h3>
              <p className="text-secondary fs-7">
                เรียนรู้เกี่ยวกับระบบฐานข้อมูล เช่น MySQL, MongoDB และการจัดการข้อมูลอย่างมีประสิทธิภาพ
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-light rounded shadow-sm h-100">
              <img
                src="images/download (1).jpg"
                alt="Application Development"
                className="img-fluid rounded mb-3"
              />
              <h3 className="text-dark fs-6">การพัฒนาแอปพลิเคชัน</h3>
              <p className="text-secondary fs-7">
                สร้างแอปพลิเคชันบนมือถือและเดสก์ท็อปด้วย Java, Swift และ Flutter
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="container mt-5">
        <h2 className="text-center text-info mb-4 fs-5">เกี่ยวกับสาขา</h2>
        <p className="text-light text-center fs-6">
          สาขาเทคโนโลยีสารสนเทศเปิดสอนในระดับประกาศนียบัตรวิชาชีพ (ปวช.)
          และประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)
          โดยเน้นพัฒนานักเรียนให้มีความสามารถในด้านการเขียนโปรแกรม
          การวิเคราะห์ระบบ และการประยุกต์ใช้เทคโนโลยีในโลกธุรกิจ
        </p>
        <div className="text-center">
          <a href="#contact" className="btn btn-info btn-lg textured-btn fs-6">
            ติดต่อเรา
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;




