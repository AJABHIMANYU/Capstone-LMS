function CourseCard({ course }) {
    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{course.instructor}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="bg-blue-100 rounded-full px-3 py-1">
              <span className="text-sm text-blue-600">{course.progress}% Complete</span>
            </div>
            <button className="text-blue-600 hover:text-blue-700">Continue</button>
          </div>
        </div>
      </div>
    );
  }
  
  export default CourseCard;