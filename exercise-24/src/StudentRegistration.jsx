import { useForm } from "react-hook-form";

export const StudentRegistration = () => {
  const subjects = ["Mathmatics", "Science", "English"];
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
  alert(`Registration Successful!\n${JSON.stringify(data, null, 2)}`);
   };
   
  return (
    <div className="max-w-4xl mx-auto bg-gray-200 p-4 rounded-2xl">
      <h1 className="py-4 px-2 font-bold text-3xl">Student Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div>
          <label className="text-lg font-semibold">Student Name</label> <br />
          <input
            className=" text-xl no-outline w-full border-2 border-gray-700 rounded-sm"
            type="text"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 2,
                message: "Username must be at least 2 characters",
              },
            })}
          />
          {errors.username && (
            <p className="text-red-600 text-xl">{errors.username.message}</p>
          )}
         
        </div>
        <div className="mb-2">
          <label className="text-lg font-semibold">Email</label> <br />
          <input
            className="no-outline w-full border-2 border-gray-700 rounded-sm"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="text-red-600 text-xl">{errors.email.message}</p>}
        </div>
        <div className="mb-2">
          <label className="text-lg font-semibold">Grade Level</label> <br />
          <select className="no-outline w-full border-2 border-gray-700 rounded-sm"
          {...register("grade", {required: "Please select a grade"})}
          >
            <option value="">Select Grade</option>
            <option value="Grade 9">Grade 9</option>
            <option value="Grade 10">Grade 10</option>
            <option value="Grade 11">Grade 11</option>
            <option value="Grade 12">Grade 12</option>
          </select>
          {errors.grade &&  <p className="text-red-600 text-xl">{errors.grade.message}</p>}
        </div>
        <div className="mb-2">
          <h6 className="text-lg font-semibold">Subjects interest</h6>
          <div className="flex flex-col">
            {subjects.map((subject) => (
              <label key={subject}
              className="flex gap-1 text-md font-medium">
                <input type="checkbox" value={subject}
                {...register('subjects', {required: "Select al least one subject"})}
                 />
                {subject}
              </label>
            ))}
            {
              errors.subjects &&  <p className="text-red-600 text-xl">{errors.subjects.message}</p>
            }
          </div>
        </div>
        <button className="mx-auto bg-red-500 w-full text-center text-xl text-white rounded-md py-1  ">
          Register
        </button>
      </form>
    </div>
  );
};
